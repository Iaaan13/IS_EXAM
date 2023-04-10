let meal = localStorage.getItem('meal') || "";
let snack = localStorage.getItem('snack') || "";
let fries = localStorage.getItem('fries') || "";
let drink = localStorage.getItem('drink') || "";
let upgradeSize = localStorage.getItem('upgradeSize') || "";
let upgrade = localStorage.getItem('upgrade') === "true";
let pie = localStorage.getItem('pie') === "true";
let sundae = localStorage.getItem('sundae') === "true";
let orderComplete = false;
let mealSelected = false;

function getBotResponse(input) {
  // menu
  if (input.toLowerCase() === "menu") {
    return "1.) Burger Meal\n2.) Pasta Meal\n3.) Chicken Meal\n4.) Soft drink or Iced Tea\n5.) Pie\n\nWhat would you like to order?";
  }

  // check for meal type
  if (
    input.toLowerCase() === "burger meal" ||
    input.toLowerCase() === "pasta meal" ||
    input.toLowerCase() === "chicken meal"
  ) {
    meal = input;
    mealSelected = true;
    if (
      input.toLowerCase() === "burger meal" ||
      input.toLowerCase() === "pasta meal"
    ) {
      snack = "";
      drink = "";
      return "Would you like fries or a sundae with your " + meal + "?";
    } else if (input.toLowerCase() === "chicken meal") {
      snack = "chicken";
      return "What drink would you like with your " + meal + "?";
    }
  }

  // check for snack type
  if (
    (input.toLowerCase() === "fries" || input.toLowerCase() === "sundae") &&
    mealSelected === true
  ) {
    if (
      (meal.toLowerCase() === "burger meal" || meal.toLowerCase() === "pasta meal") &&
      input.toLowerCase() === "fries"
    ) {
      snack = input;
      fries = snack;
      upgrade = true;
      return "Would you like to upgrade your fries to Medium or Large?";
    } else if (
      (meal.toLowerCase() === "burger meal" || meal.toLowerCase() === "pasta meal") &&
      input.toLowerCase() === "sundae"
    ) {
      snack = input;
      sundae = true;
      if (drink === "" || (drink !== "soft drink" && drink !== "iced tea")) {
        drink = "soft drink or iced tea";
        return "What drink would you like with your meal?";
      } else {
        pie = true;
        orderComplete = true;
        return "Your " + meal + " with " + fries + " and " + drink + " and a pie has been placed.";
      }
    } else if (
      meal.toLowerCase() === "chicken meal" &&
      input.toLowerCase() === "sundae"
    ) {
      snack = input;
      sundae = true;
      if (drink === "" || (drink !== "soft drink" && drink !== "iced tea")) {
        drink = "soft drink or iced tea";
        return "Do you want to upgrade your drink to Medium or Large?";
      } else {
        pie = true;
        orderComplete = true;
        return "Your " + meal + " with " + drink + " and a pie has been placed.";
      }
    } else {
      return "Sorry, that's not a valid snack option for your selected meal. Please select fries or sundae.";
    }
  }

  // check for drink type
  if (
    (input.toLowerCase() === "soft drink" || input.toLowerCase() === "iced tea") &&
   
mealSelected === true
) {
drink = input;
if (
(meal.toLowerCase() === "burger meal" || meal.toLowerCase() === "pasta meal") &&
snack === "fries"
) {
return "Do you want to upgrade your fries to Medium or Large?";
} else if (
(meal.toLowerCase() === "burger meal" || meal.toLowerCase() === "pasta meal") &&
snack === "sundae"
) {
pie = true;
orderComplete = true;
return "Your " + meal + " with " + fries + " and " + drink + " and a pie has been placed.";
} else if (meal.toLowerCase() === "chicken meal" && snack === "sundae") {
return "Do you want to upgrade your drink to Medium or Large?";
} else {
orderComplete = true;
return "Your " + meal + " with " + snack + " and " + drink + " has been placed.";
}
}

// check for fries upgrade
if (
(input.toLowerCase() === "medium" || input.toLowerCase() === "large") &&
mealSelected === true &&
snack === "fries"
) {
upgradeSize = input;
orderComplete = true;
return (
"Your " +
meal +
" with " +
upgradeSize +
" " +
snack +
" and " +
drink +
" has been placed."
);
}

// check for drink upgrade
if (
(input.toLowerCase() === "medium" || input.toLowerCase() === "large") &&
mealSelected === true &&
snack === "sundae" &&
drink !== "" &&
(drink.toLowerCase() === "soft drink" || drink.toLowerCase() === "iced tea")
) {
upgradeSize = input;
orderComplete = true;
return (
"Your " +
meal +
" with " +
snack +
" and " +
upgradeSize +
" " +
drink +
" has been placed."
);
}

// check for pie
if (input.toLowerCase() === "pie" && mealSelected === true) {
pie = true;
orderComplete = true;
return (
"Your " +
meal +
" with " +
snack +
" and " +
drink +
" and a pie has been placed."
);
}

// confirm order
if (input.toLowerCase() === "confirm order" && orderComplete === true) {
localStorage.setItem("meal", meal);
localStorage.setItem("snack", snack);
localStorage.setItem("fries", fries);
localStorage.setItem("drink", drink);
localStorage.setItem("upgradeSize", upgradeSize);
localStorage.setItem("upgrade", upgrade);
localStorage.setItem("sundae", sundae);
localStorage.setItem("pie", pie);
return "Your order has been confirmed!";
}

// clear order
if (input.toLowerCase() === "clear order") {
localStorage.clear();
meal = "";
snack = "";
fries = "";
drink = "";
upgradeSize = "";
upgrade = false;
sundae = false;
pie = false;
orderComplete = false;
mealSelected = false;
return "Your order has been cleared.";
}

// default response
return (
"I'm sorry, I didn't quite understand. You can order by saying 'menu', or select a meal, snack, and drink. When your order is complete, say 'confirm order'."
);
}