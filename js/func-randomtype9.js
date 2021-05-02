function RandomType9() {


var tv = [

"Runaways",
"Cloak & Dagger",

];

var tv_runaways = [

"RUA - Reunion",
"RUA - Rewind",
"RUA - Destiny",
"RUA - Fifteen",
"RUA - Kingdom",
"RUA - Metamorphosis",
"RUA - Refraction",
"RUA - Tsunami",
"RUA - Doomsday",
"RUA - Hostile",
"RUA - Gimme Shelter",
"RUA - Radio On",
"RUA - Double Zeros",
"RUA - Old School",
"RUA - Rock Bottom",
"RUA - Bury Another",
"RUA - Last Rites",
"RUA - Past Life",
"RUA - Big Shot",
"RUA - Hostile Takeover",
"RUA - Last Waltz",
"RUA - Earth Angel",
"RUA - Split Up",
"RUA - Smoke and Mirrors",
"RUA - The Great Escape",
"RUA - Lord of Lies",
"RUA - Rite of Thunder",
"RUA - Enter the Dreamland",
"RUA - Merry Meet Again",
"RUA - Left-Hand Path",
"RUA - Devil's Torture Chamber",
"RUA - The Broken Circle",
"RUA - Cheat the Gallows"

];

var tv_cloakanddagger = [

"CAD - First Light",
"CAD - Suicide Sprints",
"CAD - Stained Glass",
"CAD - Call/Response",
"CAD - Princeton Offense",
"CAD - Funhouse Mirrors",
"CAD - Lotus Eaters",
"CAD - Ghost Stories",
"CAD - Back Breaker",
"CAD - Colony Collapse",
"CAD - Restless Energy",
"CAD - White Lines",
"CAD - Shadow Selves",
"CAD - Rabbit Hold",
"CAD - Alignment Chart",
"CAD - B Sides",
"CAD - Vikingtown Sound",
"CAD - Two Player",
"CAD - Blue Note",
"CAD - Level Up"

];

var titles = tv.concat(tv_runaways,tv_cloakanddagger);
var result = titles[Math.floor(Math.random() * titles.length)];

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

//RUNAWAYS SEASON 1

if (result == "RUA - Reunion") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6495768/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Reunion";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "RUA - Rewind") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6502138/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Rewind";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "RUA - Destiny") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6734192/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Destiny";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "RUA - Fifteen") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6734196/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Fifteen";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "RUA - Kingdom") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6734198/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Kingdom";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "RUA - Metamorphosis") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6734200/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Metamorphosis";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "RUA - Refraction") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6734202/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Refraction";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "RUA - Tsunami") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6734204/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Tsunami";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "RUA - Doomsday") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6734210/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Doomsday";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}

if (result == "RUA - Hostile") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6734208/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s1.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Hostile";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 10";
}

//RUNAWAYS SEASON 2

if (result == "RUA - Gimme Shelter") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7845184/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Gimme Shelter";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "RUA - Radio On") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8911684/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Radio On";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "RUA - Double Zeros") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8911692/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Double Zeros";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "RUA - Old School") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8911698/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Old School";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "RUA - Rock Bottom") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8911702/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Rock Bottom";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "RUA - Bury Another") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8911704/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Bury Another";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "RUA - Last Rites") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8856146/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Last Rites";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "RUA - Past Life") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8856140/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Past Life";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "RUA - Big Shot") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8806704/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Big Shot";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "RUA - Hostile Takeover") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8806706/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Hostile Takeover";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

if (result == "RUA - Last Waltz") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9091108/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Last Waltz";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 11";
}

if (result == "RUA - Earth Angel") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8966796/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Earth Angel";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 12";
}

if (result == "RUA - Split Up") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9091122/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s2.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Split Up";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 13";
}

//RUNAWAYS SEASON 3

if (result == "RUA - Smoke and Mirrors") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10074074/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Smoke and Mirrors";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 1";
}

if (result == "RUA - The Great Escape") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087242/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "The Great Escape";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 2";
}

if (result == "RUA - Lord of Lies") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087244/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Lord of Lies";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 3";
}

if (result == "RUA - Rite of Thunder") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087246/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Rite of Thunder";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 4";
}

if (result == "RUA - Enter the Dreamland") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087248/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Enter the Dreamland";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 5";
}

if (result == "RUA - Merry Meet Again") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087250/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Merry Meet Again";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 6";
}

if (result == "RUA - Left-Hand Path") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087252/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Left-Hand Path";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 7";
}

if (result == "RUA - Devil's Torture Chamber") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087254/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Devil's Torture Chamber";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 8";
}

if (result == "RUA - The Broken Circle") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087256/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "The Broken Circle";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 9";
}

if (result == "RUA - Cheat the Gallows") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10087258/";
document.getElementById('TitlePoster').src = "images/tv/runaways_s3.jpg";
document.getElementById('TitleCategory').textContent = "Runaways";
document.getElementById('TitleName').textContent = "Cheat the Gallows";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 10";
}

//CLOAK & DAGGER SEASON 1

if (result == "CAD - First Light") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6467592/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "First Light";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "CAD - Suicide Sprints") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746316/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Suicide Sprints";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "CAD - Stained Glass") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746318/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Stained Glass";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "CAD - Call/Response") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746322/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Call/Response";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "CAD - Princeton Offense") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746324/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Princeton Offense";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "CAD - Funhouse Mirrors") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746326/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Funhouse Mirrors";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "CAD - Lotus Eaters") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746328/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Lotus Eaters";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "CAD - Ghost Stories") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746330/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Ghost Stories";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "CAD - Back Breaker") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746332/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Back Breaker";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}

if (result == "CAD - Colony Collapse") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6746334";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s1.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Colony Collapse";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 10";
}

//CLOAK & DAGGER SEASON 2

if (result == "CAD - Restless Energy") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736154/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Restless Energy";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "CAD - White Lines") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736156/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "White Lines";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "CAD - Shadow Selves") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736160/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Shadow Selves";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "CAD - Rabbit Hold") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736164/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Rabbit Hold";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "CAD - Alignment Chart") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736162/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Alignment Chart";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "CAD - B Sides") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736166/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "B Sides";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "CAD - Vikingtown Sound") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736168/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Vikingtown Sound";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "CAD - Two Player") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736170/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Two Player";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "CAD - Blue Note") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736174/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Blue Note";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "CAD - Level Up") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8736176/";
document.getElementById('TitlePoster').src = "images/tv/cloakanddagger_s2.jpg";
document.getElementById('TitleCategory').textContent = "Cloak & Dagger";
document.getElementById('TitleName').textContent = "Level Up";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

document.getElementById("repeatbutton").setAttribute("name","tvhf");

}

