var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  printPlaylists: function() {

    for (var playlist in library.playlists) {

      console.log(playlist + ": " + this.playlists[playlist]["name"] + " - "
          + this.playlists[playlist]["tracks"].length + " tracks");
    }
  },

  printTracks: function() {

    for (var track in library.tracks) {

      console.log(track + ": " + this.tracks[track]["name"] + " by " +
       this.tracks[track]["artist"] + " (" + this.tracks[track]["album"] + ")");
    }

  },

  printPlaylist: function(playlistId) {

    console.log(this.playlists[playlistId]["name"] + " - " +
    this.playlists[playlistId]["tracks"].length + " tracks");

    for (var track in this.playlists[playlistId]["tracks"]) {

        console.log(this.playlists[playlistId]["tracks"][track] + ": " +
          this.tracks[library.playlists[playlistId]["tracks"][track]]["name"] + " " +
            this.tracks[library.playlists[playlistId]["tracks"][track]]["artist"] + " (" +
              this.tracks[library.playlists[playlistId]["tracks"][track]]["album"] + ")");
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    this.playlists[playlistId]["tracks"].push(trackId);
  },

  addTrack: function (name, artist, album) {

    var uniqueId = uid();
    var trackObj = {};

    trackObj["id"] = uniqueId;
    trackObj["name"] = name;
    trackObj["artist"] = artist;
    trackObj["album"] = album;

    this.tracks[uniqueId] = trackObj;

  },

  addPlaylist: function(name) {

    var uniqueId = uid();
    var playlistObj = {};

    playlistObj["id"] = uniqueId;
    playlistObj["name"] = name;
    playlistObj["tracks"] = ["t01", "t02", "t03"]
    this.playlists[uniqueId] = playlistObj;
  }
}

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}