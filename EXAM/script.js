const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const meal = document.querySelector('#meal').value;
  const snack = document.querySelector('#snack').value;
  const drink = document.querySelector('#drink').value;

  if (meal === 'burger' || meal === 'pasta') {
    if (snack === 'fries') {
      // Suggest adding a sundae
      console.log('Would you like to add a sundae to your order?');
    } else if (snack === 'sundae') {
      // Verify accompanying snack
      console.log('Your order includes a sundae as your accompanying snack.');
    }

    if (drink === 'soft drink' || drink === 'iced tea') {
      // Suggest upgrading the drink
      console.log('Would you like to upgrade your drink to medium or large?');
    }
  } else if (meal === 'chicken') {
    // Suggest upgrading the drink
    console.log('Would you like to upgrade your drink to medium or large?');

    if (snack === 'sundae') {
      // Suggest adding a sundae
      console.log('Would you like to add a sundae to your order?');
    }
  }

  // Check if order is complete
  if (meal && snack && drink) {
    console.log('Your order is complete.');

    // Suggest adding a pie
    console.log('Would you like to add a pie to your order?');

    // Inquire about other orders
    console.log('Do you have any other orders you would like to add?');
  } else {
    console.log('Please make sure you have selected a meal, snack, and drink.');
  }

  // Summarize the order
  console.log(`Your order includes a ${meal} meal with ${snack} as the accompanying snack and ${drink} as the drink.`);
});
