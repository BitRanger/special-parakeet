// setTimeout(function(){ alert("Press the Hello Button, and press and hold the Escape Key"); }, 5000);

/*function hello() {
  setInterval(function(){ prompt("IM HAVING A SEIZURE HELP!!!!!!!!!!!"); }, 1);

}

let x = 1;\\

if(x = 1){
	alert("Indu");
	x ++;
}
if(x=2){
	alert("Is");
	x ++;
}
if(x=3) {
	alert("Cool")

}
 */
window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_parent")
let welcome = "Hello, ";
let username = 123/*prompt("What is you name?");*/
if (username == null) {
	document.getElementById("special").innerHTML = welcome + "Anonymous";
} else {
	document.getElementById("special").innerHTML = welcome + username;
}

function save() {
	document.body.contentEditable = "false";
	document.designMode = "off";
	document.getElementById("#seizure-button").setAttribute("onclick", "edit()");
	document.getElementById("#titlestuff:hover").style.color = "red";
}

function edit() {
	document.body.contentEditable = "true";
	document.designMode = "on";
	document.getElementById("seizure-button").setAttribute("onclick", "save()");
}
