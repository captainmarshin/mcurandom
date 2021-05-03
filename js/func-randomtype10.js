function RandomType10() {

var tv = [

"WandaVision",
"FalconAndTheWinterSoldier"

];

var tv_wandavision = [

"WV - Filmed Before a Live Studio Audience",
"WV - Don't Touch That Dial",
"WV - Now in Color",
"WV - We Interrupt This Program",
"WV - On a Very Special Episode...",
"WV - All-New Halloween Spooktacular!",
"WV - Breaking the Fourth Wall",
"WV - Previously On",
"WV - The Series Finale"
];

var tv_falconwintersoldier = [

"FWS - New World Order",
"FWS - The Star-Spangled Man",
"FWS - Power Broker",
"FWS - The Whole World Is Watching",
"FWS - Truth",
"FWS - One World, One People"
];

var titles = tv.concat(tv_wandavision,tv_falconwintersoldier);
var result = titles[Math.floor(Math.random() * titles.length)];

if (result == "WandaVision") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9140560/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "WandaVision";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "FalconAndTheWinterSoldier") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9208876/";
document.getElementById('TitlePoster').src = "images/tv/falconwintersoldier_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Falcon and the Winter Soldier";
document.getElementById('TitleEpisode').style.display = "none";
}

//WANDAVISION SEASON 1

if (result == "WV - Filmed Before a Live Studio Audience") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9601584/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "Filmed Before a Live Studio Audience";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "WV - Don't Touch That Dial") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10161310/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "Don't Touch That Dial";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "WV - Now in Color") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10161312/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "Now in Color";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "WV - We Interrupt This Program") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10161316/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "We Interrupt This Program";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "WV - On a Very Special Episode...") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10161318/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "On a Very Special Episode...";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "WV - All-New Halloween Spooktacular!") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10161320/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "All-New Halloween Spooktacular!";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "WV - Breaking the Fourth Wall") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt13776690/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "Breaking the Fourth Wall";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "WV - Previously On") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt13776714/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "Previously On";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "WV - The Series Finale") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt13778978/";
document.getElementById('TitlePoster').src = "images/tv/wandavision_s1.jpg";
document.getElementById('TitleCategory').textContent = "WandaVision";
document.getElementById('TitleName').textContent = "The Series Finale";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}


//FALCON AND THE WINTER SOLDIER SEASON 1

if (result == "FWS - New World Order") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9212984/";
document.getElementById('TitlePoster').src = "images/tv/falconwintersoldier_s1.jpg";
document.getElementById('TitleCategory').textContent = "Falcon and the Winter Soldier";
document.getElementById('TitleName').textContent = "New World Order";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "FWS - The Star-Spangled Man") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9212988/";
document.getElementById('TitlePoster').src = "images/tv/falconwintersoldier_s1.jpg";
document.getElementById('TitleCategory').textContent = "Falcon and the Winter Soldier";
document.getElementById('TitleName').textContent = "The Star-Spangled Man";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "FWS - Power Broker") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9212992/";
document.getElementById('TitlePoster').src = "images/tv/falconwintersoldier_s1.jpg";
document.getElementById('TitleCategory').textContent = "Falcon and the Winter Soldier";
document.getElementById('TitleName').textContent = "Power Broker";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "FWS - The Whole World Is Watching") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9212994/";
document.getElementById('TitlePoster').src = "images/tv/falconwintersoldier_s1.jpg";
document.getElementById('TitleCategory').textContent = "Falcon and the Winter Soldier";
document.getElementById('TitleName').textContent = "The Whole World Is Watching";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "FWS - Truth") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9212996/";
document.getElementById('TitlePoster').src = "images/tv/falconwintersoldier_s1.jpg";
document.getElementById('TitleCategory').textContent = "Falcon and the Winter Soldier";
document.getElementById('TitleName').textContent = "Truth";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "FWS - One World, One People") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9212998/";
document.getElementById('TitlePoster').src = "images/tv/falconwintersoldier_s1.jpg";
document.getElementById('TitleCategory').textContent = "Falcon and the Winter Soldier";
document.getElementById('TitleName').textContent = "One World, One People";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

document.getElementById("repeatbutton").setAttribute("name","tvdisney");

}

