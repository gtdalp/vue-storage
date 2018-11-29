# vue-storage

## 提交代码前需先执行jest, how to run the test case?

1. npm install
2. jest test.js

## 设计意图:

加快读取localStorage,sessionStorage之间的读取和数据间的转换
更多用例, 查看test.js

## 用法：

### 支持内存记录

```js
var storage = new MemoryStorage();
storage.set('arr', [3, 4, 5]);

or

在vue环境里
this.$storage.set('arr', [3, 4, 5]); // web localstroage
this.$localStorage.set('arr', [3, 4, 5]); // web localstroage
this.$sessionStorage.set('arr', [3, 4, 5]); // web sessionstorage
this.$memoryStorage.set('arr', [3, 4, 5]); // memory

or

import { MemoryStorage } from 'vue-storage';
let storage = new MemoryStorage();
```

### 写入数据

```js
storage.set('arr', [3, 4, 5]);
storage.set('num', 110);
storage.set('boo', false);
storage.set('str', 'this is str');
storage.set('obj', { name: {} });
```

### 读取一个不存在的数据, 指定返回的类型, 返回指定类型的默认值

```js
storage.get('arr', Array);
// []
storage.get('num', Number);
// 0
storage.get('boo', Boolean);
// false
storage.get('str', String);
// ''
storage.get('obj', Object);
// {}
```

### 读取一个不存在的数据, 并指定返回的默认值（第3个参数）

```js
storage.get('arr', Array, [1, 2, 3]);
//[1, 2, 3];
storage.get('num', Number, 4);
//4;
storage.get('boo', Boolean, true);
//true
storage.get('str', String, 'this is my string');
//'this is my string'
storage.get('obj', Object, { a: 1, b: 2 });
// { a: 1, b: 2 }
```

### 删除数据

```js
storage.set('arr', [3, 4, 5]);
storage.set('num', 110);
storage.set('boo', false);
storage.set('str', 'this is str');
storage.set('obj', { name: {} });

storage.remove('arr');
storage.remove('arr,num,boo');
storage.remove(['arr,num,boo']);
storage.clear();
```

### 读取一个存在的数据，不指定返回的默认值

```js
storage.set('arr', [3, 4, 5]);
storage.set('num', 110);
storage.set('boo', false);
storage.set('str', 'this is str');
storage.set('obj', { name: {} });

storage.get('arr');   //([3, 4, 5]);
storage.get('num');   //(110);
storage.get('boo');   //(false);
storage.get('str');   //('this is str');
storage.get('obj');   //({ name: {} });
```

### 读取数据,并指定返回类型和默认值, 如果数据能转成写入时的类型, 则无视返回类型和默认值

```js
storage.set('arr', [3, 4, 5]);
storage.set('num', 110);
storage.set('boo', false);
storage.set('str', 'this is str');
storage.set('obj', { name: {} });

storage.get('arr', Array, [1, 2, 3]);   //([3, 4, 5]);
storage.get('num', Number, 4);   //(110);
storage.get('boo', Boolean, true);   //(false);
storage.get('str', String, 'string??');   //('this is str');
storage.get('obj', Object, { a: 1, b: 2 });   //({ name: {} });
```

### 读取数据,并指定返回类型和默认值, 如果数据能转成写入时的类型, 则无视返回类型和默认值(返回类型和转换的类型不同)

```js
storage.set('arr', [3, 4, 5]);
storage.set('num', 110);
storage.set('boo', false);
storage.set('str', 'this is str');
storage.set('obj', { name: {} });

storage.get('arr', String, [1, 2, 3]);   //([3, 4, 5]);
storage.get('num', Object, 4);   //(110);
storage.get('boo', Number, true);   //(false);
storage.get('str', Boolean, 'string??');   //('this is str');
storage.get('obj', String, { a: 1, b: 2 });   //({ name: {} });
```
