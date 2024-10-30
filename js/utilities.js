// event handler

function getInputFieldValueById(id) {
	const inputValue = parseFloat(document.getElementById(id).value);
	return inputValue;
}

function getTextFieldValueById(id) {
	const textValue = parseFloat(document.getElementById(id).innerText);
	return textValue;
}

function getStringFieldValueById(id) {
	const stringValue = document.getElementById(id).innerText;
	return stringValue;
}


// add and hidden btn

function addBtnFieldById(id) {
	document.getElementById('history').classList.add('hidden');
	document.getElementById('donation').classList.add('hidden');
	// remove hidden
	document.getElementById(id).classList.remove('hidden');
}

// add and hidden color
document.getElementById('donation-add-btn').classList.add('bg-lime-500', 'hover:bg-lime-500');
function addColorFieldById(id) {
	document.getElementById('donation-add-btn').classList.remove('bg-lime-500');
	document.getElementById('history-add-btn').classList.remove('bg-lime-500');
	// add color
	document.getElementById(id).classList.add('bg-lime-500', 'hover:bg-lime-500');
}

// page file convert

function blogs() {
	window.location.href = 'blogs.html';
}

function index() {
	window.location.href = 'index.html';
}
