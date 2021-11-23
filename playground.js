const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != "") {
    recordCollection[id].prop = value;
  } else if (prop === "tracks" && !updateRecords.hasOwnProperty("tracks")) {
    recordCollection[id].tracks = [value];
  } else if (prop === "tracks" && !value == "") {
    recordCollection[id].tracks.push(value);
  } else if (value == "") {
    delete recordCollection[id].prop;
  }
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
