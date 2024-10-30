


document.getElementById('flood-donate-btn').addEventListener('click', function () {
	const inputAmountValue = addInputFieldValueById('first-input-amount');
	const inputAddValue = addTextFieldValueById('first-add-amount');
	const balance = addTextFieldValueById('balance');

	if (isNaN(inputAmountValue) || inputAmountValue <= 0) {
		alert('invalid amount.please try again')
		return;
	}

	if (inputAmountValue > balance) {
		alert('wrong amount')
		return;
	}

	const addAmountTotal = inputAmountValue + inputAddValue;
	document.getElementById('first-add-amount').innerText = addAmountTotal;
	const totalBalance = balance - addAmountTotal;
	document.getElementById('balance').innerText = totalBalance;

	const modal = document.getElementById('my_modal_1');
	modal.showModal();

	const timeZone = new Date();
	const donatePlace = addPlaceFieldValueById('donate-place');
	const historyContainer = document.getElementById('history');
	historyContainer.innerHTML += `
	<div class="border w-10/12 mx-auto my-4 mt-8 p-4 rounder-lg text-xl">
		<p>Added: ${inputAmountValue} Taka is ${donatePlace}</p>
		<p>${timeZone}</p>
	</div>
	`;
});

// added and remove btn section
// history btn section
document.getElementById('history-add-btn').addEventListener('click', function () {
	btnFieldById('history');
	clickChangeColor('history-add-btn');
});
// donation btn section
document.getElementById('donation-add-btn').addEventListener('click', function () {
	btnFieldById('donation');
	clickChangeColor('donation-add-btn');
});



// home and blogs site
