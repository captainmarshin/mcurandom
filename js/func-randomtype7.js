function RandomType7() {

var tv = [

"Agents of S.H.I.E.L.D.",
"Agent Carter (TV)",
"Inhumans"

];

var tv_agentsofshield = [

"AOS - Pilot",
"AOS - 0-8-4",
"AOS - The Asset",
"AOS - Eye Spy",
"AOS - Girl in the Flower Dress",
"AOS - FZZT",
"AOS - The Hub",
"AOS - The Well",
"AOS - Repairs",
"AOS - The Bridge",
"AOS - The Magical Place",
"AOS - Seeds",
"AOS - T.R.A.C.K.S.",
"AOS - T.A.H.I.T.I.",
"AOS - Yes Men",
"AOS - End of the Beginning",
"AOS - Turn, Turn, Turn",
"AOS - Providence",
"AOS - The Only Light in the Darkness",
"AOS - Nothing Personal",
"AOS - Ragtag",
"AOS - Beginning of the End",
"AOS - Shadows",
"AOS - Heavy Is the Head",
"AOS - Making Friends and Influencing People",
"AOS - Face My Enemy",
"AOS - A Hen in the Wolf House",
"AOS - A Fractured House",
"AOS - The Writing on the Wall",
"AOS - The Things We Bury",
"AOS - ...Ye Who Enter Here",
"AOS - What They Become",
"AOS - Aftershocks",
"AOS - Who You Really Are",
"AOS - One of Us",
"AOS - Love in the Time of Hydra",
"AOS - One Door Closes",
"AOS - Afterlife",
"AOS - Melinda",
"AOS - The Frenemy of My Enemy",
"AOS - The Dirty Half Dozen",
"AOS - Scars",
"AOS - S.O.S. Part 1",
"AOS - S.O.S. Part 2",
"AOS - Laws of Nature",
"AOS - Purpose in the Machine",
"AOS - A Wanted (Inhu)man",
"AOS - Devils You Know",
"AOS - 4,722 Hours",
"AOS - Among Us Hide...",
"AOS - Chaos Theory",
"AOS - Many Heads, One Tale",
"AOS - Closure",
"AOS - Maveth",
"AOS - Bouncing Back",
"AOS - The Inside Man",
"AOS - Parting Shot",
"AOS - Watchdogs",
"AOS - Spacetime",
"AOS - Paradise Lost",
"AOS - The Team",
"AOS - The Singularity",
"AOS - Failed Experiments",
"AOS - Emancipation",
"AOS - Absolution",
"AOS - Ascension",
"AOS - The Ghost",
"AOS - Meet the New Boss",
"AOS - Uprising",
"AOS - Let Me Stand Next to Your Fire",
"AOS - Lockup",
"AOS - The Good Samaritan",
"AOS - Deals with Our Devils",
"AOS - The Laws of Inferno Dynamics",
"AOS - Broken Promises",
"AOS - The Patriot",
"AOS - Wake Up",
"AOS - Hot Potato Soup",
"AOS - BOOM",
"AOS - The Man Behind the Shield",
"AOS - Self Control",
"AOS - What If...",
"AOS - Identity and Change",
"AOS - No Regrets",
"AOS - All the Madame's Men",
"AOS - Farewell, Cruel World!",
"AOS - The Return",
"AOS - World's End",
"AOS - Orientation: Part 1",
"AOS - Orientation: Part 2",
"AOS - A Life Spent",
"AOS - A Life Earned",
"AOS - Rewind",
"AOS - Fun & Games",
"AOS - Together or Not at All",
"AOS - The Last Day",
"AOS - Best Laid Plans",
"AOS - Past Life",
"AOS - All the Comforts of Home",
"AOS - The Real Deal",
"AOS - Principia",
"AOS - The Devil Complex",
"AOS - Rise and Shine",
"AOS - Inside Voices",
"AOS - The Honeymoon",
"AOS - All Roads Lead...",
"AOS - Option Two",
"AOS - The One Who Will Save Us All",
"AOS - The Force of Gravity",
"AOS - The End",
"AOS - Missing Pieces",
"AOS - Window of Opportunity",
"AOS - Fear and Loathing on the Planet of Kitson",
"AOS - Code Yellow",
"AOS - The Other Thing",
"AOS - Inescapable",
"AOS - Toldja",
"AOS - Collision Course (Part I)",
"AOS - Collision Course (Part II)",
"AOS - Leap",
"AOS - From the Ashes",
"AOS - The Sign",
"AOS - New Life",
"AOS - The New Deal",
"AOS - Know Your Onions",
"AOS - Alien Commies from the Future!",
"AOS - Out of the Past",
"AOS - A Trout in the Milk",
"AOS - Adapt or Die",
"AOS - The Totally Excellent Adventures of Mack and The D",
"AOS - After, Before",
"AOS - As I Have Always Been",
"AOS - Stolen",
"AOS - Brand New Day",
"AOS - The End Is at Hand",
"AOS - What We're Fighting For"

];

var tv_agentcarter = [

"Now is Not the End",
"Bridge and Tunnel",
"Time and Tide",
"The Blitzkrieg Button",
"The Iron Ceiling",
"A Sin to Err",
"Snafu",
"Valediction",
"The Lady in the Lake",
"A View in the Dark",
"Better Angels",
"Smoke & Mirrors",
"The Atomic Job",
"Life of the Party",
"Monsters",
"The Edge of Mystery",
"A Little Song and Dance",
"Hollywood Ending"

];

var tv_inhumans = [

"IHM - Behold... The Inhumans",
"IHM - Those Who Would Destroy Us",
"IHM - Divide and Conquer",
"IHM - Make Way for... Medusa",
"IHM - Something Inhuman This Way Comes...",
"IHM - The Gentleman's Name is Gorgon",
"IHM - Havoc in the Hidden Land",
"IHM - ...And Finally: Black Bolt"

];

var titles = tv.concat(tv_agentsofshield,tv_agentcarter,tv_inhumans);
var result = titles[Math.floor(Math.random() * titles.length)];

//ONLY ABC TV SHOWS

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

//AGENTS OF SHIELD - SEASON 1
if (result == "AOS - Pilot") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt2912308/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Pilot";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "AOS - 0-8-4") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3130816/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "0-8-4";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "AOS - The Asset") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3130186/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Asset";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "AOS - Eye Spy") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3218318/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Eye Spy";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "AOS - Girl in the Flower Dress") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3229400/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Girl in the Flower Dress";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "AOS - FZZT") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3229404/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "FZZT";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "AOS - The Hub") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3229406/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Hub";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "AOS - The Well") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3252298/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Well";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "AOS - Repairs") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3252332/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Repairs";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}

