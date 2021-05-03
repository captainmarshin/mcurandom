function RandomType0() {

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

var tv_daredevil = [

"DRD - Into the Ring",
"DRD - Cut Man",
"DRD - Rabbit in a Snowstorm",
"DRD - In the Blood",
"DRD - World on Fire",
"DRD - Condemned",
"DRD - Stick",
"DRD - Shadows in the Glass",
"DRD - Speak of the Devil",
"DRD - Nelson v. Murdock",
"DRD - The Path of the Righteous",
"DRD - The Ones We Leave Behind",
"DRD - Daredevil",
"DRD - Bang",
"DRD - Dogs to a Gunfight",
"DRD - New York's Finest",
"DRD - Penny and Dime",
"DRD - Kinbaku",
"DRD - Regrets Only",
"DRD - Semper Fidelis",
"DRD - Guilty as Sin",
"DRD - Seven Minutes in Heaven",
"DRD - The Man in the Box",
"DRD - .380",
"DRD - The Dark at the End of the Tunnel",
"DRD - A Cold Day in Hell's Kitchen",
"DRD - Resurrection",
"DRD - Please",
"DRD - No Good Deed",
"DRD - Blindsided",
"DRD - The Perfect Game",
"DRD - The Devil You Know",
"DRD - Aftermath",
"DRD - Upstairs/Downstairs",
"DRD - Revelations",
"DRD - Karen",
"DRD - Reunion",
"DRD - One Last Shot",
"DRD - A New Napkin"

];

var tv_jessicajones = [

"AKA Ladies Night",
"AKA Crush Syndrome",
"AKA It's Called Whiskey",
"AKA 99 Friends",
"AKA The Sandwich Saved Me",
"AKA You're a Winner!",
"AKA Top Shelf Perverts",
"AKA WWJD?",
"AKA Sin Bin",
"AKA 1,000 Cuts",
"AKA I've Got the Blues",
"AKA Take a Bloody Number",
"AKA Smile",
"AKA Start at the Beginning",
"AKA Freak Accident",
"AKA Sole Survivor",
"AKA God Help the Hobo",
"AKA The Octopus",
"AKA Facetime",
"AKA I Want Your Cray Cray",
"AKA Ain't We Got Fun",
"AKA Shark in the Bathtub, Monster in the Bed",
"AKA Pork Chop",
"AKA Three Lives and Counting",
"AKA Pray for My Patsy",
"AKA Playland",
"A.K.A The Perfect Burger",
"A.K.A You're Welcome",
"A.K.A I Have No Spleen",
"A.K.A Customer Service is Standing By",
"A.K.A I Wish",
"A.K.A Sorry Face",
"A.K.A The Double Half-Wappinger",
"A.K.A Camera Friendly",
"A.K.A I Did Something Today",
"A.K.A Hero Pants",
"A.K.A Hellcat",
"A.K.A A Lotta Worms",
"A.K.A Everything"

];

var tv_lukecage = [

"LUC - Moment of Truth",
"LUC - Code of the Streets",
"LUC - Who's Gonna Take the Weight?",
"LUC - Step in the Arena",
"LUC - Just to Get a Rep",
"LUC - Suckas Need Bodyguards",
"LUC - Manifest",
"LUC - Blowin' Up the Spot",
"LUC - DWYCK",
"LUC - Take It Personal",
"LUC - Now You're Mine",
"LUC - Soliloquy of Chaos",
"LUC - You Know My Steez",
"LUC - Soul Brother #1",
"LUC - Straighten It Out",
"LUC - Wig Out",
"LUC - I Get Physical",
"LUC - All Souled Out",
"LUC - The Basement",
"LUC - On and On",
"LUC - If It Ain't Rough, It Ain't Right",
"LUC - For Pete's Sake",
"LUC - The Main Ingredient",
"LUC - The Creator",
"LUC - Can't Front On Me",
"LUC - They Reminisce Over You"

];

var tv_ironfist = [

"IRF - Snow Gives Way",
"IRF - Shadow Hawk Takes Flight",
"IRF - Rolling Thunder Cannon Punch",
"IRF - Eight Diagram Dragon Palm",
"IRF - Under Leaf Pluck Lotus",
"IRF - Immortal Emerges from Cave",
"IRF - Felling Tree with Roots",
"IRF - The Blessing of Many Fractures",
"IRF - The Mistress of All Agonies",
"IRF - Black Tiger Steals Heart",
"IRF - Lead Horse Back to Stable",
"IRF - Bar the Big Boss",
"IRF - Dragon Plays with Fire",
"IRF - The Fury of Iron Fist",
"IRF - The City's Not for Burning",
"IRF - This Deadly Secret...",
"IRF - Target: Iron Fist",
"IRF - Heart of the Dragon",
"IRF - The Dragon Dies at Dawn",
"IRF - Morning of the Mindstorm",
"IRF - Citadel on the Edge of Vengeance",
"IRF - War Without End",
"IRF - A Duel of Iron"

];

var tv_thedefenders = [

"DEF - The H Word",
"DEF - Mean Right Hook",
"DEF - Worst Behavior",
"DEF - Royal Dragon",
"DEF - Take Shelter",
"DEF - Ashes, Ashes",
"DEF - Fish in the Jailhouse",
"DEF - The Defenders"

];

var tv_thepunisher = [

"PUN - 3AM",
"PUN - Two Dead Men",
"PUN - Kandahar",
"PUN - Resupply",
"PUN - Gunner",
"PUN - The Judas Goat",
"PUN - Crosshairs",
"PUN - Cold Steel",
"PUN - Front Toward Enemy",
"PUN - Virtue of the Vicious",
"PUN - Danger Close",
"PUN - Home",
"PUN - Memento Mori",
"PUN - Roadhouse Blues",
"PUN - Fight or Flight",
"PUN - Trouble the Water",
"PUN - Scar Tissue",
"PUN - One-Eyed Jacks",
"PUN - Nakazat",
"PUN - One Bad Day",
"PUN - My Brother's Keeper",
"PUN - Flustercluck",
"PUN - The Dark Hearts of Men",
"PUN - The Abyss",
"PUN - Collision Course",
"PUN - The Whirlwind"

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


// var nonmcu_movies = [

// "NONMCUM - Blade",
// "NONMCUM - X-Men",
// "NONMCUM - Blade II",
// "NONMCUM - Spider-Man",
// "NONMCUM - Daredevil",
// "NONMCUM - X2",
// "NONMCUM - Hulk",
// "NONMCUM - The Punisher",
// "NONMCUM - Spider-Man 2",
// "NONMCUM - Blade: Trinity",
// "NONMCUM - Elektra",
// "NONMCUM - Fantastic Four",
// "NONMCUM - X-Men: The Last Stand",
// "NONMCUM - Ghost Rider",
// "NONMCUM - Spider-Man 3",
// "NONMCUM - Fantastic Four: Rise of the Silver Surfer",
// "NONMCUM - Punisher: War Zone",
// "NONMCUM - X-Men Origins: Wolverine",
// "NONMCUM - X-Men: First Class",
// "NONMCUM - Ghost Rider: Spirit of Vengeance",
// "NONMCUM - The Amazing Spider-Man",
// "NONMCUM - The Wolverine",
// "NONMCUM - The Amazing Spider-Man 2",
// "NONMCUM - X-Men: Days of Future Past",
// "NONMCUM - Fantastic Four (Remake)",
// "NONMCUM - Deadpool",
// "NONMCUM - X-Men: Apocalypse",
// "NONMCUM - Logan",
// "NONMCUM - Deadpool 2",
// "NONMCUM - Venom",
// "NONMCUM - Dark Phoenix",
// "NONMCUM - The New Mutants"

// ];

// var easteregg = [
// "easteregg"
// ];

// var helstrom = [
// "helstrom"
// ];



var chance = Math.random();
var titles = movies.concat(oneshots,webseries,tv);
if (chance < 0.20) {
var titles = movies.concat(oneshots,webseries,webseries_slingshot,webseries_whih,tv,tv_agentsofshield,tv_agentcarter,tv_inhumans,tv_daredevil,tv_jessicajones,tv_lukecage,tv_ironfist,tv_thedefenders,tv_thepunisher,tv_runaways,tv_cloakanddagger,tv_wandavision,tv_falconwintersoldier);
}
var result = titles[Math.floor(Math.random() * titles.length)];


// if (result == "helstrom"){
// 	document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt10266874/";
// 	document.getElementById('TitlePoster').src = "images/non-mcu/movies/helstrom.jpg";
// 	document.getElementById('TitleCategory').textContent = "TV Shows";
// 	document.getElementById('TitleName').textContent = "Helstrom";
// 	document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "easteregg"){
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0091225/";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/howardtheduck.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Howard the Duck";
// document.getElementById('TitleEpisode').style.display = "none";
// }

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

// if (result == "Team Thor") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6016776/";
// document.getElementById('TitlePoster').src = "images/web/teamthor-imdb.jpg";
// document.getElementById('TitleCategory').textContent = "Web Series";
// document.getElementById('TitleName').textContent = "Team Thor";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "Team Thor: Part 2") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6599818/";
// document.getElementById('TitlePoster').src = "images/web/teamthorp2-imdb.jpg";
// document.getElementById('TitleCategory').textContent = "Web Series";
// document.getElementById('TitleName').textContent = "Team Thor: Part 2";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "Team Darryl") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8023090/";
// document.getElementById('TitlePoster').src = "images/web/teamdarryl.jpg";
// document.getElementById('TitleCategory').textContent = "Web Series";
// document.getElementById('TitleName').textContent = "Team Darryl";
// document.getElementById('TitleEpisode').style.display = "none";
// }

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

//DAREDEVIL SEASON 1

if (result == "DRD - Into the Ring") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3330796/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Into the Ring";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "DRD - Cut Man") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3915096/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Cut Man";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "DRD - Rabbit in a Snowstorm") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4000782/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Rabbit in a Snowstorm";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "DRD - In the Blood") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4061068/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "In the Blood";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "DRD - World on Fire") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4061074/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "World on Fire";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "DRD - Condemned") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4065594/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Condemned";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "DRD - Stick") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125416/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Stick";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "DRD - Shadows in the Glass") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125418/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Shadows in the Glass";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "DRD - Speak of the Devil") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125420/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Speak of the Devil";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}

