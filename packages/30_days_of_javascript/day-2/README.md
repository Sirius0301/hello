# Day-2

## Learning Log

- 时间：2026-01-16 18:39 -- 21:45
- 内容：
  - 

## What I have learned?

### control flow and error handling
1. if/else
   ```javascript
   const score = 85;
   if(score > 90){
    console.log('A')
   }else if {
    console.log('B')
   }else {
    console.log('C')
   }
   ```
2. switch
   ```javascript
   const day=3;
   switch(day){
    case 1: console.log('Mon'); break;
    case 2: console.log('Tue'); break;
    case 3: console.log('Wed'); break;
    default: console.log('?');
   }
   ```
3. 三元运算符
   ```javascript
   const age=20;
   const status = age >= 18 ? 'adult' : 'minor';
   console.log(status);
   ```
4. try/catch/finally;
   ```javascript
   try{
    const data = JSON.parse('invalid json');
    console.log(data);
   }catch(error){
    console.log('解析失败', error.message);
   }
   ```
5. throw
   ```javascript
   function divide(a, b){
    if(b===0) throw new Error('不能除以0')
    return a/b;
   }

   try {
    console.log(divide(10, 0));
   }catch(e){
    console.log(e.message);
   }finally {
    console.log('always runs');
   }
   ```
### loop and iteration
1. 循环结构
   ```javascript
   for(let i=0;i<3;i++){
    console.log(i);
   }
   ```
2. 遍历结构
   ```javascript
   //for ... of (推荐数组)
   const arr = ['a', 'b', 'c'];
   for(const item of arr){
    console.log(item);
   }

   //for ... in (推荐对象)
   const obj = {x:1, y:2};
   for(const key in obj){
    console.log(key, obj[key]);
   }
   ```
3. 短路运算
   ```javascript
   // || 前面为假才走后面
   const value = 0 || 'default';

   // && 前面为真才走后面
   const result = true && doSomething();

   // ?? 空值合并 (仅 null/undefined 用默认值)
   const num = null ?? 42;
   ``` 
### functions
1. Function Declaration
   ```javascript
   function addition(a, b){
    return a+b;
   }
   console.log(addition(3,4))
   ```
2. Function Expression
   ```javascript
   const multiplication(a, b){
    return a * b;
   }
   console.log(multiplication(3,4))
   ```
3. Arrow Function
   ```javascript
   const square = x => x * x;
   const greeting = (name)=> `Hello, ${name}`;
   console.log(square(5))
   console.log(greeting('Kimi'))
   ```
4. IIFE
   ```javascript
   (function(){
    console.log('one-time function')
   })
   ```
### expressions and operators
...
### numbers and strings
```javascript
42
3.14159
1e6
Infinity // 无穷大（1/0）
-Infinity // 负无穷
NaN       // 不是一个数('abc' * 2)

let num = 123.456
num.toFixed(2) // 123.46 return string
parseInt('100px') // 100
parseFloat('3.14abc') // 3.14
```
坑：精度问题
```javascript
0.1 + 0.2 === 0.3 // false
(0.1 + 0.2).toFixed(1) === '0.3'
```
常用方法
```javascript
'single quote'
"double quote"
`back quote ${param}`

let str = 'Hello World';
str.length // 11
str.trim() // 'Hello World'
str.toUpperCase() // 'HELLO WORLD'
str.replace('World', 'JS') // 'Hello JS'
str.slice(0, 6) // 'Hello'
str.split(' ') // ['Hello', 'World']
str.includes('Hello');

String(123) // '123'
123+'' // "123"
123.toString() // '123'

Number('123') // 123
+'123' // 123
parseInt('123') // 123
```

### representing dates & times
```javascript
const d = new Date(); // 2026-01-16T12:58:52.592Z
d.getFullYear(); // 2026
d.getMonth(); // 0 (0=1月，11=12月）
d.getDate(); // 16
d.getDay(); // 5 （0=周日，6=周六）
d.getHours(); // 
```

1.  regular expressions
2.  Indexed collections
3.  Keyed collections
4.  Working with Objects
5.  Using classes
6.  Using promises
7.  JavaScript typed arrays
8.  Iterators and generators
9.  Resource Management
10. Internationalization
11. JavaScript Modules


## What's my plan for tomorrow?

## Are there any questions?
