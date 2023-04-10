const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const meal = document.querySelector('#meal').value;
  const snack = document.querySelector('#snack').value;
  const drink = document.querySelector('#drink').value;

  if (meal === 'burger' || meal === 'pasta') {
    if (snack === 'fries') {
      // Suggest adding a sundae
      if (confirm('Would you like to add a sundae to your order?')) {
        alert('Sundae added to your order.');
      }
    } else if (snack === 'sundae') {
      // Verify accompanying snack
      alert('Your order includes a sundae as your accompanying snack.');
    }

    if (drink === 'soft drink' || drink === 'iced tea') {
      // Suggest upgrading the drink
      if (confirm('Would you like to upgrade your drink to medium or large?')) {
        alert('Drink upgraded to medium or large.');
      }
    }
  } else if (meal === 'chicken') {
    // Suggest upgrading the drink
    if (confirm('Would you like to upgrade your drink to medium or large?')) {
      alert('Drink upgraded to medium or large.');
    }

    if (snack === 'sundae') {
      // Suggest adding a sundae
      if (confirm('Would you like to add a sundae to your order?')) {
        alert('Sundae added to your order.');
      }
    }
  }

  // Check if order is complete
  if (meal && snack && drink) {
    alert('Your order is complete.');

    // Suggest adding a pie
    if (confirm('Would you like to add a pie to your order?')) {
      alert('Pie added to your order.');
    }

    // Inquire about other orders
    if (confirm('Do you have any other orders you would like to add?')) {
      alert('Please proceed to the counter to place your order.');
    }
  } else {
    alert('Please make sure you have selected a meal, snack, and drink.');
  }

  // Summarize the order
  alert(`Your order includes a ${meal} meal with ${snack} as the accompanying snack and ${drink} as the drink.`);
});
