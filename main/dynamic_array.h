#ifndef DYNAMIC_ARRAY_H
#define DYNAMIC_ARRAY_H

typedef unsigned long size_t;

typedef struct {
    int* m_ptr;
    size_t m_size;
    size_t m_capacity;
} Dynamic_Array;

void init_array(Dynamic_Array* arr, size_t size);
void delete_array(Dynamic_Array* arr);
void push_back(Dynamic_Array* arr, int elem);
void push_front(Dynamic_Array* arr, int elem);
void insert_elem(Dynamic_Array* arr, int elem, size_t index);
void pop_back(Dynamic_Array* arr);
void pop_front(Dynamic_Array* arr);
void remove_elem(Dynamic_Array* arr, size_t index);
void print_array(Dynamic_Array* arr);
int* get(Dynamic_Array* arr, size_t index);
size_t get_size(Dynamic_Array* arr);
size_t get_capacity(Dynamic_Array* arr);
int is_empty(Dynamic_Array* arr);
void clear(Dynamic_Array* arr);
int find(Dynamic_Array* arr, int elem);

#endif // DYNAMIC_ARRAY_H

// The #ifndef, #define, and #endif directives above are called "include guards".
// They prevent this header file from being included more than once in a single compilation unit.
// Without them, multiple inclusions could cause redefinition errors for types and functions.