if (result == "DRD - Nelson v. Murdock") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125422/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Nelson v. Murdock";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 10";
}

if (result == "DRD - The Path of the Righteous") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125426/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "The Path of the Righteous";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 11";
}

if (result == "DRD - The Ones We Leave Behind") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125424/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "The Ones We Leave Behind";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 12";
}

if (result == "DRD - Daredevil") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4125428/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s1.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Daredevil";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 13";
}

//DAREDEVIL SEASON 2

if (result == "DRD - Bang") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4625048/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Bang";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "DRD - Dogs to a Gunfight") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4817432/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Dogs to a Gunfight";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "DRD - New York's Finest") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4935616/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "New York's Finest";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "DRD - Penny and Dime") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4947664/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Penny and Dime";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "DRD - Kinbaku") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950308/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Kinbaku";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "DRD - Regrets Only") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950312/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Regrets Only";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "DRD - Semper Fidelis") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950310/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Semper Fidelis";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "DRD - Guilty as Sin") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950326/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Guilty as Sin";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "DRD - Seven Minutes in Heaven") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950314/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Seven Minutes in Heaven";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "DRD - The Man in the Box") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950318/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "The Man in the Box";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

if (result == "DRD - .380") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950322/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = ".380";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 11";
}

if (result == "DRD - The Dark at the End of the Tunnel") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950320/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "The Dark at the End of the Tunnel";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 12";
}

