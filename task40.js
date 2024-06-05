function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums
var album1 = make_album("Pink Floyd", "The Dark Side of the Moon");
var album2 = make_album("The Beatles", "Abbey Road");
var album3 = make_album("Led Zeppelin", "Led Zeppelin IV", 8);
// Printing the album objects
console.log(album1);
console.log(album2);
console.log(album3);
