
function addInputFieldValueById(id) {
	const inputValue = parseFloat(document.getElementById(id).value);
	return inputValue;
};
function addTextFieldValueById(id) {
	const inputValue = parseFloat(document.getElementById(id).innerText);
	return inputValue;
};
function addPlaceFieldValueById(id) {
	const inputValue = document.getElementById(id).innerText;
	return inputValue;
};

// added and remove function

function btnFieldById(id) {
	// add hidden
	document.getElementById('donation').classList.add('hidden');
	document.getElementById('history').classList.add('hidden');
	// remove hidden
	document.getElementById(id).classList.remove('hidden');
};


// default donation btn color
document.getElementById('donation-add-btn').classList.add('bg-lime-500', 'hover:bg-lime-500');
// click added change button color function
function clickChangeColor(id) {
	document.getElementById('donation-add-btn').classList.remove('bg-lime-500')
	document.getElementById('history-add-btn').classList.remove('bg-lime-500')

	document.getElementById(id).classList.add('bg-lime-500', 'hover:bg-lime-500');
};

// page file convert

function blogs() {
	window.location.href = 'blogs.html';
}

function index() {
	window.location.href = 'index.html';
}
