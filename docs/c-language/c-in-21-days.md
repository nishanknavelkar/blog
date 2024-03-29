---
sidebar_position: 2
---

Learnings from the book "Sams teach yoursels C in 21 days" 

| Days    | Topics          |
| -------- | -------        | 
| Day 1  | [Getting Started](#1)    |
| Day 2  | [Components of C Program](#2)       |
| Day 3  | [Variables and Constants](#3)         |
| Day 4  | [Statements,Operators,Expressions](#4)|
| Day 5  | [Function](#5)     |
| Day 6  | [Arrays, Program control(for, while, do...while)](#6)    |
| Day 7  | [Display - printf](#7)     |
| Day 8  | [Numeric Arrays](#8)   |
| Day 9  | [Pointers](#9)     |
| Day 10  | [Characters, Strings](#10)      |
| Day 11  | [Structures,Unions, Typedefs](#11)     |
| Day 12  | [Variable Scopes](#12)     |
| Day 13  | [Advanced Program control(break,continue,switch,exit())](#13)    |
| Day 14  | [Input and Output](#14)         |
| Day 15  | [Pointers-advanced](#15)        |
| Day 16  | [Using Disc files](#16)        |
| Day 17  | [Manipulating strings](#17)     |
| Day 18  | [Functions-advanced](#18)       |
| Day 19  | [C function Library](#19)       |
| Day 20  | [Working with memory](#20)      |
| Day 21  | [Advanced compiler use](#21)    |


### Getting Started <a name="1"></a>

Compiling a program using GCC compiler
```
gcc helloworld.c
```

First Program
```
#include<stdio.h>

int main(void)
{
    printf("Hello, World!\n"):
    return 0;
}
```

### Components of C Program <a name="2"></a>

Consider the following Program
```
1: /* Program to calculate the product of two numbers. */
2: #include <stdio.h>
3:
4: int val1, val2, val3;
5:
6: int product(int x, int y);
7:
8: int main( void )
9: {
10:     /* Get the first number */
11:     printf(“Enter a number between 1 and 100: “);
12:     scanf(“%d”, &val1);
13:
14:     /* Get the second number */
15:     printf(“Enter another number between 1 and 100: “);
16:     scanf(“%d”, &val2);
17:
18:     /* Calculate and display the product */
19:     val3 = product(val1, val2);
20:     printf (“%d times %d = %d\n”, val1, val2, val3);
21:
22:     return 0;
23: }
24:
25: /* Function returns the product of the two values provided */
26: int product(int x, int y)
27: {
28:     return (x * y);
29: }
```
Components:
1. main() Function - 8 to 23
2. #include directive - 2
3. variable definition - 4
4. Function Prototype - 6
5. Program statements - 11,12,15,16...
6. Function Definition - 26 to 29

### Variables and Constants <a name="3"></a>

<em>byte</em> is the fundamental unit of computer data storage

#### C'x numeric datatypes
 |Character|Keyword|Bytes Required|Range|
 |---------|--------|-------------|-----|
 |Character|char|1|-128 to 127|
 |Short Integer|short|2|-32767 to 32767|
 |Integer|int|4|-2,147,438,647 to 2,147,438,647|
 |Long Integer|long|4|-2,147,438,647 to 2,147,438,647|
 |Long Long Integer|long long|8|-9,223,372,036,854,775,807 to 9,223,372,036,854,775,807|

 More on page 45

 #### Typedef and initializing variables
 Typedef creates a new name for a existing datatype, can rename int to integer
 ```
typedef int integer;
 ```

 intializing variables
 ```
int count;
count = 0;
 ```

### Statements,Operators,Expressions <a name="4"></a>
#### Statement
Statement is a complete instruction to carry out a task
```
x = 2+3; #assignment statement

# compound statement is also called a block
{
printf(“Hello, “);
printf(“world!”);
}
```
#### Operators
A symbol that instructs C to perform some operation
```
x=y # assignment operator

a = 10;

# unary mathematical operators
b = ++a; # increment operator
c = --a; # decrement operator

# relational operators (if and while statements)
if (expression)
{
statement;
}

# logical operators
# AND OR NOT -> Page 81
```

#### Expressions
### Function <a name="5"></a>
Function is named, is independent, performs a specific task, can return value to the calling program

```
/* Demonstrates a simple function */
#include <stdio.h>
long cube(long x);
long input, answer;
int main( void )
{
    printf(“Enter an integer value: “);
    scanf(“%d”, &input);
    answer = cube(input);
    /* Note: %ld is the conversion specifier for */
    /* a long integer */
    printf(“\nThe cube of %ld is %ld.\n”, input, answer);

    return 0;
 }

 /* Function: cube() - Calculates the cubed value of a variable */
 long cube(long x)
 {
    long x_cubed;

    x_cubed = x * x * x;
    return x_cubed;
 }
```
### Arrays, Program control(for, while, do...while) <a name="6"></a>
An array is an indexed group of data storage locations
```
int data[1000];
int index;
index = 100;
data[index] = 12; /* The same as data[100] = 12 */
```

#### Program control
for, while, do statements

### Display - printf <a name="7"></a>
printf function , used to display data on screen

more examples
### Numeric Arrays <a name="8"></a>
* Single Dimensional Arrays
```
float expenses[100];
int a[10];
/* additional statements go here */
expenses[i] = 100; // i is an integer variable
expenses[2 + 3] = 100; // equivalent to expenses[5]
expenses[a[2]] = 100; // a[] is an integer array
```
* Multi Dimensional Arrays

For example: two dimensional array
```
int checker[8][8];
```

Alternate way of anming and declaring arrays
```
#define MONTHS 12
int array[MONTHS];
is equivalent to this statement:
int array[12];

const int MONTHS = 12;
int array[MONTHS]; /* Wrong! */
```
### Pointers <a name="9"></a>
Pointer is a variable that contains the address if another variable

Declaring Pointers
```
typename *ptrname;

char *ch1, *ch2; /* ch1 and ch2 both are pointers to type char */

float *value, percent; /* value is a pointer to type float, and /* percent is an ordinary float variable */
```
Initializing Pointers
```
pointer = &variable;

p_rate = &rate; /* assign the address of rate to p_rate */
```
Using Pointers
```
printf(“%d”, rate);
or you could write this statement:
printf(“%d”, *p_rate);
```

Pointer Arithmetic
### Characters, Strings <a name="10"></a>

char datatype

Array of characters
```
char string[10] = { ‘A’, ‘l’, ‘a’, ‘b’, ‘a’, ‘m’, ‘a’, ‘\0’ };
```

malloc() Function

Memory allocation function in C
```
Example 1
#include <stdlib.h>
#include <stdio.h>
int main( void )
{
    /* allocate memory for a 100-character string */
    char *str;
    str = (char *) malloc(100);
    if (str == NULL)
    {
        printf( “Not enough memory to allocate buffer\n”);
        exit(1);
    }
    printf( “String was allocated!\n” );
    return 0;
}
Example 2
/* allocate memory for an array of 50 integers */
int *numbers;
numbers = (int *) malloc(50 * sizeof(int));
Example 3
/* allocate memory for an array of 10 float values */
float *numbers;
numbers = (float *) malloc(10 * sizeof(float));
```
### Structures,Unions, Typedefs <a name="11"></a>
A structure is a collection of one or more variables grouped under a single name for easy manipulation.

```
struct coord {
    int x;
    int y;
};
```

* Using a simple structure
```
/* simple.c - Demonstrates the use of a simple structures*/

 #include <stdio.h>

 int length, width;
 long area;

 struct coord{
    int x;
    int y;
 } myPoint;

 int main( void )
 {
    /* set values into the coordinates */
    myPoint.x = 12;
    myPoint.y = 14;

    printf(“\nThe coordinates are: (%d, %d).”,
    myPoint.x, myPoint.y);

    return 0;
 }
```
* Complex Structures
* Initializing structures
* Structures and pointers
* Unions
### Variable Scopes <a name="12"></a>
The scope of a variable refers to the extent to which different parts of a program have access to the variable—in other words, where the variable is visible
* External variables
* local Variables
### Advanced Program control(break,continue,switch,exit()) <a name="13"></a>
* Ending loops early with break
* goto statement
* Infinite loops
* Exiting the program
* Executing OS commands in a program

### Input and Output <a name="14"></a>
### Pointers-advanced <a name="15"></a>
* Declaring Pointers to pointers
* Pointers and Multidimensional Arrays
* Working with Arrays of Pointers
* Working with Pointers to Functions
### Using Disc files <a name="16"></a>
### Manipulating strings <a name="17"></a>
### Functions-advanced <a name="18"></a>
* Passing Pointers to Functions
* Functions That Return a Pointer

### C function Library <a name="19"></a>
* Math functions
* Dealing with time
* Error handling
* Searching and sorting
### Working with memory <a name="20"></a>
* Type conversions

numerical data types

char
short
int
long
long long
float
double
long double

* Allocating memory storage space
* Manipulating Memory Blocks
### Advanced compiler use <a name="21"></a>
* Modular Programming techniques
* 