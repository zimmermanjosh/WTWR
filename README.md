# WTWR (What to Wear?)

## Getting Started

This project is part II of the WTWR project. This has been converted from Create-React-App to Vite.
Additionally, this project has been intgrated with NVM, eslint and some testing tools.

## About the project

In this sprint, you'll continue working on the “WTWR” web application. Your goal for this iteration is to continue implementing functionality using the React features you've just learned. You will implement the following:

- A temperature unit toggle switch using React context

- A profile page route using React Router

- Form submission using controlled components or refs

- You'll also set up a mock server and write some code to make API calls to it. This mock server will mimic the behavior of the backend that you'll start building in Sprint 12.

## Links

- [Figma Design](https://www.figma.com/file/DTojSwldenF9UPKQZd6RRb/Sprint-10%3A-WTWR)

## Component Structure

The project includes a components directory with the following components:

```

├── README.md
├── dist
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.jsxon
│ ├── robots.txt
│ └── vite.svg
├── index.css
├── index.html
── package-lock.jsxon
├── package.jsxon
├── public
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.jsxon
│ ├── robots.txt
│ └── vite.svg
├── reportWebVitals.jsx
├── se_project_react.code-workspace
├── setupTests.jsx
├── src
│ ├── components
│ ├── images
│ ├── index.css
│ ├── index.jsx
│ ├── reportWebVitals.jsx
│ ├── setupTests.jsx
│ ├── utils
│ └── vendor
└── vite.config.jsx
```

## Software Installation and Run React App

### Install nvm plugin

- nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash`

### Add Reference to terminal - add to bashrc, zshrc etc:

open a terminal and copy below and paste the following

```
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

open a new terminal || type `source ~/.bashrc || ~/.zshrc .. etc`

### Install npm with nvm plugin

- open a new terminal

- type : `nvm install npm`

### Have nvm install correct version of node

- type : `cd <root directory> && nvm use`

check installed nvm version

- type : `nvm -ls`

### If nvm version not installed

- type : `nvm install <node version>`

then

- type : `nvm use`

### Install project packages

- type : `npm i || npm install`

## Run Commands

`npm run prebuild` - Cleans dependencies, reinstalls dependencies, builds project

`npm run build` - Build Production (Vite + React)

`npm run clean` - Removes build artifacts '/node_modules' && '/dist'

`npm run start` - starts Vite && App Interface

`npm run preview`- Build Preview (Vite + React) - Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser
