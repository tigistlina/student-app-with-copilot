# Student App with Copilot

Based on the Unit 3 [Student App](https://github.com/AdaGold/student-app), this version has been modified to provide an example of how to use GitHub Copilot to generate and refactor code and tests.

The [main](https://github.com/Ada-C21/student-app-with-copliot/tree/main) branch is the starting point for the Copilot example. The [Copilot](https://github.com/Ada-C21/student-app-with-copliot/tree/Copilot) branch contains the results of running through the implementation of the Student component, some refactors, and tests using Copilot.

The major steps in the process are:
- use a Copilot prompt to generate code for the Student component
- use Copilot prompts to address issues with the generated code, such as
  - add missing imports
  - name variables appropriately
  - include proptypes
  - use good practices to apply style to the component
  - etc
- refactor StudentList using Copilot
  - call the new Student component
  - use prop destructuring
  - perform the data map inline in the JSX
  - etc
- use Copilot to write tests for the application
  - adding a student
  - changing the absence status of a student
  - etc

## Setup

Install dependencies

```sh
npm i
```

## Execute

```sh
npm run dev
```

## Run tests

```sh
npm test
```

## Run code coverage

```sh
npm run coverage
```
