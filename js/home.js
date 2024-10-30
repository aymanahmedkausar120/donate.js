

// Flood at Noakhali amount
document.getElementById('flood-donate-btn').addEventListener('click', function () {

	const floodInputAmount = getInputFieldValueById('first-input-amount');
	const addAmount = getTextFieldValueById('first-add-amount');
	const balance = getTextFieldValueById('balance');



	if (isNaN(floodInputAmount) || floodInputAmount <= 0) {
		alert('Invalid amount.Please try again')
		return;
	}
	if (floodInputAmount > balance) {
		alert('Not valid amount')
		return;
	}

	const addTotalAmount = floodInputAmount + addAmount;
	document.getElementById('first-add-amount').innerText = addTotalAmount;

	const newBalance = balance - floodInputAmount;
	document.getElementById('balance').innerText = newBalance;

	const modal = document.getElementById('my_modal_1');
	modal.showModal();

	// history btn

	const historyContainer = document.getElementById('history');
	const donatePlace = getStringFieldValueById('donate-place');
	const dateTime = new Date();
	historyContainer.innerHTML += `
  <div class="border w-10/12 rounded-lg p-4 mx-auto mt-4 space-y-3">
    <p>Added: ${floodInputAmount} Taka is ${donatePlace}</p>
    <p>${dateTime}</p>
  </div>
`
});

document.getElementById('relief-donate-btn').addEventListener('click', function () {

	const reliefInputAmount = getInputFieldValueById('second-input-btn');
	const addAmount2 = getTextFieldValueById('second-add-amount');
	const balance = getTextFieldValueById('balance');



	if (isNaN(reliefInputAmount) || reliefInputAmount <= 0) {
		alert('Invalid amount.Please try again')
		return;
	}
	if (reliefInputAmount > balance) {
		alert('Not valid amount')
		return;
	}

	const addTotalAmount = reliefInputAmount + addAmount2;
	document.getElementById('second-add-amount').innerText = addTotalAmount;

	const newBalance = balance - reliefInputAmount;
	document.getElementById('balance').innerText = newBalance;

	const modal = document.getElementById('my_modal_2');
	modal.showModal();

	// history btn

	const historyContainer = document.getElementById('history');
	const donatePlace2 = getStringFieldValueById('relief-place');
	const dateTime = new Date();
	historyContainer.innerHTML += `
  <div class="border w-10/12 rounded-lg p-4 mx-auto mt-4 space-y-3">
    <p>Added: ${reliefInputAmount} Taka is ${donatePlace2}</p>
    <p>${dateTime}</p>
  </div>
`
});


document.getElementById('Injured-donate-btn').addEventListener('click', function () {

	const injuredInputAmount = getInputFieldValueById('third-input-btn');
	const addAmount3 = getTextFieldValueById('third-input-amount');
	const balance = getTextFieldValueById('balance');



	if (isNaN(injuredInputAmount) || injuredInputAmount <= 0) {
		alert('Invalid amount.Please try again')
		return;
	}
	if (injuredInputAmount > balance) {
		alert('Not valid amount')
		return;
	}

	const addTotalAmount = injuredInputAmount + addAmount3;
	document.getElementById('third-input-amount').innerText = addTotalAmount;

	const newBalance = balance - injuredInputAmount;
	document.getElementById('balance').innerText = newBalance;

	const modal = document.getElementById('my_modal_3');
	modal.showModal();

	// history btn

	const historyContainer = document.getElementById('history');
	const donatePlace3 = getStringFieldValueById('injured-place');
	const dateTime = new Date();
	historyContainer.innerHTML += `
  <div class="border w-10/12 rounded-lg p-4 mx-auto mt-4 space-y-3">
    <p>Added: ${injuredInputAmount} Taka is ${donatePlace3}</p>
    <p>${dateTime}</p>
  </div>
`
});



// history btn

document.getElementById('history-add-btn').addEventListener('click', function () {
	addBtnFieldById('history');
	addColorFieldById('history-add-btn');
});
document.getElementById('donation-add-btn').addEventListener('click', function () {
	addBtnFieldById('donation');
	addColorFieldById('donation-add-btn');
});



