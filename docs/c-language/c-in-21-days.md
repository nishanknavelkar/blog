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

### Getting Started <a name="4"></a>
### Statements,Operators,Expressions <a name="5"></a>
### Function <a name="6"></a>
### Arrays, Program control(for, while, do...while) <a name="7"></a>
### Numeric Arrays <a name="8"></a>
### Pointers <a name="9"></a>
### Characters, Strings <a name="10"></a>
### Structures,Unions, Typedefs <a name="11"></a>
### Variable Scopes <a name="12"></a>
### Advanced Program control(break,continue,switch,exit()) <a name="13"></a>
### Input and Output <a name="14"></a>
### Pointers-advanced <a name="15"></a>
### Using Disc files <a name="16"></a>
### Manipulating strings <a name="17"></a>
### Functions-advanced <a name="18"></a>
### C function Library <a name="19"></a>
### Working with memory <a name="20"></a>
### Advanced compiler use <a name="21"></a>