if (result == "AOS - The Bridge") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3252318/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Bridge";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 10";
}

if (result == "AOS - The Magical Place") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3307564/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Magical Place";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 11";
}

if (result == "AOS - Seeds") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3307568/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Seeds";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 12";
}

if (result == "AOS - T.R.A.C.K.S.") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3307566/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "T.R.A.C.K.S.";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 13";
}

if (result == "AOS - T.A.H.I.T.I.") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3476430/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "T.A.H.I.T.I.";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 14";
}

if (result == "AOS - Yes Men") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3473818/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Yes Men";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 15";
}

if (result == "AOS - End of the Beginning") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3539224/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "End of the Beginning";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 16";
}

if (result == "AOS - Turn, Turn, Turn") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3539406/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Turn, Turn, Turn";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 17";
}

if (result == "AOS - Providence") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3609126/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Providence";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 18";
}

if (result == "AOS - The Only Light in the Darkness") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3609154/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Only Light in the Darkness";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 19";
}

if (result == "AOS - Nothing Personal") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3609164/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Nothing Personal";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 20";
}

if (result == "AOS - Ragtag") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3609168/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Ragtag";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 21";
}

if (result == "AOS - Beginning of the End") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3609170/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s1.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Beginning of the End";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 22";
}

//AGENTS OF SHIELD - SEASON 2

if (result == "AOS - Shadows") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3721000/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Shadows";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "AOS - Heavy Is the Head") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3997450/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Heavy Is the Head";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "AOS - Making Friends and Influencing People") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3997456/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Making Friends and Influencing People";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "AOS - Face My Enemy") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3997452/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Face My Enemy";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "AOS - A Hen in the Wolf House") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3970174/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "A Hen in the Wolf House";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "AOS - A Fractured House") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4078580/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "A Fractured House";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "AOS - The Writing on the Wall") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4082652/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Writing on the Wall";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "AOS - The Things We Bury") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4082656/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Things We Bury";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "AOS - ...Ye Who Enter Here") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120698/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "...Ye Who Enter Here";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "AOS - What They Become") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120702/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "What They Become";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

