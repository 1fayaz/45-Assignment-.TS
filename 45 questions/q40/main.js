function make_Album(artist_Name, album_title, tracks) {
    var album = {
        artist: artist_Name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_Album("Fayaz ALI", "Album 1");
var album2 = make_Album("Fayaz Noonari", "Album 2");
var album3 = make_Album("ALI", "Album title 3", 50);
console.log(album1);
console.log(album2);
console.log(album3);
