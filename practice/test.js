// function getNumber() {
//     return new Promise((resolve) => {
//         resolve(10);
//     });
// }

// async function main() {
//     const number = await getNumber();

//     console.log(number * 2);
// }

// main();

// function getMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("hello")
//         }, 1000);
//     });
// }

// async function main() {
//     try {
//         const message = await getMessage();

//         console.log(message);
//     } catch (error) {
//         console.log(error);
//     }
// }

// console.log(1);

// main();

// function getName() {
//     return Promise.resolve("Albert");
// };

// function getAge() {
//     return Promise.resolve(23);
// };

// async function main() {
//     try {
//         const name = await getName();
//         const age = await getAge();

//         console.log(name, age);
//     } catch (error) {
//         console.log(error);
//     }
// }

// main()

// function getNumber2() {
//     return Promise.resolve(5);
// }

// function calculate() {

//     getNumber2().
//         then((number) => {
//             console.log(number * 3);
//         });
// }

// calculate();

// function getName() {
//     return Promise.resolve("John");
// };

// function showName() {
//     getName()
//     .then((name) => {
//         console.log("Hello", name);
//     });
// };

// showName();

// function getNumber() {
//     return Promise.resolve(10);
// }

// function main() {
//     getNumber()
//     .then((val) => {
//         console.log(val);
//     });
// }

// main();

// function getNumber() {
//     return Promise.resolve(10);
// }

// function calculate() {
//     getNumber()
//     .then((val) => {
//         console.log(val * 5);
//     });
// }

// calculate();

// function getMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello")
//         }, 2000);
//     });
// };

// getMessage()
// .then((message) => {
//     console.log(message);
// });

// getMessage();

// function getMessage() {
//     return new Promise((res, rej) => {
//         rej("Something went wrong");
//     });
// };

// getMessage()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// console.log(1);

// function getNumber() {
//     return Promise.resolve(10);
// }

// getNumber()
// .then((res) => {
//     return res * 2;
// })
// .then((res) => {
//     return res + 10;
// })
// .then((res) => {
//     console.log(res);
// });

// function getName() {
//     return Promise.resolve("Narek")
// }

// function getAge() {
//     return Promise.resolve(23);
// }

// getName()
// .then((name) => {
//     console.log(name);

//     return getAge();
// })
// .then((age) => {
//     console.log(age);
// })

// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Promise.all([p1, p2, p3])
// .then((result) => {
//     console.log(result);
// });

// console.log(1);

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("first");
//     }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("second");
//     }, 2000);
// });

// Promise.race([p1, p2])
// .then((result) => {
//     console.log(result);
// });

// function getNumber() {
//     return Promise.resolve(10);
// };

// getNumber()
// .then((res) => {
//     return res * 2;
// })
// .then((res) => {
//     return res + 10;
// })
// .then((res) => {
//     return res / 3;
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// });

// Function.prototype.myCall = function(thisArg, ...args) {
//     thisArg = thisArg || globalThis;

//     const key = Symbol();

//     thisArg[key] = this;

//     const res = thisArg[key](...args);

//     delete thisArg[key];

//     return res;
// }

// function sayName(age, city) {
//     console.log(this.name, age, city);
// }

// const user = {
//     name: 'Narek',
// };

// sayName.myCall(user, 23, 'Yervan');

// function getUser() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res({
//                 name: 'John',
//                 age: 23,
//             })
//         }, 1000);
//     })
// }

// getUser()
// .then((user) => {
//     console.log(`${user.name} is ${user.age} yeras old`);
// });

// function getUser() {
//     return Promise.resolve({
//         id: 1,
//         name: 'John',
//     })
// };

// function getOrders(userId) {
//     return Promise.resolve([
//         "Order 1",
//         "Order 2",
//         "Order 3"
//     ]);
// };

// getUser()
// .then((user) => {
//     console.log(user.name);

//     return getOrders(user.id);
// })
// .then((orders) => {
//     console.log(orders);
// });

// function getNumber() {
//     return new Promise((res) => {
//         res(10);
//     });
// };

// async function main() {
//     const number = await getNumber();

//     console.log(number * 2);
// };

// console.log(1);

// main()

// function getNumber() {
//     return new Promise((res) => {
//         res(10);
//     });
// };

