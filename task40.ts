type Album = {
    artist: string;
    title: string;
    tracks?: number;
};

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating three albums
let album1 = make_album("Pink Floyd", "The Dark Side of the Moon");
let album2 = make_album("The Beatles", "Abbey Road");
let album3 = make_album("Led Zeppelin", "Led Zeppelin IV", 8);

// Printing the album objects
console.log(album1);
console.log(album2);
console.log(album3);