if (result == "DRD - A Cold Day in Hell's Kitchen") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4950324/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s2.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "A Cold Day in Hell's Kitchen";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 13";
}

//DAREDEVIL SEASON 3

if (result == "DRD - Resurrection") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5902120/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Resurrection";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 1";
}

if (result == "DRD - Please") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741926/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Please";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 2";
}

if (result == "DRD - No Good Deed") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741928/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "No Good Deed";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 3";
}

if (result == "DRD - Blindsided") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741930/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Blindsided";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 4";
}

if (result == "DRD - The Perfect Game") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741932/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "The Perfect Game";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 5";
}

if (result == "DRD - The Devil You Know") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741934/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "The Devil You Know";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 6";
}

if (result == "DRD - Aftermath") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741936/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Aftermath";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 7";
}

if (result == "DRD - Upstairs/Downstairs") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741938/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Upstairs/Downstairs";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 8";
}

if (result == "DRD - Revelations") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741940/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Revelations";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 9";
}

if (result == "DRD - Karen") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741942/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Karen";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 10";
}

if (result == "DRD - Reunion") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741944/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "Reunion";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 11";
}

if (result == "DRD - One Last Shot") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741946/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "One Last Shot";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 12";
}

if (result == "DRD - A New Napkin") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741948/";
document.getElementById('TitlePoster').src = "images/tv/daredevil_s3_imdb.jpg";
document.getElementById('TitleCategory').textContent = "Daredevil";
document.getElementById('TitleName').textContent = "A New Napkin";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 13";
}

