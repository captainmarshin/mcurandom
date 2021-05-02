function RandomType4() {

var tv = [

"Agents of S.H.I.E.L.D.",
"Agent Carter (TV)",
"Inhumans",
"Daredevil",
"Jessica Jones",
"Luke Cage",
"Iron Fist",
"The Defenders",
"The Punisher",
"Runaways",
"Cloak & Dagger",
"WandaVision",
"FalconAndTheWinterSoldier"

];

var titles = tv;
var result = titles[Math.floor(Math.random() * titles.length)];

//TV SHOWS

if (result == "Agents of S.H.I.E.L.D.") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2364582/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Agent Carter (TV)") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3475734/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Agent Carter";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Inhumans") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4154858/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Inhumans";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Daredevil") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3322312/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Daredevil";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Jessica Jones") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2357547/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Jessica Jones";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Luke Cage") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3322314/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Luke Cage";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Iron Fist") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3322310/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Iron Fist";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "The Defenders") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4230076/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "The Defenders";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "The Punisher") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5675620/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "The Punisher";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Runaways") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1236246/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Runaways";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Cloak & Dagger") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5614844/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "TV Show";
document.getElementById('TitleName').textContent = "Cloak & Dagger";
document.getElementById('TitleEpisode').style.display = "none";
}

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

document.getElementById("repeatbutton").setAttribute("name","tvwe");

}
