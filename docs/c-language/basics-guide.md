---
sidebar_position: 1
---

## Table of Contents
1. [Getting Started](#1)
2. [Use of Library function](#2)
3. [Decision Control](#3)
    1. [if ](#3.1)
    2. [if-else](#3.2)
    3. [else if ](#3.3)
    4. [conditional statements ](#3.4)
4. [Loops](#4)
    1. [for ](#4.1)
    2. [while](#4.2)
    3. [do while ](#4.3)
    4. [continue](#4.4)
    5. [break](#4.5)
5. [Case control](#5)
6. [Function](#6)
    1. [simple function ](#6.1)
    2. [pass by value](#6.2)
    3. [library function](#6.3)
    4. [complex function](#6.4)
6. [Pointers](#7)
6. [Recursion](#8)
6. [Array](#9)
    1. [simple array ](#9.1)
    2. [call by value example](#9.2)
    3. [call by reference example](#9.3)


### Reference
All code taken directly from the book [Let Us C - By Yashavant Kanetkar](https://archive.org/download/let-us-c/LET%20US%20C.pdf)

## Getting Started <a name="1"></a>
 The basic syntax of C is given below,

 ```c
 # include <stdio.h>
int main( )
{
int p, n ;
float r, si ;
p = 1000 ;
n = 3 ;
r = 8.5 ;
/* formula for simple interest */
si = p * n * r / 100 ;
printf ( "%f\n" , si ) ;
return 0 ;
}
```

example of taking an input from user
```c
# include <stdio.h>
int main( )
{
int num ;
printf ( "Enter a number: " ) ;
scanf ( "%d", &num ) ;
printf ( "Now I am letting you on a secret...\n" ) ;
printf ( "You have just entered the number %d\n", num ) ;
return 0 ;
}
```

## Use of Library function <a name="2"></a>
Program using the math.h library to perform exponentiation.

```c
# include <math.h>
# include <stdio.h>
int main( )
{
float a ;
a = pow ( 3.0, 2.0 ) ;
printf ( "%f", a ) ;
}
```

## Decision Control <a name="3"></a>
Decision control is implemented using if statement, if-else statement, conditional operators.

if statement <a name="3.1"></a>
```c
# include <stdio.h>
int main( )
{
int num ;
printf ( "Enter a number less than 10 : " ) ;
scanf ( "%d", &num ) ;
if ( num < 10 )
printf ( "What an obedient servant you are !\n" ) ;
    return 0 ;
}
```

if-else statement <a name="3.2"></a>
```c
/* Method – I */
# include <stdio.h>
int main( )
{
    int m1, m2, m3, m4, m5, per ;

    printf ( "Enter marks in five subjects: " ) ;
    scanf ( "%d %d %d %d %d", &m1, &m2, &m3, &m4, &m5 ) ;
    per = ( m1 + m2 + m3 + m4 + m5 ) * 100 / 500 ;

    if ( per >= 60 )
        printf ( "First division\n" ) ;
    else
    {
        if ( per >= 50 )
            printf ( "Second division\n" ) ;
        else
        {
            if ( per >= 40 )
                printf ( "Third division\n" ) ;
            else
                printf ( "Fail\n" ) ;
        }
    }

    return 0 ;
}
```

else if statement <a name="3.3"></a>
```c
/* else if ladder demo */
# include <stdio.h>
int main( )
{
    int m1, m2, m3, m4, m5, per ;

    printf ( "Enter marks in five subjects " ) ;
    scanf ( "%d %d %d %d %d", &m1, &m2, &m3, &m4, &m5 ) ;

    per = ( m1+ m2 + m3 + m4+ m5 ) * 100 /500 ;

    if ( per >= 60 )
        printf ( "First division\n" ) ;
    else if ( per >= 50 )
        printf ( "Second division\n" ) ;
    else if ( per >= 40 )
        printf ( "Third division\n" ) ;
    else
        printf ( "fail\n" ) ;

    return 0 ;
}
```
Conditional operators <a name="3.4"></a>

```c
/* Insurance of driver - using logical operators */
# include <stdio.h>
int main( )
{
  char sex, ms ;
  int age ;

  printf ( "Enter age, sex, marital status " ) ;
  scanf ( "%d %c %c", &age, &sex, &ms ) ;

  if ( ( ms == 'M') || ( ms == 'U' && sex == 'M' && age > 30 ) || 
      ( ms == 'U' && sex == 'F' && age > 25 ) )
    printf ( "Driver should be insured\n" ) ;
  else
    printf ( "Driver should not be insured\n" ) ;

  return 0 ;
}
```
Code to calculate gross Salary

```c
/* Calculation of gross salary */
# include <stdio.h>
int main( )
{
    float bs, gs, da, hra ;

    printf ( "Enter basic salary: " ) ;
    scanf ( "%f", &bs ) ;
    
    if ( bs < 1500 )
    {
        hra = bs * 10 / 100 ;
        da = bs * 90 / 100 ;
    }
    else
    {
        hra = 500 ;
        da = bs * 98 / 100 ;
    }
    gs = bs + hra + da ;
    printf ( "gross salary = Rs. %f\n", gs ) ;

    return 0 ;
}
```

## Loops <a name="4"></a>
for loop <a name="4.1"></a>

```c
/* Calculation of simple interest for 3 sets of p, n and r */
# include <stdio.h>
int main( )
{
    int p, n, count ;
    float r, si ;

    for ( count = 1 ; count <= 3 ; count = count + 1 )
    {
        printf ( "Enter values of p, n, and r " ) ;
        scanf ( "%d %d %f", &p, &n, &r ) ;
        si = p * n * r / 100 ;
        printf ( "Simple Interest = Rs.%f\n", si ) ;
    }
    return 0 ;
}
```
while loop <a name="4.2"></a>

```c
/* Calculation of simple interest for 3 sets of p, n and r */
# include <stdio.h>
int main( )
{
    int p, n, count ;
    float r, si ;

    count = 1 ;
    while ( count <= 3 )
    {
        printf ( "\nEnter values of p, n and r " ) ;
        scanf ( "%d %d %f", &p, &n, &r ) ;
        si = p * n * r / 100 ;
        printf ( "Simple interest = Rs. %f", si ) ;
        
        count = count + 1 ;
    }

    return 0 ;
}
```

do while <a name="4.3"></a>

```c
/* Execution of a loop an unknown number of times */
# include <stdio.h>
int main( )
{
    char another ;
    int num ;
    do
    {
        printf ( "Enter a number " ) ;
        scanf ( "%d", &num ) ;
        printf ( "square of %d is %d\n", num, num * num ) ;
        printf ( "Want to enter another number y/n " ) ;
        fflush ( stdin ) ;
        scanf ( "%c", &another ) ;
    } while ( another == 'y' ) ;
    
    return 0 ;
}
```

continue <a name="4.4"></a>

```c
# include <stdio.h>
int main( )
{
    int i, j ;

    for ( i = 1 ; i <= 2 ; i++ )
    {
        for ( j = 1 ; j <= 2 ; j++ )
        {
            if ( i == j )
            continue ;
            
            printf ( "%d %d\n", i, j ) ;
        }
    }
    return 0 ;
}
```

break <a name="4.5"></a>

```c
# include <stdio.h>
int main( )
{
    int num, i ;

    printf ( "Enter a number " ) ;
    scanf ( "%d", &num ) ;

    i = 2 ;
    while ( i <= num - 1 )
    {
        if ( num % i == 0 )
        {
            printf ( "Not a prime number\n" ) ;
            break ;
        }
        i++ ;
    }

    if ( i == num )
        printf ( "Prime number\n" ) ;
}
```

## Case control <a name="5"></a>

```c
# include<stdio.h>
int main( )
{
    int i = 2 ;
    switch ( i )
    {
        case 1 :
            printf ( "I am in case 1 \n" ) ;
            break ;
        case 2 :
            printf ( "I am in case 2 \n" ) ;
            break ;
        case 3 :
            printf ( "I am in case 3 \n" ) ;
            break ;
        default :
            printf ( "I am in default \n" ) ;
    }
    return 0 ;
}
```

## Function <a name="6"></a>

simple function <a name="6.1"></a>
```c
# include <stdio.h>
void message( ) ; /* function prototype declaration */
int main( )
{
    message( ) ; /* function call */
    printf ( "Cry, and you stop the monotony!\n" ) ;
    return 0 ;
}
void message( ) /* function definition */
{
    printf ( "Smile, and the world smiles with you...\n" ) ;
}
```

pass by value <a name="6.2"></a>
```c
/* Sending and receiving values between functions */
# include <stdio.h>
int calsum ( int x, int y, int z ) ;
int main()
{
    int a, b, c, sum ;
    printf ( "Enter any three numbers " ) ;
    scanf ( "%d %d %d", &a, &b, &c ) ;
    sum = calsum ( a, b, c ) ;
    printf ( "Sum = %d\n", sum ) ;
    return 0 ;
}
int calsum ( int x, int y, int z )
{
    int d ;

    d = x + y + z ;
    return ( d ) ;
}
```

library function <a name="6.3"></a>
```c
# include <stdio.h>
# include <math.h>

int main( )
{
    float a = 0.5 ;
    float w, x, y, z ;

    w = sin ( a ) ;
    x = cos ( a ) ;
    y = tan ( a ) ;
    z = pow ( a, 2 ) ;
    printf ( "%f %f %f %f\n", w, x, y, z ) ;
    return 0 ;
}
```

complex value <a name="6.4"></a>
```c
# include <stdio.h>
void italy() ;
void brazil() ;
void argentina() ;
int main()
{
    printf ( "I am in main\n" ) ;
    italy() ;
    printf ( "I am finally back in main\n" ) ;
    return 0 ;
}
void italy()
{
    printf ( "I am in italy\n" ) ;
    brazil() ;
    printf ( "I am back in italy\n" ) ;
}
void brazil()
{
    printf ( "I am in brazil\n" ) ;
    argentina() ;
}
void argentina()
{
    printf ( "I am in argentina\n" ) ;
}
```

## Pointers <a name="7"></a>
Value of pointer
```c
# include <stdio.h>
int main( )
{
    int i = 3 ;
    printf ( "Address of i = %u\n", &i ) ;
    printf ( "Value of i = %d\n", i ) ;
    return 0 ;
}
```

swapping of value using pointers

```c
# include <stdio.h>
void swapr ( int *, int * ) ;
int main( )
{
    int a = 10, b = 20 ;
    swapr ( &a, &b ) ;
    printf ( "a = %d b = %d\n", a, b ) ;
    return 0 ;
}
void swapr ( int *x, int *y )
{
    int t ;
    
    t = *x ;
    *x = *y ;
    *y = t ;
}
```

## Recursion <a name="8"></a>
factorial of a number using recursion

```c
# include <stdio.h>
int rec ( int ) ;
int main( )
{
    int a, fact ;

    printf ( "Enter any number " ) ;
    scanf ( "%d", &a ) ;

    fact = rec ( a ) ;
    printf ( "Factorial value = %d\n", fact ) ;
    return 0 ;
}
int rec ( int x )
{
    int f ;

    if ( x == 1 )
        return ( 1 ) ;
    else
        f = x * rec ( x - 1 ) ;
    return ( f ) ;
}
```


## Array <a name="9"></a>
Simple array <a name="9.1"></a>
```c
# include <stdio.h>
int main( )
{
    int avg, sum = 0 ;
    int i ;
    int marks[ 30 ] ; /* array declaration */
    for ( i = 0 ; i <= 29 ; i++ )
    {
        printf ( "Enter marks " ) ;
        scanf ( "%d", &marks[ i ] ) ; /* store data in array */
    }
    for ( i = 0 ; i <= 29 ; i++ )
        sum = sum + marks[ i ] ; /* read data from an array*/

    avg = sum / 30 ;
    printf ( "Average marks = %d\n", avg ) ;
    return 0 ;
}
```

Call a element in array by value <a name="9.2"></a>
```c
/* Demonstration of call by value */
# include <stdio.h>
void display ( int ) ;
int main( )
{
    int i ;
    int marks[ ] = { 55, 65, 75, 56, 78, 78, 90 } ;
    for ( i = 0 ; i <= 6 ; i++ )
        display ( marks[ i ] ) ;
    return 0 ;
}
void display ( int m )
{
    printf ( "%d ", m ) ;
}
```

Call a element in array by reference <a name="9.3"></a>
```c
/* Demonstration of call by reference */
# include <stdio.h>
void disp ( int * ) ;
int main( )
{
    int i ;
    int marks[ ] = { 55, 65, 75, 56, 78, 78, 90 } ;
    for ( i = 0 ; i <= 6 ; i++ )
        disp ( &marks[ i ] ) ;
    return 0 ;
}
void disp ( int *n )
{
    printf ( "%d ", *n ) ;
}
```