if (result == "AOS - Aftershocks") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120704/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Aftershocks";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 11";
}

if (result == "AOS - Who You Really Are") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120714/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Who You Really Are";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 12";
}

if (result == "AOS - One of Us") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120718/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "One of Us";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 13";
}

if (result == "AOS - Love in the Time of Hydra") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120720/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Love in the Time of Hydra";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 14";
}

if (result == "AOS - One Door Closes") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120722/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "One Door Closes";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 15";
}

if (result == "AOS - Afterlife") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120726/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Afterlife";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 16";
}

if (result == "AOS - Melinda") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120730/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Melinda";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 17";
}

if (result == "AOS - The Frenemy of My Enemy") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120738/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Frenemy of My Enemy";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 18";
}

if (result == "AOS - The Dirty Half Dozen") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4120734/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Dirty Half Dozen";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 19";
}

if (result == "AOS - Scars") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4122454/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Scars";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 20";
}

if (result == "AOS - S.O.S. Part 1") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4122456/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "S.O.S. Part 1";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 21";
}

if (result == "AOS - S.O.S. Part 2") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4110822/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "S.O.S. Part 2";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 22";
}

//AGENTS OF SHIELD - SEASON 3

if (result == "AOS - Laws of Nature") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4667540/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Laws of Nature";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 1";
}

if (result == "AOS - Purpose in the Machine") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4706470/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Purpose in the Machine";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 2";
}

if (result == "AOS - A Wanted (Inhu)man") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4727950/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "A Wanted (Inhu)man";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 3";
}

if (result == "AOS - Devils You Know") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4732884/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Devils You Know";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 4";
}

if (result == "AOS - 4,722 Hours") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4742110/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "4,722 Hours";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 5";
}

if (result == "AOS - Among Us Hide...") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4760490/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Among Us Hide...";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 6";
}

if (result == "AOS - Chaos Theory") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4765060/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Chaos Theory";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 7";
}

if (result == "AOS - Many Heads, One Tale") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4769592/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Many Heads, One Tale";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 8";
}

if (result == "AOS - Closure") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4778366/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Closure";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 9";
}

if (result == "AOS - Maveth") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4786258/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Maveth";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 10";
}

if (result == "AOS - Bouncing Back") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4794580/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Bouncing Back";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 11";
}

if (result == "AOS - The Inside Man") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4800060/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Inside Man";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 12";
}

if (result == "AOS - Parting Shot") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4809604/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Parting Shot";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 13";
}

if (result == "AOS - Watchdogs") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4819384/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Watchdogs";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 14";
}

if (result == "AOS - Spacetime") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4829172/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Spacetime";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 15";
}

if (result == "AOS - Paradise Lost") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4838204/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Paradise Lost";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 16";
}

if (result == "AOS - The Team") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4842854/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Team";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 17";
}

if (result == "AOS - The Singularity") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4857186/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Singularity";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 18";
}

if (result == "AOS - Failed Experiments") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4871764/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Failed Experiments";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 19";
}

if (result == "AOS - Emancipation") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4877412/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Emancipation";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 20";
}

if (result == "AOS - Absolution") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4883818/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Absolution";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 21";
}

if (result == "AOS - Ascension") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4899794/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s3.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Ascension";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 22";
}

//AGENTS OF SHIELD - SEASON 4

if (result == "AOS - The Ghost") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5518974/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Ghost";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 1";
}

if (result == "AOS - Meet the New Boss") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916264/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Meet the New Boss";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 2";
}

if (result == "AOS - Uprising") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916458/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Uprising";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 3";
}

if (result == "AOS - Let Me Stand Next to Your Fire") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916482/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Let Me Stand Next to Your Fire";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 4";
}

if (result == "AOS - Lockup") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916512/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Lockup";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 5";
}

if (result == "AOS - The Good Samaritan") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916528/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Good Samaritan";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 6";
}

if (result == "AOS - Deals with Our Devils") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916746/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Deals with Our Devils";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 7";
}

if (result == "AOS - The Laws of Inferno Dynamics") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916754/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Laws of Inferno Dynamics";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 8";
}

if (result == "AOS - Broken Promises") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916768/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Broken Promises";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 9";
}

if (result == "AOS - The Patriot") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916774/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Patriot";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 10";
}

if (result == "AOS - Wake Up") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916778/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Wake Up";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 11";
}

if (result == "AOS - Hot Potato Soup") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916782/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Hot Potato Soup";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 12";
}

