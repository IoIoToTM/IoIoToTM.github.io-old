languages = ' [ {"index":{"en":{"Home":"Home","Projects":"Projects","About me":"About me","Description":"I am a second year Computer Science student at the University of Southampton. I have been programming since 8th grade (2011), mostly in C++, and then Java. I have some experience in web development - HTML5, CSS, Javascript, PHP and etc. You can view some of my projects in the projects page where you can also see the code in GitHub.","PersonalSkills":"Personal Skills","Skills":{"Programming":"Programming","progDesc":"I\'ve been programming since I got into high school, started in C++, then some JavaScript and web development, and now at university I have done Java and Haskell. I have also experience in scripting languages like bash. I have also worked with PHP and Python on a Raspberry Pi 3 for a web server application, from a very simple and primitive chat client with login, to a camera stream to some LEDs which you could control and see or an FM radio where you put a link to a youtube video and a frequency and you can listen to the music on that specified frequency. I\'ve done some simple x86 Assembly before because I was very interested and ARM Assembly as part of my course on the Raspberry Pi.","IT":"IT","ITDesc":"I also can work with a wide variety of different software, for example video editing, like Adobe Premiere Pro or After Effects (the results of which you can see on my youtube channel IoIoToTM), or some music production ones, like FL Studio or Guitar Rig. I also can work with Unity, although I haven\'t done a lot of work in it.","Languages":"Languages","LangDesc":"Appart from the programming languages (C++, Java and etc.) I can speak Bulgarian, as I\'m from there, and English too, been studying it since second grade. I can also speak and understand Italian to a pretty good degree, and I can also speak a bit of German, although that\'s my weakest language."},"Interests":"Interests","InterestsList":{"Technology":"Technology","TechnologyDesc":"I am interested in a wide range of different technologies - from VR/AR (things like HTC Vive and Microsoft Hololens) to computer vision algorithms and their use in everyday life - I keep up to date with a lot of modern and new advances in the world. I like studying and using new technologies.","Music":"Music","MusicDesc":"I am a self-taught guitar player (and maybe a bit piano), and I love music. It\'s really relaxing playing an instrument and learning it by myself has helped me become more disciplined and perseverant.","GameDev":"Game Development","GameDevDesc":"I\'m really interested also in game development since I started programming, the idea of making a game has always had me in awe, the way a game can make you feel, the experience and everything around it, it\'s just so interesting. Even though I haven\'t developed any big game or anything worth playing, I aim to work towards that goal one day.","Electronics":"Electronics","ElectronicsDesc":"Another big passion I have that I didn\'t realise I have until I started university is electronics - building circuits, making different tangible things in the real world - if programming gives me power to create things on a screen, then with electronics I can bring that to life in the real world. I have a Raspberry Pi 3 from one of my courses in university and I love thinking of things I can do with it, connecting LEDs in the shape of a 7 segment display, building circuits and etc."}},"bg":{"Home":"Начало","Projects":"Проекти","About me":"За мен","Description":"Аз съм студент по Компютърни науки втора година в университета в Саутхемптън. Програмирам от осми клас (2011), предимно в C++, а сега уча Java. Имам и опит в уеб разработка - HTML5, CSS, Javascript, PHP и тн. Може да видиш някои от проектите ми в страницата за проекти, където също така може да видиш кода ми в GitHub."}},"Projects":{"en":{"Projects":"Projects","DoilyDesc":"<a href=\\"https://github.com/IoIoToTM/Digital-Doily\\"> Digital Doily </a> - This is actually my first Programming II coursework at the university. It\'s basically a <a href=\\"https://en.wikipedia.org/wiki/Doily\\">Doily</a> maker, with a few options to change color, size of pen, numbers of refelcted sectors and etc. It\'s written in Java as we\'re studying that. (Download JAR file: <a href=\\"files/Digital Doily.jar\\">Digital Doily.jar</a>)","PhysicsSquare":"<a href=\\"https://github.com/IoIoToTM/IoIoToTM.github.io/blob/master/PhysicsSquare.html\\">Physics square</a> is my first try at making something in JavaScript and HTML5. It\'s kind of a physics simulation (a very simple one), where you control the red square with the arrow/WASD keys or you can drag it with the mouse, and you can change a few options like gravity, the bouncing coefficient (how much it bounces) and a few other option. There is also a WebGL link if you move the square to the left bottom corner, which is a little test with 3D animation I wanted to try. You can try it on this page (click <a href=\\"javascript:void(0)\\" id=\'button\'>here</a>) or in it\s original page <a href=\\"PhysicsSquare.html\\">here</a>."},"bg":{"Projects":"Проекти","DoilyDesc":"<a href=\\"https://github.com/IoIoToTM/Digital-Doily\\"> Дигитално Doily </a> - Това всъщност е първата ми курсова работа по Програмиране 2 в университета. Като цяло е програма за правене на <a href=\\"https://en.wikipedia.org/wiki/Doily\\">Doily</a>, с няколко различни опции за сменяне на цвят, размер на молива, брой на отразени сектори и тн. Написана е на Java тъй като я учим. (Изтегли JAR файл: <a href=\\"files/Digital Doily.jar\\">Digital Doily.jar</a>)","PhysicsSquare":"<a href=\\"https://github.com/IoIoToTM/IoIoToTM.github.io/blob/master/PhysicsSquare.html\\">Физичен квадрат (Physics square)</a> е първият ми опит да направя нещо на Javascript и HTML5. Това е вид физична симулация (много проста) в която контролираш червения квадрат със стрелките/WASD, или може да го влачиш с мишката, и може да променяш няколко различни опции като гравитация, коефициента на подскачане (колко е отблъскван като се блъсне със стена), и тн. Има и линк към WebGL ако придвижиш квадрата към левият долен ъгъл, което е малък тест с 3D анимация който исках да опитам. Може да го опиташ на тази страница (кликни <a href=\\"javascript:void(0)\\" id=\'button\'>тук</a>) или на оригиналната му страница <a href=\\"PhysicsSquare.html\\">тук</a>."}} }]';

