// Membership Pricing Calculator
const subscription = 55;
const contributionUnder55 = 140;
const contributionOver55 = 280;
const contributionFamily = 420;

document
  .getElementById("numMembers")
  .addEventListener("input", calculateTotal);

document
  .getElementById("numOver55")
  .addEventListener("input", calculateTotal);

function calculateSubscription() {
  // Get the number of members from the input
  var numMembers = parseInt(document.getElementById("numMembers").value) || 0;
  // Calculate the total subscription cost
  var totalSubscription = numMembers * subscription;
  // Display the calculated subscription
  document.getElementById("subscription").innerText = "$" + totalSubscription;

  if (numMembers >= 9) {
    // Set the custom pricing message display property to "flex"
    document.getElementById("customPricing").style.display = "flex";
  } else {
    // Set the custom pricing message display property to "none"
    document.getElementById("customPricing").style.display = "none";
  }
}

function calculateContribution() {
  // Get the number of members from the input
  var numMembers = parseInt(document.getElementById("numMembers").value) || 0;
  var numOver55 = parseInt(document.getElementById("numOver55").value) || 0;
  
  if (numOver55 > numMembers) {
    document.getElementById("contribution").innerText = "$0";
    document.getElementById("errorMessage").innerText = "Whoops! The number of 55+ can't be greater than the total number of signups.";
    return;
  } else {
     document.getElementById("errorMessage").innerText = "";
  }

  var numUnder55 = numMembers - numOver55;
  var totalContribution = 0;

  // Calculate the total contribution based on the number of members and age groups
  if (numMembers <= 3) {
    totalContribution =
      numUnder55 * contributionUnder55 + numOver55 * contributionOver55;
  } else {
    totalContribution = contributionFamily;
  }

  document.getElementById("contribution").innerText = "$" + totalContribution;
}

function calculateTotal() {
  // Call the two functions and get their results
  calculateSubscription();
  calculateContribution();

  // Get the calculated values
  var subscription = parseFloat(
    document.getElementById("subscription").innerText.replace("$", "") || 0
  );
  var contribution = parseFloat(
    document.getElementById("contribution").innerText.replace("$", "") || 0
  );

  // Sum the results
  var total = subscription + contribution;

  // Update the total span element
  document.getElementById("total").innerText = "$" + total;
}