if (result == "AOS - BOOM") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916792/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "BOOM";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 13";
}

if (result == "AOS - The Man Behind the Shield") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916818/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Man Behind the Shield";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 14";
}

if (result == "AOS - Self Control") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916824/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Self Control";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 15";
}

if (result == "AOS - What If...") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916832/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "What If...";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 16";
}

if (result == "AOS - Identity and Change") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916836/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Identity and Change";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 17";
}

if (result == "AOS - No Regrets") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916840/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "No Regrets";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 18";
}

if (result == "AOS - All the Madame's Men") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916846/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "All the Madame's Men";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 19";
}

if (result == "AOS - Farewell, Cruel World!") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916856/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Farewell, Cruel World!";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 20";
}

if (result == "AOS - The Return") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916876/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Return";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 21";
}

if (result == "AOS - World's End") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5916882/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s4.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "World's End";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 4, Episode 22";
}

//AGENTS OF SHIELD - SEASON 5

if (result == "AOS - Orientation: Part 1") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6878538/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Orientation: Part 1";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 1";
}

if (result == "AOS - Orientation: Part 2") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7178426/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Orientation: Part 2";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 2";
}

if (result == "AOS - A Life Spent") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183060/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "A Life Spent";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 3";
}

if (result == "AOS - A Life Earned") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183068/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "A Life Earned";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 4";
}

if (result == "AOS - Rewind") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183072/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Rewind";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 5";
}

if (result == "AOS - Fun & Games") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183078/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Fun & Games";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 6";
}

if (result == "AOS - Together or Not at All") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183084/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Together or Not at All";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 7";
}

if (result == "AOS - The Last Day") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183086/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Last Day";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 8";
}

if (result == "AOS - Best Laid Plans") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183090/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Best Laid Plans";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 9";
}

if (result == "AOS - Past Life") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183092/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Past Life";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 10";
}

if (result == "AOS - All the Comforts of Home") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183100/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "All the Comforts of Home";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 11";
}

if (result == "AOS - The Real Deal") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183104/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Real Deal";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 12";
}

if (result == "AOS - Principia") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183106/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Principia";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 13";
}

if (result == "AOS - The Devil Complex") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183112/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Devil Complex";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 14";
}

if (result == "AOS - Rise and Shine") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183116/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Rise and Shine";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 15";
}

if (result == "AOS - Inside Voices") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183120/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Inside Voices";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 16";
}

if (result == "AOS - The Honeymoon") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183126/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Honeymoon";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 17";
}

if (result == "AOS - All Roads Lead...") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183130/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "All Roads Lead...";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 18";
}

if (result == "AOS - Option Two") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183140/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Option Two";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 19";
}

if (result == "AOS - The One Who Will Save Us All") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183150/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The One Who Will Save Us All";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 20";
}

if (result == "AOS - The Force of Gravity") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183156/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Force of Gravity";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 21";
}

if (result == "AOS - The End") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7183160/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s5.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The End";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 5, Episode 22";
}

//AGENTS OF SHIELD - SEASON 6

if (result == "AOS - Missing Pieces") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8416608/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Missing Pieces";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 1";
}

if (result == "AOS - Window of Opportunity") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8416896/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Window of Opportunity";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 2";
}

if (result == "AOS - Fear and Loathing on the Planet of Kitson") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8416904/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Fear and Loathing on the Planet of Kitson";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 3";
}

if (result == "AOS - Code Yellow") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8416910/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Code Yellow";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 4";
}

if (result == "AOS - The Other Thing") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8416912/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Other Thing";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 5";
}

if (result == "AOS - Inescapable") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8416914/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Inescapable";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 6";
}

if (result == "AOS - Toldja") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8416916/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Toldja";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 7";
}

if (result == "AOS - Collision Course (Part I)") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8422650/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Collision Course (Part I)";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 8";
}

if (result == "AOS - Collision Course (Part II)") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8422652/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Collision Course (Part II)";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 9";
}

if (result == "AOS - Leap") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8422656/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Leap";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 10";
}

if (result == "AOS - From the Ashes") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8422660/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "From the Ashes";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 11";
}

if (result == "AOS - The Sign") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8422664/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Sign";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 12";
}

if (result == "AOS - New Life") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8422666/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s6.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "New Life";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 6, Episode 13";
}

//AGENTS OF SHIELD - SEASON 7

if (result == "AOS - The New Deal") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9292314/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The New Deal";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 1";
}

