function RandomType1() {

var movies = [

"Iron Man",
"The Incredible Hulk",
"Iron Man 2",
"Thor",
"Captain America: The First Avenger",
"Marvel's The Avengers",
"Iron Man 3",
"Thor: The Dark World",
"Captain America: The Winter Soldier",
"Guardians of the Galaxy",
"Avengers: Age of Ultron",
"Ant-Man",
"Captain America: Civil War",
"Doctor Strange",
"Guardians of the Galaxy Vol. 2",
"Spider-Man: Homecoming",
"Thor: Ragnarok",
"Black Panther",
"Avengers: Infinity War",
"Ant-Man and the Wasp",
"Captain Marvel",
"Avengers: Endgame",
"Spider-Man: Far From Home"

];

var oneshots = [

"The Consultant",
"A Funny Thing Happened on the Way to Thor's Hammer",
"Item 47",
"Agent Carter",
"All Hail the King",
"Peter's To-Do List"

];

var webseries = [

"Team Thor",
"Team Thor: Part 2",
"Team Darryl",
"WHIH Newsfront",
"Agents of S.H.I.E.L.D.: Slingshot"

];

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

var titles = movies.concat(oneshots,webseries,tv);
var result = titles[Math.floor(Math.random() * titles.length)];

if (result == "Iron Man") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0371746/";
document.getElementById('TitlePoster').src = "images/movies/ironman.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Iron Man";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "The Incredible Hulk") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0800080/";
document.getElementById('TitlePoster').src = "images/movies/theincrediblehulk.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "The Incredible Hulk";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Iron Man 2") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1228705/";
document.getElementById('TitlePoster').src = "images/movies/ironman2.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Iron Man 2";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Thor") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0800369/";
document.getElementById('TitlePoster').src = "images/movies/thor.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Thor";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Captain America: The First Avenger") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0458339/";
document.getElementById('TitlePoster').src = "images/movies/captainamericathefirstavenger.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Captain America: The First Avenger";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Marvel's The Avengers") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0848228/";
document.getElementById('TitlePoster').src = "images/movies/theavengers.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Marvel's The Avengers";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Iron Man 3") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1300854/";
document.getElementById('TitlePoster').src = "images/movies/ironman3.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Iron Man 3";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Thor: The Dark World") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1981115/";
document.getElementById('TitlePoster').src = "images/movies/thorthedarkworld.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Thor: The Dark World";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Captain America: The Winter Soldier") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1843866/";
document.getElementById('TitlePoster').src = "images/movies/captainamericathewintersoldier.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Captain America: The Winter Soldier";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Guardians of the Galaxy") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2015381/";
document.getElementById('TitlePoster').src = "images/movies/guardiansofthegalaxy.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Guardians of the Galaxy";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Avengers: Age of Ultron") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2395427/";
document.getElementById('TitlePoster').src = "images/movies/avengersageofultron.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Avengers: Age of Ultron";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Ant-Man") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0478970/";
document.getElementById('TitlePoster').src = "images/movies/ant-man.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Ant-Man";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Captain America: Civil War") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3498820/";
document.getElementById('TitlePoster').src = "images/movies/captainamericacivilwar.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Captain America: Civil War";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Doctor Strange") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1211837/";
document.getElementById('TitlePoster').src = "images/movies/doctorstrange.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Doctor Strange";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Guardians of the Galaxy Vol. 2") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3896198/";
document.getElementById('TitlePoster').src = "images/movies/guardiansofthegalaxyvol2.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Guardians of the Galaxy Vol. 2";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Spider-Man: Homecoming") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2250912/";
document.getElementById('TitlePoster').src = "images/movies/spider-manhomecoming.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Spider-Man: Homecoming";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Thor: Ragnarok") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3501632/";
document.getElementById('TitlePoster').src = "images/movies/thorragnarok.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Thor: Ragnarok";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Black Panther") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1825683/";
document.getElementById('TitlePoster').src = "images/movies/blackpanther.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Black Panther";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Avengers: Infinity War") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4154756/";
document.getElementById('TitlePoster').src = "images/movies/avengersinfinitywar.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Avengers: Infinity War";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Ant-Man and the Wasp") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5095030/";
document.getElementById('TitlePoster').src = "images/movies/ant-manthewasp.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Ant-Man and the Wasp";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Captain Marvel") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4154664/";
document.getElementById('TitlePoster').src = "images/movies/captainmarvel.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Captain Marvel";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Avengers: Endgame") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4154796/";
document.getElementById('TitlePoster').src = "images/movies/avengersendgame.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Avengers: Endgame";
document.getElementById('TitleEpisode').style.display = "none";
}


if (result == "Spider-Man: Far From Home") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6320628/";
document.getElementById('TitlePoster').src = "images/movies/spider-manfarfromhome.jpg";
document.getElementById('TitleCategory').textContent = "Movie";
document.getElementById('TitleName').textContent = "Spider-Man: Far From Home";
document.getElementById('TitleEpisode').style.display = "none";
}

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

//WEBSERIES

if (result == "Team Thor") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6016776/";
document.getElementById('TitlePoster').src = "images/web/teamthor-imdb.jpg";
document.getElementById('TitleCategory').textContent = "Web Series";
document.getElementById('TitleName').textContent = "Team Thor";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Team Thor: Part 2") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6599818/";
document.getElementById('TitlePoster').src = "images/web/teamthorp2-imdb.jpg";
document.getElementById('TitleCategory').textContent = "Web Series";
document.getElementById('TitleName').textContent = "Team Thor: Part 2";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Team Darryl") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8023090/";
document.getElementById('TitlePoster').src = "images/web/teamdarryl.jpg";
document.getElementById('TitleCategory').textContent = "Web Series";
document.getElementById('TitleName').textContent = "Team Darryl";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "WHIH Newsfront") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5296048/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "Web Series";
document.getElementById('TitleName').textContent = "WHIH Newsfront";
document.getElementById('TitleEpisode').style.display = "none";
}

if (result == "Agents of S.H.I.E.L.D.: Slingshot") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6313900/";
document.getElementById('TitlePoster').src = "images/web/aosslingshot.jpg";
document.getElementById('TitleCategory').textContent = "Web Series";
document.getElementById('TitleName').textContent = "Agents of S.H.I.E.L.D.: Slingshot";
document.getElementById('TitleEpisode').style.display = "none";
}

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

document.getElementById("repeatbutton").setAttribute("name","allwe");

}
