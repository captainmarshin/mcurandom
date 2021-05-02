function RandomType6() {

var webseries = [

"Team Thor",
"Team Thor: Part 2",
"Team Darryl",
"WHIH Newsfront",
"Agents of S.H.I.E.L.D.: Slingshot"

];

var webseries_slingshot = [

"Slingshot - Vendetta",
"Slingshot - John Hancock",
"Slingshot - Progress",
"Slingshot - Reunion",
"Slingshot - Deal Breaker",
"Slingshot - Justicia"

];

var webseries_whih = [

"WHIH Newsfront Promo",
"WHIH Newsfront Top Stories",
"WHIH EXCLUSIVE: 2012 VistaCorp break-in security footage involving cyber-criminal Scott Lang",
"WIRED Insider Interviews Darren Cross, CEO of Pym Technologies",
"WHIH EXCLUSIVE: Scott Lang Interview",
"AVENGERS IMPACT: A WHIH Newsfront Special Report",
"WHIH Newsfront: The Cost of Saving the World",
"WHIH Newsfront: The Avengers and The White House",
"WHIH Newsfront Exclusive: President Ellis Discusses the Avengers",
"WHIH Breaking News: Attack in Lagos"

];

var titles = webseries.concat(webseries_slingshot,webseries_whih);
var result = titles[Math.floor(Math.random() * titles.length)];

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

//WEB SLINGSHOT

if (result == "Slingshot - Vendetta") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6319182/";
document.getElementById('TitlePoster').src = "images/web/aosslingshot.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.: Slingshot";
document.getElementById('TitleName').textContent = "Vendetta";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Episode 1";
}

if (result == "Slingshot - John Hancock") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6319184/";
document.getElementById('TitlePoster').src = "images/web/aosslingshot.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.: Slingshot";
document.getElementById('TitleName').textContent = "John Hancock";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Episode 2";
}

if (result == "Slingshot - Progress") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6319186/";
document.getElementById('TitlePoster').src = "images/web/aosslingshot.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.: Slingshot";
document.getElementById('TitleName').textContent = "Progress";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Episode 3";
}

if (result == "Slingshot - Reunion") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6319188/";
document.getElementById('TitlePoster').src = "images/web/aosslingshot.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.: Slingshot";
document.getElementById('TitleName').textContent = "Reunion";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Episode 4";
}

if (result == "Slingshot - Deal Breaker") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6319192/";
document.getElementById('TitlePoster').src = "images/web/aosslingshot.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.: Slingshot";
document.getElementById('TitleName').textContent = "Deal Breaker";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Episode 5";
}

if (result == "Slingshot - Justicia") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6319190/";
document.getElementById('TitlePoster').src = "images/web/aosslingshot.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.: Slingshot";
document.getElementById('TitleName').textContent = "Justicia";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Episode 6";
}

//WEBSERIES WHIH NEWSFRONT

if (result == "WHIH Newsfront Promo") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5868546/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WHIH Newsfront Promo";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "WHIH Newsfront Top Stories") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5665996/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WHIH Newsfront Top Stories";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "WHIH EXCLUSIVE: 2012 VistaCorp break-in security footage involving cyber-criminal Scott Lang") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5666004/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WHIH EXCLUSIVE: 2012 VistaCorp break-in security footage involving cyber-criminal Scott Lang";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "WIRED Insider Interviews Darren Cross, CEO of Pym Technologies") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5666012/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WIRED Insider Interviews Darren Cross, CEO of Pym Technologies";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "WHIH EXCLUSIVE: Scott Lang Interview") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5666022/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WHIH EXCLUSIVE: Scott Lang Interview";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "AVENGERS IMPACT: A WHIH Newsfront Special Report") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5657054/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "AVENGERS IMPACT: A WHIH Newsfront Special Report";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "WHIH Newsfront: The Cost of Saving the World") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5666168/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WHIH Newsfront: The Cost of Saving the World";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "WHIH Newsfront: The Avengers and The White House") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5673162/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WHIH Newsfront: The Avengers and The White House";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "WHIH Newsfront Exclusive: President Ellis Discusses the Avengers") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5688614/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WHIH Newsfront Exclusive: President Ellis Discusses the Avengers";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "WHIH Breaking News: Attack in Lagos") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5688622/";
document.getElementById('TitlePoster').src = "images/web/whihnewsfront.jpg";
document.getElementById('TitleCategory').textContent = "WHIH Newsfront";
document.getElementById('TitleName').textContent = "WHIH Breaking News: Attack in Lagos";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

document.getElementById("repeatbutton").setAttribute("name","web");

}
