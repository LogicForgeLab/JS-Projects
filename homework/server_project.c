#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <pthread.h>

#define PORT 8080
#define BUFFER_SIZE 4096
#define DB_FILE "products.db"

typedef struct
{
    char name[50];
} Product;

pthread_mutex_t db_mutex = PTHREAD_MUTEX_INITIALIZER;

void post_product(int client_sock, char *name)
{
    Product p;
    memset(&p, 0, sizeof(Product));
    strncpy(p.name, name, sizeof(p.name) - 1);

    pthread_mutex_lock(&db_mutex);

    FILE *fp = fopen(DB_FILE, "ab");

    if (fp)
    {
        fwrite(&p, sizeof(Product), 1, fp);
        fclose(fp);
    }

    pthread_mutex_unlock(&db_mutex);

    send(client_sock, "Product successfully added", 26, 0);
}

void get_product(int client_sock, char *name)
{
    Product p;
    int found = 0;

    pthread_mutex_lock(&db_mutex);

    FILE *fp = fopen(DB_FILE, "rb");

    if (fp)
    {
        long offset = 0;

        while (1)
        {
            fseek(fp, offset, SEEK_SET);

            if (fread(&p, sizeof(Product), 1, fp) != 1)
                break;

            if (strcmp(p.name, name) == 0)
            {
                found = 1;
                break;
            }

            offset += sizeof(Product);
        }

        fclose(fp);
    }

    pthread_mutex_unlock(&db_mutex);

    if (found)
        send(client_sock, p.name, strlen(p.name) + 1, 0);
    else
        send(client_sock, "Not Found", 10, 0);
}

void get_all_products(int client_sock)
{
    char response[BUFFER_SIZE];
    response[0] = '\0';

    Product p;

    pthread_mutex_lock(&db_mutex);

    FILE *fp = fopen(DB_FILE, "rb");

    if (fp)
    {
        while (fread(&p, sizeof(Product), 1, fp) == 1)
        {
            strcat(response, p.name);
            strcat(response, "\n");
        }

        fclose(fp);
    }

    pthread_mutex_unlock(&db_mutex);

    if (strlen(response) == 0)
        strcpy(response, "Catalog is empty");

    send(client_sock, response, strlen(response) + 1, 0);
}

void *handle_client(void *arg)
{
    int client_sock = *(int *)arg;
    free(arg);

    char buffer[BUFFER_SIZE];

    int n = recv(client_sock, buffer, sizeof(buffer) - 1, 0);

    if (n > 0)
    {
        buffer[n] = '\0';

        if (strncmp(buffer, "POST ", 5) == 0)
        {
            post_product(client_sock, buffer + 5);
        }
        else if (strcmp(buffer, "GET") == 0)
        {
            get_all_products(client_sock);
        }
        else if (strncmp(buffer, "GET ", 4) == 0)
        {
            get_product(client_sock, buffer + 4);
        }
        else
        {
            send(client_sock, "Invalid Command", 16, 0);
        }
    }

    close(client_sock);
    return NULL;
}

int main()
{
    FILE *fp = fopen(DB_FILE, "ab");

    if (fp == NULL)
    {
        perror("db");
        return 1;
    }

    fclose(fp);

    int server_fd;
    struct sockaddr_in server_addr, client_addr;
    socklen_t addrlen = sizeof(client_addr);

    server_fd = socket(AF_INET, SOCK_STREAM, 0);

    if (server_fd < 0)
    {
        perror("socket");
        return 1;
    }

    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    server_addr.sin_addr.s_addr = INADDR_ANY;

    if (bind(server_fd, (struct sockaddr *)&server_addr,
             sizeof(server_addr)) < 0)
    {
        perror("bind");
        return 1;
    }

    if (listen(server_fd, 10) < 0)
    {
        perror("listen");
        return 1;
    }

    printf("Server started on port %d\n", PORT);

    while (1)
    {
        int client_sock = accept(
            server_fd,
            (struct sockaddr *)&client_addr,
            &addrlen);

        if (client_sock < 0)
            continue;

        pthread_t tid;

        int *pclient = malloc(sizeof(int));
        *pclient = client_sock;

        pthread_create(&tid, NULL, handle_client, pclient);
        pthread_detach(tid);
    }

    close(server_fd);

    return 0;
}