//JESSICA JONES SEASON 1

if (result == "AKA Ladies Night") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162058/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Ladies Night";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "AKA Crush Syndrome") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162062/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Crush Syndrome";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "AKA It's Called Whiskey") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162064/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA It's Called Whiskey";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "AKA 99 Friends") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162066/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA 99 Friends";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "AKA The Sandwich Saved Me") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162072/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA The Sandwich Saved Me";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "AKA You're a Winner!") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162076/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA You're a Winner!";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "AKA Top Shelf Perverts") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162080/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "Top Shelf Perverts";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "AKA WWJD?") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162078/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA WWJD?";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "AKA Sin Bin") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162086/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Sin Bin";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}

if (result == "AKA 1,000 Cuts") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162088/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA 1,000 Cuts";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 10";
}

if (result == "AKA I've Got the Blues") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162092/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA I've Got the Blues";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 11";
}

if (result == "AKA Take a Bloody Number") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162094/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Take a Bloody Number";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 12";
}

if (result == "AKA Smile") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4162096/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s1.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Smile";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 13";
}

//JESSICA JONES SEASON 2

if (result == "AKA Start at the Beginning") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349278/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Start at the Beginning";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "AKA Freak Accident") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349282/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Freak Accident";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "AKA Sole Survivor") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349300/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Sole Survivor";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "AKA God Help the Hobo") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349302/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA God Help the Hobo";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "AKA The Octopus") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349312/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA The Octopus";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "AKA Facetime") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349328/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Facetime";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "AKA I Want Your Cray Cray") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349332/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA I Want Your Cray Cray";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "AKA Ain't We Got Fun") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349338/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Ain't We Got Fun";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "AKA Shark in the Bathtub, Monster in the Bed") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349342/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Shark in the Bathtub, Monster in the Bed";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "AKA Pork Chop") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349348/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Pork Chop";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

if (result == "AKA Three Lives and Counting") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349356/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Three Lives and Counting";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 11";
}

if (result == "AKA Pray for My Patsy") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349360/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Pray for My Patsy";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 12";
}

if (result == "AKA Playland") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5349376/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s2.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "AKA Playland";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 13";
}

//JESSICA JONES SEASON 3

if (result == "A.K.A The Perfect Burger") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8272228/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A The Perfect Burger";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 1";
}

if (result == "A.K.A You're Welcome") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8682974/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A You're Welcome";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 2";
}

if (result == "A.K.A I Have No Spleen") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8960480/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A I Have No Spleen";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 3";
}

if (result == "A.K.A Customer Service is Standing By") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8960486/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A Customer Service is Standing By";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 4";
}

if (result == "A.K.A I Wish") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8978254/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A I Wish";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 5";
}

if (result == "A.K.A Sorry Face") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9007560/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A Sorry Face";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 6";
}

if (result == "A.K.A The Double Half-Wappinger") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9046968/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A The Double Half-Wappinger";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 7";
}

if (result == "A.K.A Camera Friendly") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9341012/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A Camera Friendly";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 8";
}

if (result == "A.K.A I Did Something Today") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9341014/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A I Did Something Today";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 9";
}

if (result == "A.K.A Hero Pants") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9238320/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A Hero Pants";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 10";
}

if (result == "A.K.A Hellcat") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9257820/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A Hellcat";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 11";
}

if (result == "A.K.A A Lotta Worms") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9341016/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A A Lotta Worms";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 12";
}

