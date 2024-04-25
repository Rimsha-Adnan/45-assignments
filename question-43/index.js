"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(names => console.log(names));
}
function make_great(magicians) {
    return magicians.map(names => `The Great ${names}`);
}
let magicians_names = ["Harry Houdini", "David Blaine", "Lance Burton"];
let copy_magicians_names = magicians_names.slice();
let copy_great_magicians = make_great(copy_magicians_names);
console.log("\nOriginal Array\n");
show_magicians(magicians_names);
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
