#include <stdio.h>
#include <stdlib.h>
#include "dynamic_array.h"

// Doubles the capacity of the array
static void resize(Dynamic_Array* arr);

// Initializes the array
void init_array(Dynamic_Array* arr, size_t size)
{
    arr->m_ptr = (int*) malloc(size * sizeof(int));
    arr->m_capacity = size;
    arr->m_size = 0;
}

// Deletes the array and frees memory
void delete_array(Dynamic_Array* arr)
{
    free(arr->m_ptr);
    arr->m_ptr = NULL;
    arr->m_capacity = 0;
    arr->m_size = 0;
}

// Adds an element to the end of the array
void push_back(Dynamic_Array* arr, int elem)
{
    if (arr->m_capacity == arr->m_size)
    {
        resize(arr);
    }
    arr->m_ptr[arr->m_size] = elem;
    ++arr->m_size;
}

// Adds an element to the front of the array
void push_front(Dynamic_Array* arr, int elem)
{
    // TODO: Implement
}

// Inserts an element at a specific index
void insert_elem(Dynamic_Array* arr, int elem, size_t index)
{
    // TODO: Implement
}

// Removes the last element
void pop_back(Dynamic_Array* arr)
{
    if (arr->m_size == 0) {
        printf("Array is empty.\n");
        return;
    }
    --arr->m_size;
}

// Removes the first element
void pop_front(Dynamic_Array* arr)
{
    // TODO: Implement
}

// Removes an element at a specific index
void remove_elem(Dynamic_Array* arr, size_t index)
{
    // TODO: Implement
}

// Prints the array
void print_array(Dynamic_Array* arr)
{
    printf("Array: ");
    for (size_t i = 0; i < arr->m_size; ++i) {
        printf("%d ", arr->m_ptr[i]);
    }
    printf("\n");
}

// Returns a pointer to the element at a specific index
int* get(Dynamic_Array* arr, size_t index)
{
    if (index >= arr->m_size) {
        printf("Out of range.\n");
        exit(0);
    }
    return &arr->m_ptr[index];
}

// Returns the current size of the array
size_t get_size(Dynamic_Array* arr)
{
    return arr->m_size;
}

// Returns the current capacity of the array
size_t get_capacity(Dynamic_Array* arr)
{
    // TODO: Implement
    return arr->m_capacity;
}

// Checks if the array is empty
int is_empty(Dynamic_Array* arr)
{
    // TODO: Implement
    return arr->m_size == 0;
}

// Clears all elements from the array
void clear(Dynamic_Array* arr)
{
    // TODO: Implement
    arr->m_size = 0;
}

// Finds the index of an element, returns -1 if not found
int find(Dynamic_Array* arr, int elem)
{
    // TODO: Implement
    for (size_t i = 0; i < arr->m_size; ++i) {
        if (arr->m_ptr[i] == elem) {
            return (int)i;
        }
    }
    return -1;
}

///////////////////////////////////////////////////

static void resize(Dynamic_Array* arr)
{
    arr->m_capacity *= 2;
    arr->m_ptr = (int*)realloc(arr->m_ptr, arr->m_capacity * sizeof(int));
}