if (result == "A.K.A Everything") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt9341018/";
document.getElementById('TitlePoster').src = "images/tv/jessicajones_s3.jpg";
document.getElementById('TitleCategory').textContent = "Jessica Jones";
document.getElementById('TitleName').textContent = "A.K.A Everything";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 3, Episode 13";
}

//LUKE CAGE SEASON 1

if (result == "LUC - Moment of Truth") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179626/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Moment of Truth";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "LUC - Code of the Streets") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179628/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Code of the Streets";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "LUC - Who's Gonna Take the Weight?") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179634/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Who's Gonna Take the Weight?";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "LUC - Step in the Arena") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179636/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Step in the Arena";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "LUC - Just to Get a Rep") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179642/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Just to Get a Rep";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "LUC - Suckas Need Bodyguards") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179686/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Suckas Need Bodyguards";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "LUC - Manifest") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179742/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Manifest";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "LUC - Blowin' Up the Spot") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179760/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Blowin' Up the Spot";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "LUC - DWYCK") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179772/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "DWYCK";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}

if (result == "LUC - Take It Personal") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179776/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Take It Personal";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 10";
}

if (result == "LUC - Now You're Mine") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179784/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Now You're Mine";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 11";
}

if (result == "LUC - Soliloquy of Chaos") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179798/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Soliloquy of Chaos";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 12";
}

if (result == "LUC - You Know My Steez") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4179804/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s1.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "You Know My Steez";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 13";
}

//LUKE CAGE SEASON 2

if (result == "LUC - Soul Brother #1") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6312068/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Soul Brother #1";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "LUC - Straighten It Out") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6401054/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Straighten It Out";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "LUC - Wig Out") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6415098/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Wig Out";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "LUC - I Get Physical") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741906/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "I Get Physical";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "LUC - All Souled Out") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741908/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "All Souled Out";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "LUC - The Basement") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741910/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "The Basement";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "LUC - On and On") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741912/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "On and On";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "LUC - If It Ain't Rough, It Ain't Right") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741914/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "If It Ain't Rough, It Ain't Right";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "LUC - For Pete's Sake") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741916/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "For Pete's Sake";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "LUC - The Main Ingredient") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741918/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "The Main Ingredient";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

if (result == "LUC - The Creator") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741920/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "The Creator";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 11";
}

if (result == "LUC - Can't Front On Me") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741922/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "Can't Front On Me";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 12";
}

if (result == "LUC - They Reminisce Over You") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6741924/";
document.getElementById('TitlePoster').src = "images/tv/lukecage_s2.jpg";
document.getElementById('TitleCategory').textContent = "Luke Cage";
document.getElementById('TitleName').textContent = "They Reminisce Over You";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 13";
}

//IRON FIST SEASON 1

if (result == "IRF - Snow Gives Way") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174026/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Snow Gives Way";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "IRF - Shadow Hawk Takes Flight") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174028/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Shadow Hawk Takes Flight";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "IRF - Rolling Thunder Cannon Punch") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174030/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Rolling Thunder Cannon Punch";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "IRF - Eight Diagram Dragon Palm") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174066/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Eight Diagram Dragon Palm";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "IRF - Under Leaf Pluck Lotus") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174070/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Under Leaf Pluck Lotus";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "IRF - Immortal Emerges from Cave") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174072/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Immortal Emerges from Cave";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "IRF - Felling Tree with Roots") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174074/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Felling Tree with Roots";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "IRF - The Blessing of Many Fractures") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174078/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "The Blessing of Many Fractures";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "IRF - The Mistress of All Agonies") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174080/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "The Mistress of All Agonies";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}

if (result == "IRF - Black Tiger Steals Heart") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174082/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Black Tiger Steals Heart";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 10";
}

if (result == "IRF - Lead Horse Back to Stable") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174084/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Lead Horse Back to Stable";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 11";
}

if (result == "IRF - Bar the Big Boss") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174090/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Bar the Big Boss";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 12";
}

if (result == "IRF - Dragon Plays with Fire") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4174096/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s1.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Dragon Plays with Fire";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 13";
}

//IRON FIST SEASON 2

