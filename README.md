-This project has to be done in HTML, CSS and Javascript.
<img src="Screenshot1.png" width="400px">
<img src="Screenshot2.png" width="400px">
<img src="Screenshot3.png" width="400px">
<img src="Screenshot4.png" width="400px">
<img src="Screenshot5.png" width="400px">
<img src="Screenshot6.png" width="400px">
<img src="Screenshot7.png" width="400px">
<img src="Screenshot8.png" width="400px">
-  The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
- No restriction user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.
