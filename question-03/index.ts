let names : string = "nigar";

console.log("UPPERCASE : " , names.toUpperCase());
console.log("LOWERCASE : " , names.toLowerCase());
console.log("TITLECASE : " , names.replace(/\b\w/g,char => char.toUpperCase()));


