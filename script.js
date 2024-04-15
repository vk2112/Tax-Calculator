document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("taxForm");
  const modal = document.getElementById("modal");
  const resultDiv = document.getElementById("result");
  const inputFields = document.querySelectorAll('input[type="text"]');
  const ageDropdown = document.getElementById("age");

  // Show model on form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    calculateTax();
  });

  // Close model when the close button is clocked
  document.querySelector(".close").addEventListener("click", function () {
    modal.style.display = "none";
  });

  //Close modal when user clicks anywhere outside the modal
  window.addEventListener("click", function (event) {
    if ((event.target = modal)) {
      modal.style.display = "none";
    }
  });

  // Function to calculate tax and show modal
  function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    const extraIncome = parseFloat(
      document.getElementById("extraIncome").value
    );
    const age = document.getElementById("age").value;
    const deductions = parseFloat(document.getElementById("deductions").value);
    const totalIncome = income + extraIncome - deductions;
    console.log(income, extraIncome, age, deductions, totalIncome);
    let overallIncome = 0;

    if (totalIncome > 800000) {
      console.log("cheking if");
      switch (age) {
        case "<40":
          console.log("getting age");
          overallIncome = totalIncome - 0.3 * (totalIncome - 800000);
          break;
        case ">=40&<60":
          overallIncome = 0.4 * (totalIncome - 800000);
          break;
        case ">=60":
          overallIncome = 0.1 * (totalIncome - 800000);
          break;
        default:
          // Show error if age is not selected
          showError("age", "Input field is mandatory");
          console.log(error);
          return;
      }
    } else {
      overallIncome = totalIncome;
    }

    //Show result in modal
    resultDiv.innerHTML = `${overallIncome}`;
    modal.style.display = "block";
  }

  var inputs = document.querySelectorAll('input[type="text"]');

  // Add input event listener to each input element
  const errorIconsElements = document.querySelectorAll(".error-icon");
  inputs.forEach((input, index) => {
    input.addEventListener("input", function (event) {
      var userInput = event.target.value;

      // Check if the user input is not a number
      if (isNaN(userInput)) {
        errorIconsElements[index].classList.add("show");
      } else {
        errorIconsElements[index].classList.remove("show");
      }
    });
  });
  document.getElementById("taxForm").addEventListener("submit", function(event) {
    const selectField = document.getElementById("age");
    const errorIcon  = document.getElementById("ageError");
  console.log('working');
    // Check if the select field has a value selected
    if (selectField.value === "") {
      errorIcon.classList.add('show');
      event.preventDefault();
    } 
  });
  
  // Add event listener to hide the error icon when the select field value changes
  document.getElementById("age").addEventListener("change", function() {
    const errorIcon  = document.getElementById("ageError");
    errorIcon.classList.remove('show');
  });
});
