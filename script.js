
var d = new Date();
var sDate;
switch (d.getMonth()){
	case 0:
		sDate = "Jan ";
		break;
	case 1:
		sDate = "Feb ";
		break;
	case 2:
		sDate = "March ";
		break;
	case 3:
		sDate = "April ";
		break;
	case 4:
		sDate = "May ";
		break;
	case 5:
		sDate = "June ";
		break;
	case 6:
		sDate = "July ";
		break;
	case 7:
		sDate = "Aug ";
		break;
	case 8:
		sDate = "Sept ";
		break;
	case 9:
		sDate = "Oct ";
		break;
	case 10:
		sDate = "Nov ";
		break;
	case 11:
		sDate = "Dec ";
		break;
}
sDate = sDate + d.getFullYear();

var aboutTimer;
var aboutTimerIsSet = false;
var pElement;
var tElement;
var animation;
var size;
function displayOnMouseOver (element) {
	var id = element.id;
	var p;
	var t;
	switch (id) {
		case "hEdu":
			document.getElementById("pEdu").style.display="block";
			p = "pEdu";
			break;
		case "hExp":
			document.getElementById("pExp").style.display="block";
			p = "pExp";
			t = "tExp";
			break;
		case "hSkills":
			document.getElementById("pSkills").style.display="block";
			p = "pSkills";
			t = "tSkills";
			break;
		case "hAbout":
			document.getElementById("pAbout").style.display="block";
			p = "pAbout";
			if (aboutTimerIsSet == true){
				return;
			}
			break;
		case "hRef":
			document.getElementById("pRef").style.display="block";
			p = "pRef";
			break;
	}
	pElement = document.getElementById(p);
	tElement = document.getElementById(t);
	pElement.style.fontSize = "1px";
	if (tElement) {
	tElement.style.fontSize = "1px";
	}
	size = 1;
	animation = setInterval(animateText, 35);
}
function animateText () {
	if (pElement.style.fontSize == "18px") {
		window.clearInterval (animation);
	} else {
		size += 1;
		pElement.style.fontSize = size + "px";
		if (tElement) {
		tElement.style.fontSize = size + "px";
		}
	}
}
function displayOnMouseOut (element) {
	var id = element.id;
	switch (id) {
		case "hEdu":
			document.getElementById("pEdu").style.display="none";
			break;
		case "hExp":
			document.getElementById("pExp").style.display="none";
			break;
		case "hSkills":
			document.getElementById("pSkills").style.display="none";
			break;
		case "hAbout":
			if (aboutTimerIsSet == false) {
				//document.getElementById("pAbout").style.fontSize="18px";
				aboutTimer = setTimeout(aboutTimerFunc,3000);
				aboutTimerIsSet = true;
			}
			break;
		case "hRef":
			document.getElementById("pRef").style.display="none";
			break;
	}
}
function aboutTimerFunc() { 
	document.getElementById("pAbout").style.display="none";
	aboutTimerIsSet = false;
	clearTimeout(aboutTimer);
}
