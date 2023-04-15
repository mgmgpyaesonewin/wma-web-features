# wma-web-features

This is a React project with additional dependencies for linting, formatting, and styling. It includes prop-types, react, react-dom, and react-router-dom as dependencies, and various development dependencies including eslint, prettier, and tailwindcss.

## Installation

To install this project, you will need to have Node.js and npm (or yarn) installed on your machine.

1. Clone the repository to your local machine using `git clone <repository-url>`.
2. Navigate to the project directory and run `npm install` or `yarn install` to install all dependencies.

## Usage

### Development

To start the development server, run the following command:

```sh
npm run dev
```

This will start the server and open the project in your default browser. Any changes you make to the source code will be automatically reloaded in the browser.

### Build

To create a production build of the project, run the following command:

```sh
npm run build
```

This will create a production build of the project in the `dist/` directory.

### Preview

To preview the production build locally, run the following command:

```sh
npm run preview
```

This will create a production build of the project and serve it locally, allowing you to preview the build in your browser.

### Linting

To check for linting errors in your code, run the following command:

```sh
npm run lint:check
```

This will run ESLint and report any linting errors found in your code.

To automatically fix linting errors, run the following command:

```sh
npm run lint:fix
```

This will run ESLint and attempt to automatically fix any linting errors found in your code.

### Formatting

To check for formatting errors in your code using Prettier, run the following command:

```sh
npm run prettier:check
```

This will check your code for formatting errors using Prettier.

To automatically fix formatting errors, run the following command:

```sh
npm run prettier:fix
```

This will use Prettier to automatically fix any formatting errors found in your code.

### To Do

- [ ] Write a setup guide
