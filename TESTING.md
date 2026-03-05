# Testing Strategy - Quick-Calc

## 1. Overall Approach
My strategy focused on separating the mathematical logic from the p5.js user interface. This allowed for robust **Unit Testing** of the calculation engine and **Integration Testing** of the workflow.

## 2. Lecture Concepts Applied

### The Testing Pyramid
My suite follows the Testing Pyramid proportions:
- **Unit Tests (80%):** The majority of tests cover individual operations and edge cases in the `Calcul()` function.
- **Integration Tests (20%):** Fewer tests that ensure the sequence of inputs leads to the correct final result.

### Black-box vs. White-box Testing
- **Unit Tests (White-box):** I wrote these knowing exactly how the `Calcul()` function uses `eval()` and string manipulation to handle errors like division by zero.
- **Integration Tests (Black-box):** I tested the user flow (Input -> Operator -> Input -> Result) without focusing on the internal code, simply verifying that the output matches expectations.

### Functional vs. Non-Functional Testing
- **Functional:** I tested all arithmetic requirements (addition, division by zero, etc.).
- **Non-Functional:** I intentionally did *not* test performance or security (e.g., how the calculator handles 1 million operations per second), as the priority was functional accuracy.

## 3. Test Results Summary
| Test Name        | Type | Status |
|------------------|------|--------|
| Addition         | Unit |  PASS  |
| Division by Zero | Unit |  PASS  |
| Substraction     | Unit |  PASS  |
| Multiplication   | Unit |  PASS  |
| Big numbers      | Unit |  PASS  |
| Decimal numbers  | Unit |  PASS  |
| Negative numbers | Unit |  PASS  |
| Equal function   | Inte |  PASS  |
| C function       | Inte |  PASS  |
