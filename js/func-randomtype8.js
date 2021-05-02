function RandomType8() {

var tv = [

"Daredevil",
"Jessica Jones",
"Luke Cage",
"Iron Fist",
"The Defenders",
"The Punisher",

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

var titles = tv.concat(tv_daredevil,tv_jessicajones,tv_lukecage,tv_ironfist,tv_thedefenders,tv_thepunisher);
var result = titles[Math.floor(Math.random() * titles.length)];

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

document.getElementById("repeatbutton").setAttribute("name","tvnetflix");

}


