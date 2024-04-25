"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ["Areeba", "Rumaisa", "Meerab"];
let first = guests.shift();
console.log(`"${first}" cant make the dinner with us  `);
guests.unshift("Tina");
guests.forEach(invite => console.log(`you guys can join me for dinner  "${invite}"`));
