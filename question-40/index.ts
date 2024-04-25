function make_album (artist_name : string ,album_title : string ,tracks? : number){
    let albumAnswer : {artist : string, title : string, tracks? : number} = {
        artist : artist_name,
        title : album_title,
   };

    if(tracks !== undefined){
    albumAnswer.tracks = tracks;
   }

   return albumAnswer
}

let album1 = make_album("Ahmed Jahanzeb","Ishq Murshid");

let album2 = make_album("Adnan Dhool","O Sahiba");

let album3 = make_album("Ahad Khan","Tu Hai Kaha",7)

console.log(album1);

console.log(album2);

console.log(album3);

