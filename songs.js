var songs = [];
songs[songs.length] = "Savior > by Rise Against on the album Appeal to Reason";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "An Ocean and a Rock > by Lisa Hannigan on the album Sea Sew";


for (var i = 0; i < songs.length; i++) {
	songs[i] = songs[i].replace(/[^a-zA-Z&>\s]/g, "")
	songs[i] = songs[i].replace(/>/g, "-")
};
console.log("Replaced > with -");

alert(songs)
