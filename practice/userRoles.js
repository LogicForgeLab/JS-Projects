// // const users = new Map([
// //     [101, "admin"],
// //     [205, "user"],
// //     [307, "moderator"],
// //     [412, "user"],
// // ]);

// // // console.log(users.get(307));

// // // console.log(users.has(300));

// // // console.log(users.set(205, "modertor"));

// // // users.delete(412);

// // // console.log(users.size);

// // for (const [userId, role] of users) {
// //     console.log(`${userId}, ${role}`);
// // }

// const words = [
//     "apple",
//     "banana",
//     "apple",
//     "orange",
//     "banana",
//     "apple",
//     "kiwi",
//     "orange"
// ];

// const wordCount = new Map();

// for (const word of words) {
//     if (wordCount.has(word)) {
//         wordCount.set(word, wordCount.get(word) + 1)
//     } else {
//         wordCount.set(word, 1)
//     }
// }

// for (const [word, count] of wordCount ){
//     console.log(`${word} => ${count}`);
// }

// const Ids = [
//     101, 205, 101, 307,
//     205, 412, 307, 500,
//     101, 412
// ];

// const uniqIds = new Set(Ids);

// console.log(uniqIds);

// console.log(uniqIds.size);

// console.log(uniqIds.has(307));

// console.log(uniqIds.has(999));

// uniqIds.add(600);

// uniqIds.delete(205);

// console.log(uniqIds);
