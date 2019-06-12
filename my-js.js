alert('Vi holder øje med dig!');

function kontaktform() {
	var name = document.forms["RegForm"]["Name"];
	var email = document.forms["RegForm"]["EMail"];
	var message = document.forms["RegForm"]["message"];

	if (name.value == "") {
		window.alert("Udfyld venligst dit navn.");
		name.focus();
		return false;
	}

	if (email.value == "") {
		window.alert("Udfyld venligst din email.");
		email.focus();
		return false;
	}

	if (email.value.indexOf("@", 0) < 0) {
		window.alert("Udfyld korrekt Email med '@'");
		email.focus();
		return false;
	}

	if (email.value.indexOf(".", 0) < 0) {
		window.alert("Udfyld korrekt Email med '.'");
		email.focus();
		return false;
	}

	if (message.value == "") {
		window.alert("Udfyld venligst din besked.");
		message.focus();
		return false;
	}
	return true;

function myMove() {
	var elem = document.getElementById("myAnimation");
	var pos = 0;
	var id = setInterval(frame, 10);

	function frame() {
		if (pos == 350) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}



