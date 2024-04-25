"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(names => console.log(names));
}
function make_great(magicians) {
    return magicians.map(names => `The Great ${names}`);
}
let magicians_names = ["Harry Houdini", "David Blaine", "Lance Burton"];
let great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
