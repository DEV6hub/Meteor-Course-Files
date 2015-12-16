if (Films.find().count() === 0) {
  Films.insert({
    title: "Jaws",
    year: "1975",
    director: "Steven Spielberg",
    plot: "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it."
  });

  Films.insert({
    title: "Alien",
    year: "1979",
    director: "Ridley Scott",
    plot: "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them"
  });

  Films.insert({
    title: "The Thing",
    year: "1982",
    director: "John Carpenter",
    plot: "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people it kills."
  });
}