// async function main() {
//     const num = await getNumber();

//     console.log(num * 5);
// }

// main()

// function getMessage() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res('Hello')
//         }, 1000);
//     });
// };

// async function main() {
//     try {
//         const message = await getMessage();
//         console.log(message);
//     } catch (error) {
//         console.log(error);
//     };
// };

// main()

// function getError() {
//     return new Promise((res, rej) => {
//         rej("Somthing went WRONG");
//     });
// };

// async function main() {
//     try {
//         const res = await getError();

//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// };

// main()

// function getNumber() {
//     return Promise.resolve(10);
// };

// async function main() {
//     try {
//         const number = await getNumber();

//         console.log(number * 2);
//     } catch (error) {
//         console.log(error);
//     }

// }

// main()

// function getName() {
//     return new Promise((resolve, reject) => {
//         resolve('Narek');
//     });
// };

// function getAge() {
//     return new Promise((resolve, reject) => {
//         resolve(23);
//     });
// };

// async function main() {
//     try{
//         const name = await getName();

//         console.log(name);

//         const age = await getAge();

//         console.log(age);
//     } catch(error) {
//         console.log(error);
//     }
// }

// main()

// const getNumber = (() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(10)
//         }, 2000)
//     });
// });

// async function Calculate() {
//     try {
//         const num = await getNumber();

//         console.log(num * 3);
//     } catch (error) {
//         console.log(error);
//     };
// };

// Calculate();

// const getUser = (() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: 'Narek',
//                 age: 23,
//             });
//         }, 2000);
//     });
// });

// async function main() {
//     try {
//         const user = await getUser();

//         console.log(`${user.name} is ${user.age} yeras old`);
//     } catch (error) {
//         console.log(error);
//     }
// }

// main();

// const users = [
//     {
//         id: 1,
//         name: 'Narek',
//     },
//     {
//         id: 2,
//         name: 'Anna',
//     },
//     {
//         id: 3,
//         name: 'Karen',
//     }
// ]

// const getUser = ((id) => {
//     return new Promise((resolve, reject) => {
//         const user = users.find((user) => user.id === id);

//         if(user) {
//             resolve(user);
//         } else {
//             reject('User not found');
//         }
//     });
// });

// const getOsrders = ((userId) => {
//     return new Promise((resolve, reject) => {
//         resolve([
//             'Order 1',
//             'Order 2',
//             'Order 3',
//         ])
//     });
// });

// async function main() {
//     try {
//         const user = await getUser(3);

//         console.log(`Username -> ${user.name}, ID -> ${user.id}`);

//         const orders = await getOsrders(user.id);

//         console.log(orders);
//     } catch (error) {
//         console.log(error);
//     }
// }

// main()

// const delay = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done');
//         }, ms);
//     })
// }

// delay(1000)
// .then((result) => {
//     console.log(result);
// })

// const delay = (ms) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res('Done');
//         }, ms)
//     });
// };

// async function main() {
//     const result = await delay(1000);

//     console.log(result);
// };

// main()

// const getUser = (id) => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res({
//                 id: id,
//                 name: "Aram"
//             })
//         }, 1000);
//     })
// };

// getUser(1)
// .then((result) => {
//     console.log(result);
// })

// const getUser = (id) => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res({
//                 id: id,
//                 name: 'Aram',
//             })
//         }, 1000);
//     })
// };

// async function main() {
//     const result = await getUser(1);

//     console.log(result);
// };

// main();

// const getUser = (id, ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: id,
//                 name: 'Aram',
//             })
//         }, ms);
//     });
// };

// const getPostes = (UserId, ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 "JavaScript",
//                 "Node.js",
//                 "React"
//             ]);
//         }, ms);
//     })
// };

// getUser(2, 1000)
// .then((user) => {
//     console.log(user.id);

//     return getPostes(user.id, 1000);
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// })

// const getUser = (id, ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: id,
//                 name: 'Narek'
//             })
//         }, ms);
//     });
// };

// const getPosts = (userId, ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 "JavaScript",
//                 "Node.js",
//                 "React"
//             ])
//         }, ms
//     )
//     })
// };

// const main = async () => {
//     const user = await getUser(1, 1000);

//     console.log(user.id);

//     const posts = await getPosts(user.id, 1000);

