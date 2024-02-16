const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=0bRAth39i98n7qrxubZ00K',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a65b48ed20msh53711226c62b1f2p1c3aebjsn2521b846cadd',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {

	$("#spinner").hide()
	$("#main").show()
	// document.getElementById("spinner").style.display = "none"
	// document.getElementById("main").style.display = "block"

	
	let artist = response.albums[0].artists[0].name
	$("#artist").text(artist)

	
	let album = response.albums[0].name
	$("#album").text(album)

	let tracks = response.albums[0].tracks.items
	// $("#tracks").text(tracks)

	let html = ""
	html += `<li>${tracks[0].name}</li>`
	html += `<li>${tracks[1].name}</li>`
	html += `<li>${tracks[2].name}</li>`
	html += `<li>${tracks[3].name}</li>`
	html += `<li>${tracks[4].name}</li>`
	html += `<li>${tracks[5].name}</li>`
	html += `<li>${tracks[6].name}</li>`
	html += `<li>${tracks[7].name}</li>`
	html += `<li>${tracks[8].name}</li>`
	html += `<li>${tracks[9].name}</li>`
	
	$("#tracklist").html(html)

	for(let i = 0; i < tracks.length; i++){
			// ${`#id${i}`}.click{function(){
			$("#current").text(tracks[i].name)

	}
		

	// for(let i=0; i < tracks.length; i++){
	// 	html += "<li>" + tracks[i].name +"</li>"
	// }
	console.log(html)

	

});

var audio = document.getElementById('audio');
var playpause = document.getElementById("play");


function togglePlayPause() {
   if (audio.paused || audio.ended) {
      playpause.title = "Pause";
      audio.play();
   } else {
      playpause.title = "Play";
      audio.pause();
   }
}


