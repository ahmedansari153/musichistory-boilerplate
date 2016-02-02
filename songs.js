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

console.log(songs)

var songName = document.getElementById("song");
var artistName = document.getElementById("artist");
var albumName = document.getElementById("album");
var button = document.getElementById("add");

button.addEventListener('click', function(){
	if(songs.length > 0) {
		songs.push(songName.value + " " + artistName.value + " " + albumName.value)
	}
	console.log(songs);
});

var addMusic = document.getElementById("add-music");
var body = document.getElementById("body");

addMusic.addEventListener("click", function() {
  body.classList.add("hidden");

  body.classList.add("visible");
  body.classList.remove("hidden");

});

var listMusic = document.getElementById('list-music');
var inputField = document.getElementById('inputField');

addMusic.addEventListener("click", function(){
	body.classList.add("hidden");
	inputField.classList.add('visible2');
	inputField.classList.remove('hidden');
	body.classList.add("hidden");
});

listMusic.addEventListener("click", function() {
	body.classList.remove('hidden');
	inputField.classList.add("hidden");

});
