# Day-1

## Learning Log

- 时间：2026-01-15 19:00 -- 22:00
- 内容：
  - JavaScript 基础
  - Typecheck代码



## What I have learned?

1. `node` Read-Eval-Print Loop (REPL) 临时编程环境
2. DateType 7+1
    ```javascript
    const getType = v => v === null? 'null' : typeof v;
    getType('a')        // "string"
    getType(1)          // "number"
    getType(true)       // "boolean"
    getType(undefined)  // "undefined"
    getType(null)       // "null"
    getType(Symbol())   // "symbol"
    getType(1n)         // "bigint"
    getType({})         // "object"
    getType([])         // "object"
    ```
    > "typeof null returns 'object', which is a historical bug in JavaScript"

## What's my plan for tomorrow?

1. control flow and error handling
2. loop and iteration
3. functions
4. expressions and operators
5. numbers and strings
6. representing dates & times
7. regular expressions
8. Indexed collections
9. Keyed collections
10. Working with Objects
11. Using classes
12. Using promises
13. JavaScript typed arrays
14. Iterators and generators
15. Resource Management
16. Internationalization
17. JavaScript Modules

## Are there any questions?

1. Need to do better tomorrow. 
2. what is `bigint`
   ```javascript
    > console.log(1n ===1)
    false
    undefined
    > console.log(1n ==1)
    true
    undefined
    > typeof 1n
    'bigint'
    > typeof 1
    'number'
   ```

