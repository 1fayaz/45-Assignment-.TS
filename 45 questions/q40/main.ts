function make_Album (artist_Name : string, album_title: string, tracks? :number) {

    let album : {artist : string, title: string, tracks? :number} = { 
        artist : artist_Name,
        title : album_title
    }

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;

}


let album1 = make_Album ("Fayaz ALI", "Album 1")

let album2 = make_Album ("Fayaz Noonari", "Album 2")

let album3  = make_Album("ALI", "Album title 3", 50)


console.log(album1);

console.log(album2);

console.log(album3);


