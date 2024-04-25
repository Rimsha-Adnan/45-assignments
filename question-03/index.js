"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = "nigar";
console.log("UPPERCASE : ", names.toUpperCase());
console.log("LOWERCASE : ", names.toLowerCase());
console.log("TITLECASE : ", names.replace(/\b\w/g, char => char.toUpperCase()));
