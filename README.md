

```markdown
# Cypress Project

This project is created using Cypress with JavaScript.

## Project Details

- **Cypress Version**: 13.13.1
- **Node JS  Version**: 20.16

## Getting Started

## Dependencies

All dependencies required to run the project are listed in the `package.json` file. Make sure to install them by running:

```sh
npm install
```

### Running the Project

To run the project, you can use the following commands:

npx cypress open
or 
npm test. It opens the cypress runner Ui and you can select the specs to run.


## Project Structure

- cypress/e2e/*.spec.js: Contains the actual spec files that run when executing Cypress tests.
- cypress/fixtures/*.json: Contains the test data files needed for the spec files.
- **support Folder**: 
  - cypress/pageObjects/*.js: Contains separate files for each page, where all the pages displayed are maintained.
  - cypress/support/commands.js: Contains all the reusable code for UI and API tests.
- cypress/cypress.config.js: Contains the environment variables needed to run the tests.
- cypress/package.json: Contains the dependencies for running the project.

## Additional Information
Regarding the task, the ui task is automated in cypress/e2e/ui_task.cy.js and the api task is automated in cypress/e2e/api_task.cy.js

For more detailed documentation, visit the [Cypress Documentation](https://docs.cypress.io).

---

Happy Testing!
```
