"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4317],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3356:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i=void 0,o={unversionedId:"c-language/c-in-21-days",id:"c-language/c-in-21-days",title:"c-in-21-days",description:'Learnings from the book "Sams teach yoursels C in 21 days"',source:"@site/docs/c-language/c-in-21-days.md",sourceDirName:"c-language",slug:"/c-language/c-in-21-days",permalink:"/blog/docs/c-language/c-in-21-days",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/c-language/c-in-21-days.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"basics-guide",permalink:"/blog/docs/c-language/basics-guide"},next:{title:"Create a Blog Post",permalink:"/blog/docs/tutorial-basics/create-a-blog-post"}},p={},s=[{value:'Getting Started <a name="1"></a>',id:"getting-started-",level:3},{value:'Components of C Program <a name="2"></a>',id:"components-of-c-program-",level:3},{value:'Variables and Constants <a name="3"></a>',id:"variables-and-constants-",level:3},{value:"C&#39;x numeric datatypes",id:"cx-numeric-datatypes",level:4},{value:"Typedef and initializing variables",id:"typedef-and-initializing-variables",level:4},{value:'Statements,Operators,Expressions <a name="4"></a>',id:"statementsoperatorsexpressions-",level:3},{value:"Statement",id:"statement",level:4},{value:"Operators",id:"operators",level:4},{value:"Expressions",id:"expressions",level:4},{value:'Function <a name="5"></a>',id:"function-",level:3},{value:'Arrays, Program control(for, while, do...while) <a name="6"></a>',id:"arrays-program-controlfor-while-dowhile-",level:3},{value:"Program control",id:"program-control",level:4},{value:'Display - printf <a name="7"></a>',id:"display---printf-",level:3},{value:'Numeric Arrays <a name="8"></a>',id:"numeric-arrays-",level:3},{value:'Pointers <a name="9"></a>',id:"pointers-",level:3},{value:'Characters, Strings <a name="10"></a>',id:"characters-strings-",level:3},{value:'Structures,Unions, Typedefs <a name="11"></a>',id:"structuresunions-typedefs-",level:3},{value:'Variable Scopes <a name="12"></a>',id:"variable-scopes-",level:3},{value:'Advanced Program control(break,continue,switch,exit()) <a name="13"></a>',id:"advanced-program-controlbreakcontinueswitchexit-",level:3},{value:'Input and Output <a name="14"></a>',id:"input-and-output-",level:3},{value:'Pointers-advanced <a name="15"></a>',id:"pointers-advanced-",level:3},{value:'Using Disc files <a name="16"></a>',id:"using-disc-files-",level:3},{value:'Manipulating strings <a name="17"></a>',id:"manipulating-strings-",level:3},{value:'Functions-advanced <a name="18"></a>',id:"functions-advanced-",level:3},{value:'C function Library <a name="19"></a>',id:"c-function-library-",level:3},{value:'Working with memory <a name="20"></a>',id:"working-with-memory-",level:3},{value:'Advanced compiler use <a name="21"></a>',id:"advanced-compiler-use-",level:3}],u={toc:s},d="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Learnings from the book "Sams teach yoursels C in 21 days" '),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Days"),(0,r.kt)("th",{parentName:"tr",align:null},"Topics"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#1"},"Getting Started"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#2"},"Components of C Program"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#3"},"Variables and Constants"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 4"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#4"},"Statements,Operators,Expressions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#5"},"Function"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#6"},"Arrays, Program control(for, while, do...while)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#7"},"Display - printf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 8"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#8"},"Numeric Arrays"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#9"},"Pointers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 10"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#10"},"Characters, Strings"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#11"},"Structures,Unions, Typedefs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 12"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#12"},"Variable Scopes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 13"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#13"},"Advanced Program control(break,continue,switch,exit())"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 14"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#14"},"Input and Output"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 15"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#15"},"Pointers-advanced"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 16"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#16"},"Using Disc files"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 17"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#17"},"Manipulating strings"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 18"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#18"},"Functions-advanced"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 19"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#19"},"C function Library"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 20"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#20"},"Working with memory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day 21"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#21"},"Advanced compiler use"))))),(0,r.kt)("h3",{id:"getting-started-"},"Getting Started ",(0,r.kt)("a",{name:"1"})),(0,r.kt)("p",null,"Compiling a program using GCC compiler"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gcc helloworld.c\n")),(0,r.kt)("p",null,"First Program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include<stdio.h>\n\nint main(void)\n{\n    printf("Hello, World!\\n"):\n    return 0;\n}\n')),(0,r.kt)("h3",{id:"components-of-c-program-"},"Components of C Program ",(0,r.kt)("a",{name:"2"})),(0,r.kt)("p",null,"Consider the following Program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1: /* Program to calculate the product of two numbers. */\n2: #include <stdio.h>\n3:\n4: int val1, val2, val3;\n5:\n6: int product(int x, int y);\n7:\n8: int main( void )\n9: {\n10:     /* Get the first number */\n11:     printf(\u201cEnter a number between 1 and 100: \u201c);\n12:     scanf(\u201c%d\u201d, &val1);\n13:\n14:     /* Get the second number */\n15:     printf(\u201cEnter another number between 1 and 100: \u201c);\n16:     scanf(\u201c%d\u201d, &val2);\n17:\n18:     /* Calculate and display the product */\n19:     val3 = product(val1, val2);\n20:     printf (\u201c%d times %d = %d\\n\u201d, val1, val2, val3);\n21:\n22:     return 0;\n23: }\n24:\n25: /* Function returns the product of the two values provided */\n26: int product(int x, int y)\n27: {\n28:     return (x * y);\n29: }\n")),(0,r.kt)("p",null,"Components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"main() Function - 8 to 23"),(0,r.kt)("li",{parentName:"ol"},"#include directive - 2"),(0,r.kt)("li",{parentName:"ol"},"variable definition - 4"),(0,r.kt)("li",{parentName:"ol"},"Function Prototype - 6"),(0,r.kt)("li",{parentName:"ol"},"Program statements - 11,12,15,16..."),(0,r.kt)("li",{parentName:"ol"},"Function Definition - 26 to 29")),(0,r.kt)("h3",{id:"variables-and-constants-"},"Variables and Constants ",(0,r.kt)("a",{name:"3"})),(0,r.kt)("em",null,"byte")," is the fundamental unit of computer data storage",(0,r.kt)("h4",{id:"cx-numeric-datatypes"},"C'x numeric datatypes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Character"),(0,r.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,r.kt)("th",{parentName:"tr",align:null},"Bytes Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Character"),(0,r.kt)("td",{parentName:"tr",align:null},"char"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"-128 to 127")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Short Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"short"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"-32767 to 32767")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"-2,147,438,647 to 2,147,438,647")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Long Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"-2,147,438,647 to 2,147,438,647")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Long Long Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"long long"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"-9,223,372,036,854,775,807 to 9,223,372,036,854,775,807")))),(0,r.kt)("p",null," More on page 45"),(0,r.kt)("h4",{id:"typedef-and-initializing-variables"},"Typedef and initializing variables"),(0,r.kt)("p",null," Typedef creates a new name for a existing datatype, can rename int to integer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"typedef int integer;\n")),(0,r.kt)("p",null," intializing variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int count;\ncount = 0;\n")),(0,r.kt)("h3",{id:"statementsoperatorsexpressions-"},"Statements,Operators,Expressions ",(0,r.kt)("a",{name:"4"})),(0,r.kt)("h4",{id:"statement"},"Statement"),(0,r.kt)("p",null,"Statement is a complete instruction to carry out a task"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"x = 2+3; #assignment statement\n\n# compound statement is also called a block\n{\nprintf(\u201cHello, \u201c);\nprintf(\u201cworld!\u201d);\n}\n")),(0,r.kt)("h4",{id:"operators"},"Operators"),(0,r.kt)("p",null,"A symbol that instructs C to perform some operation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"x=y # assignment operator\n\na = 10;\n\n# unary mathematical operators\nb = ++a; # increment operator\nc = --a; # decrement operator\n\n# relational operators (if and while statements)\nif (expression)\n{\nstatement;\n}\n\n# logical operators\n# AND OR NOT -> Page 81\n")),(0,r.kt)("h4",{id:"expressions"},"Expressions"),(0,r.kt)("h3",{id:"function-"},"Function ",(0,r.kt)("a",{name:"5"})),(0,r.kt)("p",null,"Function is named, is independent, performs a specific task, can return value to the calling program"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/* Demonstrates a simple function */\n#include <stdio.h>\nlong cube(long x);\nlong input, answer;\nint main( void )\n{\n    printf(\u201cEnter an integer value: \u201c);\n    scanf(\u201c%d\u201d, &input);\n    answer = cube(input);\n    /* Note: %ld is the conversion specifier for */\n    /* a long integer */\n    printf(\u201c\\nThe cube of %ld is %ld.\\n\u201d, input, answer);\n\n    return 0;\n }\n\n /* Function: cube() - Calculates the cubed value of a variable */\n long cube(long x)\n {\n    long x_cubed;\n\n    x_cubed = x * x * x;\n    return x_cubed;\n }\n")),(0,r.kt)("h3",{id:"arrays-program-controlfor-while-dowhile-"},"Arrays, Program control(for, while, do...while) ",(0,r.kt)("a",{name:"6"})),(0,r.kt)("p",null,"An array is an indexed group of data storage locations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int data[1000];\nint index;\nindex = 100;\ndata[index] = 12; /* The same as data[100] = 12 */\n")),(0,r.kt)("h4",{id:"program-control"},"Program control"),(0,r.kt)("p",null,"for, while, do statements"),(0,r.kt)("h3",{id:"display---printf-"},"Display - printf ",(0,r.kt)("a",{name:"7"})),(0,r.kt)("p",null,"printf function , used to display data on screen"),(0,r.kt)("p",null,"more examples"),(0,r.kt)("h3",{id:"numeric-arrays-"},"Numeric Arrays ",(0,r.kt)("a",{name:"8"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single Dimensional Arrays")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"float expenses[100];\nint a[10];\n/* additional statements go here */\nexpenses[i] = 100; // i is an integer variable\nexpenses[2 + 3] = 100; // equivalent to expenses[5]\nexpenses[a[2]] = 100; // a[] is an integer array\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi Dimensional Arrays")),(0,r.kt)("p",null,"For example: two dimensional array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"int checker[8][8];\n")),(0,r.kt)("p",null,"Alternate way of anming and declaring arrays"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#define MONTHS 12\nint array[MONTHS];\nis equivalent to this statement:\nint array[12];\n\nconst int MONTHS = 12;\nint array[MONTHS]; /* Wrong! */\n")),(0,r.kt)("h3",{id:"pointers-"},"Pointers ",(0,r.kt)("a",{name:"9"})),(0,r.kt)("p",null,"Pointer is a variable that contains the address if another variable"),(0,r.kt)("p",null,"Declaring Pointers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"typename *ptrname;\n\nchar *ch1, *ch2; /* ch1 and ch2 both are pointers to type char */\n\nfloat *value, percent; /* value is a pointer to type float, and /* percent is an ordinary float variable */\n")),(0,r.kt)("p",null,"Initializing Pointers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pointer = &variable;\n\np_rate = &rate; /* assign the address of rate to p_rate */\n")),(0,r.kt)("p",null,"Using Pointers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"printf(\u201c%d\u201d, rate);\nor you could write this statement:\nprintf(\u201c%d\u201d, *p_rate);\n")),(0,r.kt)("p",null,"Pointer Arithmetic"),(0,r.kt)("h3",{id:"characters-strings-"},"Characters, Strings ",(0,r.kt)("a",{name:"10"})),(0,r.kt)("p",null,"char datatype"),(0,r.kt)("p",null,"Array of characters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"char string[10] = { \u2018A\u2019, \u2018l\u2019, \u2018a\u2019, \u2018b\u2019, \u2018a\u2019, \u2018m\u2019, \u2018a\u2019, \u2018\\0\u2019 };\n")),(0,r.kt)("p",null,"malloc() Function"),(0,r.kt)("p",null,"Memory allocation function in C"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Example 1\n#include <stdlib.h>\n#include <stdio.h>\nint main( void )\n{\n    /* allocate memory for a 100-character string */\n    char *str;\n    str = (char *) malloc(100);\n    if (str == NULL)\n    {\n        printf( \u201cNot enough memory to allocate buffer\\n\u201d);\n        exit(1);\n    }\n    printf( \u201cString was allocated!\\n\u201d );\n    return 0;\n}\nExample 2\n/* allocate memory for an array of 50 integers */\nint *numbers;\nnumbers = (int *) malloc(50 * sizeof(int));\nExample 3\n/* allocate memory for an array of 10 float values */\nfloat *numbers;\nnumbers = (float *) malloc(10 * sizeof(float));\n")),(0,r.kt)("h3",{id:"structuresunions-typedefs-"},"Structures,Unions, Typedefs ",(0,r.kt)("a",{name:"11"})),(0,r.kt)("p",null,"A structure is a collection of one or more variables grouped under a single name for easy manipulation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"struct coord {\n    int x;\n    int y;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using a simple structure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/* simple.c - Demonstrates the use of a simple structures*/\n\n #include <stdio.h>\n\n int length, width;\n long area;\n\n struct coord{\n    int x;\n    int y;\n } myPoint;\n\n int main( void )\n {\n    /* set values into the coordinates */\n    myPoint.x = 12;\n    myPoint.y = 14;\n\n    printf(\u201c\\nThe coordinates are: (%d, %d).\u201d,\n    myPoint.x, myPoint.y);\n\n    return 0;\n }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complex Structures"),(0,r.kt)("li",{parentName:"ul"},"Initializing structures"),(0,r.kt)("li",{parentName:"ul"},"Structures and pointers"),(0,r.kt)("li",{parentName:"ul"},"Unions")),(0,r.kt)("h3",{id:"variable-scopes-"},"Variable Scopes ",(0,r.kt)("a",{name:"12"})),(0,r.kt)("p",null,"The scope of a variable refers to the extent to which different parts of a program have access to the variable\u2014in other words, where the variable is visible"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"External variables"),(0,r.kt)("li",{parentName:"ul"},"local Variables")),(0,r.kt)("h3",{id:"advanced-program-controlbreakcontinueswitchexit-"},"Advanced Program control(break,continue,switch,exit()) ",(0,r.kt)("a",{name:"13"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ending loops early with break"),(0,r.kt)("li",{parentName:"ul"},"goto statement"),(0,r.kt)("li",{parentName:"ul"},"Infinite loops"),(0,r.kt)("li",{parentName:"ul"},"Exiting the program"),(0,r.kt)("li",{parentName:"ul"},"Executing OS commands in a program")),(0,r.kt)("h3",{id:"input-and-output-"},"Input and Output ",(0,r.kt)("a",{name:"14"})),(0,r.kt)("h3",{id:"pointers-advanced-"},"Pointers-advanced ",(0,r.kt)("a",{name:"15"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Declaring Pointers to pointers"),(0,r.kt)("li",{parentName:"ul"},"Pointers and Multidimensional Arrays"),(0,r.kt)("li",{parentName:"ul"},"Working with Arrays of Pointers"),(0,r.kt)("li",{parentName:"ul"},"Working with Pointers to Functions")),(0,r.kt)("h3",{id:"using-disc-files-"},"Using Disc files ",(0,r.kt)("a",{name:"16"})),(0,r.kt)("h3",{id:"manipulating-strings-"},"Manipulating strings ",(0,r.kt)("a",{name:"17"})),(0,r.kt)("h3",{id:"functions-advanced-"},"Functions-advanced ",(0,r.kt)("a",{name:"18"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Passing Pointers to Functions"),(0,r.kt)("li",{parentName:"ul"},"Functions That Return a Pointer")),(0,r.kt)("h3",{id:"c-function-library-"},"C function Library ",(0,r.kt)("a",{name:"19"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Math functions"),(0,r.kt)("li",{parentName:"ul"},"Dealing with time"),(0,r.kt)("li",{parentName:"ul"},"Error handling"),(0,r.kt)("li",{parentName:"ul"},"Searching and sorting")),(0,r.kt)("h3",{id:"working-with-memory-"},"Working with memory ",(0,r.kt)("a",{name:"20"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type conversions")),(0,r.kt)("p",null,"numerical data types"),(0,r.kt)("p",null,"char\nshort\nint\nlong\nlong long\nfloat\ndouble\nlong double"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allocating memory storage space"),(0,r.kt)("li",{parentName:"ul"},"Manipulating Memory Blocks")),(0,r.kt)("h3",{id:"advanced-compiler-use-"},"Advanced compiler use ",(0,r.kt)("a",{name:"21"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modular Programming techniques"),(0,r.kt)("li",{parentName:"ul"})))}m.isMDXComponent=!0}}]);