OneResponse - Management Coding Guidelines

## Installed Packages

- `create-react-app`
- `react-router-dom`
- `node-sass`
- `styled-components`

## VS Code Extensions

### Optional

- Babel Javascript
- Bracket Pair Colorizer 2
- Color Highlight
- ES7 React/Redux/GraphQL/React-Native snippets
- npm Intellisense
- Simple React Snippets
- styled-components-snippets

### Mandatory

- Error Lens
- npm
- Prettier - Code formatter
- Todo Tree

## Getting Started

To get started, follow the below steps:

1. Click on the 'Code' tab located towards the top right hand corner of the repository, and copy the HTTPS GitHub link

- ![gitexample](https://user-images.githubusercontent.com/56162066/94434346-8baa1f80-0191-11eb-8cef-1579faf9e7ca.png)

2. Open your chosen terminal and type: `git clone link`, but replace `link` with the copied HTTPS GitHub link from the above step
3. Next, `cd` (change directory), or open the newly cloned folder containing all of the relevant files from the cloned GitHub repository
4. Open your chosen terminal and type `npm install` to install all packages necessary
5. Again, in your chosen terminal type `npm start` to boot up a localhost server and run the application

## Coding Style Guide

1. Basic rules

### Basic Rules

When creating a component, follow the below structure with `Test` being used as an example:

#### Initial Naming Conventions

- Folder name: `Test`
- Component name: `Test.component.jsx`

#### Section Order

- Imports

  - `// Import: Dependencies`
  - `// Import: UI`
  - `// Import: subPages`
  - `// Import: pages`

- Component

  - `// [UI, subPage, or page]: Test`
  - `// Export: Test`

- Styled Components
  - `// Styled: TestContainer`
