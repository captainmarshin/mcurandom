function QuickRandom() {
	var titles = [ "Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America: The First Avenger", "Marvel's The Avengers", "Iron Man 3", "Thor: The Dark World", "Captain America: The Winter Soldier", "Guardians of the Galaxy", "Avengers: Age of Ultron", "Ant-Man", "Captain America: Civil War", "Doctor Strange", "Guardians of the Galaxy Vol. 2", "Spider-Man: Homecoming", "Thor: Ragnarok", "Black Panther", "Avengers: Infinity War", "Ant-Man and the Wasp", "Captain Marvel", "Avengers: Endgame", "Spider-Man: Far From Home", "The Consultant", "A Funny Thing Happened on the Way to Thor's Hammer", "Item 47", "Agent Carter", "All Hail the King", "Peter's To-Do List", "Team Thor", "Team Thor: Part 2", "Team Darryl", "WHIH Newsfront", "Agents of S.H.I.E.L.D.: Slingshot", "Agents of S.H.I.E.L.D.", "Agent Carter (TV)", "Inhumans", "Daredevil", "Jessica Jones", "Luke Cage", "Iron Fist", "The Defenders", "The Punisher", "Runaways", "Cloak & Dagger", "WandaVision", "The Falcon and The Winter Soldier", "Howard the Duck" ];
	var quickrandom = Math.floor(Math.random() * titles.length);
	document.getElementById('QuickRandomResult').innerHTML = titles[quickrandom];
}