if (result == "IRF - The Fury of Iron Fist") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7166218/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "The Fury of Iron Fist";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "IRF - The City's Not for Burning") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8007196/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "The City's Not for Burning";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "IRF - This Deadly Secret...") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8051660/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "This Deadly Secret...";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "IRF - Target: Iron Fist") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8051684/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Target: Iron Fist";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "IRF - Heart of the Dragon") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8051692/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Heart of the Dragon";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "IRF - The Dragon Dies at Dawn") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8051700/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "The Dragon Dies at Dawn";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "IRF - Morning of the Mindstorm") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8051704/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Morning of the Mindstorm";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "IRF - Citadel on the Edge of Vengeance") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8051706/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "Citadel on the Edge of Vengeance";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "IRF - War Without End") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8051708/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "War Without End";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "IRF - A Duel of Iron") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8051710/";
document.getElementById('TitlePoster').src = "images/tv/ironfist_s2.jpg";
document.getElementById('TitleCategory').textContent = "Iron Fist";
document.getElementById('TitleName').textContent = "A Duel of Iron";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

//THE DEFENDERS SEASON 1

if (result == "DEF - The H Word") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4270062/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Defenders";
document.getElementById('TitleName').textContent = "The H Word";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "DEF - Mean Right Hook") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4270066/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Defenders";
document.getElementById('TitleName').textContent = "Mean Right Hook";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "DEF - Worst Behavior") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4270076/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Defenders";
document.getElementById('TitleName').textContent = "Worst Behavior";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "DEF - Royal Dragon") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4270082/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Defenders";
document.getElementById('TitleName').textContent = "Royal Dragon";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "DEF - Take Shelter") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4270086/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Defenders";
document.getElementById('TitleName').textContent = "Take Shelter";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "DEF - Ashes, Ashes") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4270094/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Defenders";
document.getElementById('TitleName').textContent = "Ashes, Ashes";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "DEF - Fish in the Jailhouse") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4270098/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Defenders";
document.getElementById('TitleName').textContent = "Fish in the Jailhouse";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "DEF - The Defenders") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4270102/";
document.getElementById('TitlePoster').src = "images/tv/defenders_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Defenders";
document.getElementById('TitleName').textContent = "The Defenders";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

//THE PUNISHER SEASON 1

if (result == "PUN - 3AM") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690490/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "3AM";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 1";
}

if (result == "PUN - Two Dead Men") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690496/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Two Dead Men";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 2";
}

if (result == "PUN - Kandahar") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690500/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Kandahar";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 3";
}

if (result == "PUN - Resupply") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690506/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Resupply";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 4";
}

if (result == "PUN - Gunner") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690514/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Gunner";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 5";
}

if (result == "PUN - The Judas Goat") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690526/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "The Judas Goat";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 6";
}

if (result == "PUN - Crosshairs") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690528/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Crosshairs";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 7";
}

if (result == "PUN - Cold Steel") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690534/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Cold Steel";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 8";
}

if (result == "PUN - Front Toward Enemy") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690538/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Front Toward Enemy";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 9";
}

if (result == "PUN - Virtue of the Vicious") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690544/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Virtue of the Vicious";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 10";
}

if (result == "PUN - Danger Close") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690548/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Danger Close";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 11";
}

if (result == "PUN - Home") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690552/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Home";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 12";
}

if (result == "PUN - Memento Mori") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5690560/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s1.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Memento Mori";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 1, Episode 13";
}

//THE PUNISHER SEASON 2

if (result == "PUN - Roadhouse Blues") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt7746006/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Roadhouse Blues";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 1";
}

if (result == "PUN - Fight or Flight") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8050238/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Fight or Flight";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 2";
}

if (result == "PUN - Trouble the Water") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8230684/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Trouble the Water";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 3";
}

if (result == "PUN - Scar Tissue") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8762254/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Scar Tissue";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 4";
}

if (result == "PUN - One-Eyed Jacks") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8709448/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "One-Eyed Jacks";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 5";
}

if (result == "PUN - Nakazat") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8762262/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Nakazat";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 6";
}

if (result == "PUN - One Bad Day") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8762270/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "One Bad Day";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 7";
}

if (result == "PUN - My Brother's Keeper") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8581084/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "My Brother's Keeper";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 8";
}

