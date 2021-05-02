function RandomType5() {

var oneshots = [

"The Consultant",
"A Funny Thing Happened on the Way to Thor's Hammer",
"Item 47",
"Agent Carter",
"All Hail the King",
"Peter's To-Do List"

];

var titles = oneshots;
var result = titles[Math.floor(Math.random() * titles.length)];

//ONE-SHOTS

if (result == "The Consultant") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2011118/";
document.getElementById('TitlePoster').src = "images/oneshots/theconsultant.jpg";
document.getElementById('TitleCategory').textContent = "One-Shot";
document.getElementById('TitleName').textContent = "The Consultant";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "A Funny Thing Happened on the Way to Thor's Hammer") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2011109/";
document.getElementById('TitlePoster').src = "images/oneshots/afunnythinghappenedonthewaytothorshammer.jpg";
document.getElementById('TitleCategory').textContent = "One-Shot";
document.getElementById('TitleName').textContent = "A Funny Thing Happened on the Way to Thor's Hammer";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Item 47") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2247732/";
document.getElementById('TitlePoster').src = "images/oneshots/item47.jpg";
document.getElementById('TitleCategory').textContent = "One-Shot";
document.getElementById('TitleName').textContent = "Item 47";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Agent Carter") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3067038/";
document.getElementById('TitlePoster').src = "images/oneshots/agentcarter.jpg";
document.getElementById('TitleCategory').textContent = "One-Shot";
document.getElementById('TitleName').textContent = "Agent Carter";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "All Hail the King") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3438640/";
document.getElementById('TitlePoster').src = "images/oneshots/allhailtheking.jpg";
document.getElementById('TitleCategory').textContent = "One-Shot";
document.getElementById('TitleName').textContent = "All Hail the King";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Peter's To-Do List") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt11107678/";
document.getElementById('TitlePoster').src = "images/oneshots/peterstodolist.jpg";
document.getElementById('TitleCategory').textContent = "One-Shot";
document.getElementById('TitleName').textContent = "Peter's To-Do List";
document.getElementById('TitleEpisode').style.display = "none";
}

document.getElementById("repeatbutton").setAttribute("name","oneshots");

}
