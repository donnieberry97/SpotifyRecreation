let playlists = [
    {
        id: '1',
        name: 'Playlist 1',
    },
    {
        id: '2',
        name: 'Playlist 2',
    },
    {
        id: '3',
        name: 'Playlist 3',
    },
    {
        id: '4',
        name: 'Playlist 4',
    },
    {
        id: '5',
        name: 'Playlist 5',
    },
    {
        id: '6',
        name: 'Playlist 6',
    },
    {
        id: '7',
        name: 'Playlist 7',
    },
    {
        id: '8',
        name: 'Playlist 8',
    },
    {
        id: '9',
        name: 'Playlist 9',
    },
    {
        id: '10',
        name: 'Playlist 10',
    },
    {
        id: '11',
        name: 'Playlist 11',
    },
    {
        id: '12',
        name: 'Playlist 12',
    },
];

let i;
let playlistsLength = playlists.length;

for (i=0; i < playlistsLength; i++) {
    let text = `<li><a href="#">${playlists[i].name}</a></li>`;
    const position = "beforeend";
    const domPos = document.querySelector('.part2');
    domPos.insertAdjacentHTML(position, text);
}





