if (result == "PUN - Flustercluck") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8390538/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Flustercluck";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 9";
}

if (result == "PUN - The Dark Hearts of Men") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8639358/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "The Dark Hearts of Men";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 10";
}

if (result == "PUN - The Abyss") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8737922/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "The Abyss";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 11";
}

if (result == "PUN - Collision Course") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8737924/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "Collision Course";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 12";
}

if (result == "PUN - The Whirlwind") {
document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt8737926/";
document.getElementById('TitlePoster').src = "images/tv/thepunisher_s2.jpg";
document.getElementById('TitleCategory').textContent = "The Punisher";
document.getElementById('TitleName').textContent = "The Whirlwind";
document.getElementById('TitleEpisode').style.display = "block";
document.getElementById('TitleEpisode').textContent = "Season 2, Episode 13";
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


//NON-MCU MOVIES (STARTS FROM 1998)

// if (result == "NONMCUM - Blade") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0120611";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/blade.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Blade";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - X-Men") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0120903";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/x-men.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "X-Men";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Blade II") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0187738";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/blade2.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Blade II";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Spider-Man") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0145487";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/spider-man.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Spider-Man";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Daredevil") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0287978";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/daredevil.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Daredevil";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - X2") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0290334";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/x2.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "X2";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Hulk") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0286716";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/hulk.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Hulk";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - The Punisher") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0330793";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/thepunisher.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "The Punisher";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Spider-Man 2") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0316654";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/spider-man2.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Spider-Man 2";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Blade: Trinity") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0359013";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/blade3.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Blade: Trinity";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Elektra") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0357277";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/elektra.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Elektra";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Fantastic Four") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0120667";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/fantasticfour.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Fantastic Four";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - X-Men: The Last Stand") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0376994";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/x-menlaststand.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "X-Men: The Last Stand";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Ghost Rider") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0259324";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/ghostrider.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Ghost Rider";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Spider-Man 3") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0413300";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/spider-man3.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Spider-Man 3";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Fantastic Four: Rise of the Silver Surfer") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0486576";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/fantasticfour2.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Fantastic Four: Rise of the Silver Surfer";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Punisher: War Zone") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0450314";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/punisherwarzone.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Punisher: War Zone";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - X-Men Origins: Wolverine") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0458525";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/x-menoriginswolverine.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "X-Men Origins: Wolverine";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - X-Men: First Class") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1270798";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/x-menfirstclass.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "X-Men: First Class";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Ghost Rider: Spirit of Vengeance") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1071875";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/ghostrider2.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Ghost Rider: Spirit of Vengeance";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - The Amazing Spider-Man") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt0948470";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/amazingspider-man.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "The Amazing Spider-Man";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - The Wolverine") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1430132";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/thewolverine.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "The Wolverine";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - The Amazing Spider-Man 2") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1872181";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/amazingspider-man2.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "The Amazing Spider-Man 2";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - X-Men: Days of Future Past") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1877832";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/x-mendaysoffuturepast.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "X-Men: Days of Future Past";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Fantastic Four (Remake)") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1502712";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/fantasticfourremake.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Fantastic Four";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Deadpool") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1431045";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/deadpool.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Deadpool";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - X-Men: Apocalypse") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3385516";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/x-menapocalypse.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "X-Men: Apocalypse";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Logan") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt3315342";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/logan.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Logan";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Deadpool 2") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt5463162";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/deadpool2.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Deadpool 2";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Venom") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt1270797";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/venom.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "Venom";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - Dark Phoenix") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt6565702";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/x-mendarkphoenix.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "X-Men: Dark Phoenix";
// document.getElementById('TitleEpisode').style.display = "none";
// }

// if (result == "NONMCUM - The New Mutants") {
// document.getElementById('TitleIMDBLink').href = "https://www.imdb.com/title/tt4682266";
// document.getElementById('TitlePoster').src = "images/non-mcu/movies/newmutants.jpg";
// document.getElementById('TitleCategory').textContent = "Movie";
// document.getElementById('TitleName').textContent = "The New Mutants";
// document.getElementById('TitleEpisode').style.display = "none";
// }

document.getElementById("repeatbutton").setAttribute("name","all");

}