//     console.log(posts);
// }

// main()

// const users = [
//     {
//         id: 1,
//         name: 'Narek',
//     },
//     {
//         id: 2,
//         name: 'Ani',
//     },
//     {
//         id: 3,
//         name: 'Albert',
//     },
// ];

// const getUser = (id) => {
//     return new Promise((resolve, reject) => {

//         const user = users.find((user) => user.id === id);

//         if(user) {
//             resolve(user);
//         } else {
//             reject("User not found");
//         }
//     });
// };

// Promise.all([
//     getUser(1),
//     getUser(2),
//     getUser(3),
//     // getUser(4),
// ])
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })

// const users = [
//     {
//         id: 1,
//         name: 'Narek',
//     },
//     {
//         id: 2,
//         name: 'Ani',
//     },
//     {
//         id: 3,
//         name: 'Albert',
//     },
// ];

// const getUser = (id) => {
//     return new Promise((resolve, reject) => {
//         const user = users.find((user) => user.id === id);

//         if(user) {
//             resolve(user);
//         } else {
//             reject('User not found');
//         }
//     });
// };

// const main = async () => {
//     try {
//         const data = await Promise.all([
//             getUser(1),
//             getUser(2),
//             getUser(3),
//             getUser(4),
//         ])

//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }
// }

// main()

// const getData1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data 1");
//         }, 2000)
//     });
// };

// const getData2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data 2");
//         }, 2000)
//     });
// };

// const getData3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data 3");
//         }, 2000)
//     });
// }

// console.time("requests");

// Promise.all([
//     getData1(),
//     getData2(),
//     getData3(),
// ])
// .then((data) => {
//     console.log(data);

//     console.timeEnd('requests');
// })
// .catch((err) => {
//     console.log(err);

//     console.timeEnd('requests');
// })

// const users = [
//     {id: 1, name: 'Narek'},
//     {id: 2, name: 'Albert'},
//     {id: 3, name: 'Erik'},
// ];

// const getUser = (id, ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const user = users.find((user) => user.id === id);

//             if(user) {
//                 resolve(user)
//             } else {
//                 reject('User not found');
//             }
//         }, ms);
//     })
// };

// getUser(10, 1000)
// .then((user) => {
//     console.log(`username -> ${user.name}, ID -> ${user.id}`);
// })
// .catch((error) => {
//     console.log(error);
// });

// const users = [
//   { id: 1, name: "Narek" },
//   { id: 2, name: "Albert" },
//   { id: 3, name: "Erik" },
// ];

// const getUser = (id, ms) => {
//   // console.time('requested');

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = users.find((user) => user.id === id);

//       if (user) {
//         resolve(user);
//       } else {
//         reject("user not found");
//       }
//     }, ms);
//   });
// };

// async function main() {
//   try {
//     const data = await Promise.all([
//       getUser(1, 1000),
//       getUser(2, 1000),
//       getUser(3, 1000),
//       // getUser(4, 1000),
//     ]);

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

// const user = "narek";

// const getNumber = () => {
//   return new Promise((resolve) => {
//     resolve(10);
//   });
// };

// async function main() {
//   const res = await getNumber();

//   console.log(res * 2);
// }

// main();

// const getMessage = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello");
//     }, 1000);
//   });
// };

// async function main() {
//   try {
//     const message = await getMessage();

//     console.log(message);
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();

// const getName = () => {
//   return Promise.resolve("Albert");
// };

// const getAge = () => {
//   return Promise.resolve("23");
// };

// const main = async () => {
//   try {
//     const name = await getName();

//     console.log(name);

//     const age = await getAge();

//     console.log(age);
//   } catch (error) {
//     console.log(error);
//   }
// };

// main();

// const getNumber2 = () => {
//   return Promise.resolve(5);
// };

// const Calculate = () => {
//   getNumber2().then((num) => {
//     console.log(num);
//   });
// };

// Calculate();

// const getName2 = () => {
//   return Promise.resolve("John");
// };

// const showName = () => {
//   getName2().then((name) => {
//     console.log(name);
//   });
// };

// showName();

const Sort = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];

        arr[j] = arr[j + 1];

        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
};

const arr = [1, 6, 2, 5, 3, 4];

console.log(Sort(arr));
