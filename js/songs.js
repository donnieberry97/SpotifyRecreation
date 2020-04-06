let songs = [
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 2 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    {
        song: 'Song 1 (feat. Artist)',
        artist: 'Artist',
        album: 'Album Name Here',
        date: '2020-03-04',
        runtime: '2:31',
    },
    
];

let songsLength = songs.length;

for (i=0; i < songsLength; i++) {
    let text = `<div class="song-list-container">
                    <div class="song-list-title song">
                        <p class="song">${songs[i].song}</p>
                    </div>
                    <div class="song-list-artist song">
                        <p class="song">${songs[i].artist}</p>
                    </div>
                    <div class="song-list-album song">
                        <p class="song">${songs[i].album}</p>
                    </div>
                    <div class="song-list-date song">
                        <p class="song">${songs[i].date}</p>
                    </div>
                    <div class="song-list-{runtime song">
                        <p class="song">${songs[i].runtime}</p>
                    </div>
                </div>`;
    const position = "beforeend";
    const domPos = document.querySelector('.song-list-area');
    domPos.insertAdjacentHTML(position, text);
}





