if (result == "AOS - Know Your Onions") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307248/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Know Your Onions";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 2";
}

if (result == "AOS - Alien Commies from the Future!") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307250/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Alien Commies from the Future!";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 3";
}

if (result == "AOS - Out of the Past") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307252/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Out of the Past";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 4";
}

if (result == "AOS - A Trout in the Milk") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307254/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "A Trout in the Milk";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 5";
}

if (result == "AOS - Adapt or Die") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307256/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Adapt or Die";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 6";
}

if (result == "AOS - The Totally Excellent Adventures of Mack and The D") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307258/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The Totally Excellent Adventures of Mack and The D";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 7";
}

if (result == "AOS - After, Before") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307260/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "After, Before";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 8";
}

if (result == "AOS - As I Have Always Been") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307262/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "As I Have Always Been";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 9";
}

if (result == "AOS - Stolen") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307264/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Stolen";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 10";
}

if (result == "AOS - Brand New Day") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307266/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "Brand New Day";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 11";
}

if (result == "AOS - The End Is at Hand") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9307268/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "The End Is at Hand";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 12";
}

if (result == "AOS - What We're Fighting For") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9535202/";
document.getElementById('TitlePoster').src = "images/tv/agentsofshield_s7.jpg";
document.getElementById('TitleCategory').textContent = "Agents of S.H.I.E.L.D.";
document.getElementById('TitleName').textContent = "What We're Fighting For";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 7, Episode 13";
}


//AGENT CARTER SEASON 1


if (result == "Now is Not the End") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3976236/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Now is Not the End";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "Bridge and Tunnel") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125394/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Bridge and Tunnel";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "Time and Tide") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125398/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Time and Tide";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "The Blitzkrieg Button") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125400/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "The Blitzkrieg Button";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "The Iron Ceiling") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125402/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "The Iron Ceiling";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "A Sin to Err") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125404/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "A Sin to Err";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "Snafu") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125406/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "SNAFU";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "Valediction") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125408/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s1_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Valediction";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

//AGENT CARTER SEASON 2

if (result == "The Lady in the Lake") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4667544/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "The Lady in the Lake";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "A View in the Dark") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4706420/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "A View in the Dark";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "Better Angels") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4706428/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Better Angels";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "Smoke & Mirrors") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4706430/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Smoke & Mirrors";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "The Atomic Job") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4706432/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "The Atomic Job";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "Life of the Party") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4706434/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Life of the Party";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "Monsters") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4706436/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Monsters";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "The Edge of Mystery") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4706440/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "The Edge of Mystery";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "A Little Song and Dance") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4712924/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "A Little Song and Dance";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "Hollywood Ending") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4718626/";
document.getElementById('TitlePoster').src = "images/tv/agentcarter_s2.jpg";
document.getElementById('TitleCategory').textContent = "Agent Carter";
document.getElementById('TitleName').textContent = "Hollywood Ending";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

//INHUMANS SEASON 1

if (result == "IHM - Behold... The Inhumans") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6263404/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "Inhumans";
document.getElementById('TitleName').textContent = "Behold... The Inhumans";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "IHM - Those Who Would Destroy Us") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6263408/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "Inhumans";
document.getElementById('TitleName').textContent = "Those Who Would Destroy Us";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "IHM - Divide and Conquer") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6263412/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "Inhumans";
document.getElementById('TitleName').textContent = "Divide and Conquer";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "IHM - Make Way for... Medusa") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6263416/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "Inhumans";
document.getElementById('TitleName').textContent = "Make Way for... Medusa";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "IHM - Something Inhuman This Way Comes...") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6263420/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "Inhumans";
document.getElementById('TitleName').textContent = "Something Inhuman This Way Comes...";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "IHM - The Gentleman's Name is Gorgon") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6263424/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "Inhumans";
document.getElementById('TitleName').textContent = "The Gentleman's Name is Gorgon";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "IHM - Havoc in the Hidden Land") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6263430/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "Inhumans";
document.getElementById('TitleName').textContent = "Havoc in the Hidden Land";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "IHM - ...And Finally: Black Bolt") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6263436/";
document.getElementById('TitlePoster').src = "images/tv/inhumans_s1.jpg";
document.getElementById('TitleCategory').textContent = "Inhumans";
document.getElementById('TitleName').textContent = "...And Finally: Black Bolt";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

document.getElementById("repeatbutton").setAttribute("name","tvabc");

}

