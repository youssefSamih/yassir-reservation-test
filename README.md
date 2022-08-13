## Install

- `yarn`
- `yarn husky install`
- `yarn husky add .husky/pre-commit "yarn lint-staged"`

### Unclear requirement

Non functional requirements:

In filter date (past and future dates) as there is a lot of fields date in the json file

for business date whenever you select date in the input he will filter by showing from the date selected and the features date

for start and end fields i deal with like a range if the start date selected will show the selected and next dates

if the end date selected will show the selected and previous dates

if both of them added he will show the dates between them

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

Runs eslint with --fix flag

### `yarn format`

Runs prettier with --write flag
