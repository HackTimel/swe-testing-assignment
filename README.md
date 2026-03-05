# Quick-Calc

### Project Description
Quick-Calc is a lightweight web-based calculator designed for efficient mathematical operations. Developed using **JavaScript** and the **p5.js** library, it provides a user-friendly interface to perform basic arithmetic such as addition, subtraction, multiplication, and division.


### Setup Instructions
To run Quick-Calc locally, follow these steps:

1. **Clone the repository** to your local machine.
2. **Install dependencies**: Open your terminal in the project folder and run:

  $npm install

3. **Launch the application**: Open the index.html file in any modern web browser.

### Launch Tests

This project uses a dedicated test suite to ensure the accuracy of calculations. To execute the tests, run the following command:
  
  $npm test


### Testing Framework Research: Jest vs. Mocha

For this project, I researched two prominent JavaScript testing frameworks: Jest and Mocha.

Mocha is a highly flexible framework that has been a standard in the industry for years. Its modularity is its greatest strength, allowing developers to plug in their own assertion libraries (like Chai) or mocking tools. However, this flexibility requires more manual configuration, which can be time-consuming for smaller projects.

Jest, developed by Meta, is an "all-in-one" solution. It comes pre-packaged with an assertion library, a test runner, and mocking capabilities. Its "zero-config" philosophy makes it incredibly fast to set up. While it is a larger package than Mocha, the benefit of having everything work out of the box is a significant advantage for rapid development.

Final Choice: I chose Jest for Quick-Calc. Its simplicity and built-in features allowed me to meet the project's testing requirements efficiently, ensuring that a single command (npm test) handles the entire suite without extra configuration.