//I'm well aware this is not how you should do it and it's a very clunky way to do it, but it's still a way 

	var language = getQueryVariable("lang");

	var obj = JSON.parse(languages)[0];
	if(language==null)
	{
		var url = location.href.substring(0,location.href.indexOf("?"));
		if(url == "http://ioiototm.github.io/")
		{
			url+="index.html"
		}
		url+="?lang=en";
		language = "en";
		window.history.pushState("","",url);
	}
	
	displayLanguage(language);

//function for getting the variables form the URL
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
  return null;
}

//function for displaying the passed language
function displayLanguage(lang)
{
	var url = location.href;
	var url_tokens = url.split("/");
	var url_name = url_tokens[url_tokens.length-1].split(".")[0];


	fixButtonLanguage(lang);
	fixLanguageSelector(lang);

	if(url_name=="index")
	{
		if(lang=="en")
		{
			document.getElementById("aboutMe").innerHTML= obj.index.en["About me"];
			document.getElementById("description").innerHTML= obj.index.en["Description"];
			document.getElementById("PersonalSkills").innerHTML= obj.index.en["PersonalSkills"];
			document.getElementById("programming").innerHTML= obj.index.en.Skills["Programming"];
			document.getElementById("programmingDesc").innerHTML= obj.index.en.Skills["progDesc"];
			document.getElementById("IT").innerHTML= obj.index.en.Skills["IT"];
			document.getElementById("ITDesc").innerHTML= obj.index.en.Skills["ITDesc"];
			document.getElementById("Languages").innerHTML= obj.index.en.Skills["Languages"];
			document.getElementById("LangDesc").innerHTML= obj.index.en.Skills["LangDesc"];
			document.getElementById("Interests").innerHTML= obj.index.en["Interests"];
			document.getElementById("Technology").innerHTML= obj.index.en.InterestsList["Technology"];
			document.getElementById("TechnologyDesc").innerHTML= obj.index.en.InterestsList["TechnologyDesc"];
			document.getElementById("Music").innerHTML= obj.index.en.InterestsList["Music"];
			document.getElementById("MusicDesc").innerHTML= obj.index.en.InterestsList["MusicDesc"];
			document.getElementById("GameDev").innerHTML= obj.index.en.InterestsList["GameDev"];
			document.getElementById("GameDevDesc").innerHTML= obj.index.en.InterestsList["GameDevDesc"];
			document.getElementById("Electronics").innerHTML= obj.index.en.InterestsList["Electronics"];
			document.getElementById("ElectronicsDesc").innerHTML= obj.index.en.InterestsList["ElectronicsDesc"];

			return;
		}
		if(lang=="bg")
		{
			document.getElementById("aboutMe").innerHTML= obj.index.bg["About me"];
			document.getElementById("description").innerHTML= obj.index.bg["Description"];
			return;
		}
		return;
	}
	if(url_name=="projects")
	{
		if(lang=="en")
		{
			document.getElementById("projectHeading").innerHTML = obj.Projects.en["Projects"];
			document.getElementById("DoilyDesc").innerHTML = obj.Projects.en["DoilyDesc"];
			document.getElementById("PhysicsSquare").innerHTML = obj.Projects.en["PhysicsSquare"];
		}
		if(lang=="bg")
		{
			document.getElementById("projectHeading").innerHTML = obj.Projects.bg["Projects"];
			document.getElementById("DoilyDesc").innerHTML = obj.Projects.bg["DoilyDesc"];
			document.getElementById("PhysicsSquare").innerHTML = obj.Projects.bg["PhysicsSquare"];
		}
	}
}

function fixButtonLanguage(language)
{
	if(language=="en")
	{
			document.getElementById("Home").innerHTML= obj.index.en["Home"];
			document.getElementById("Home").href = "index.html?lang=en";


			document.getElementById("Projects").innerHTML= obj.index.en["Projects"];
			document.getElementById("Projects").href = "projects.html?lang=en";
	}
	if(language=="bg")
	{
			document.getElementById("Home").innerHTML= obj.index.bg["Home"];
			document.getElementById("Home").href = "index.html?lang=bg";

			document.getElementById("Projects").innerHTML= obj.index.bg["Projects"];
			document.getElementById("Projects").href = "projects.html?lang=bg";
	}
}
function fixLanguageSelector(language)
{
	/*if(language=="en")
	{
		document.getElementById("languageSelector").innerHTML = "English";
		document.getElementById("languageDropdown").innerHTML = "Български";
		
	}
	if(language=="bg")
	{
		document.getElementById("languageSelector").innerHTML = "<span>Български</span>";
		document.getElementById("languageDropdown").innerHTML = "English";
	}*/
}