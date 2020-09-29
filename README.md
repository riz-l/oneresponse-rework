# OneResponse - Management Coding Guidelines

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

![gitexample](https://user-images.githubusercontent.com/56162066/94434346-8baa1f80-0191-11eb-8cef-1579faf9e7ca.png)

2. Open your chosen terminal and type: `git clone link`, but replace `link` with the copied HTTPS GitHub link from the above step

3. Next, `cd` (change directory), or open the newly cloned folder containing all of the relevant files from the cloned GitHub repository

4. Open your chosen terminal and type `npm install` to install all packages necessary

5. Again, in your chosen terminal type `npm start` to boot up a localhost server and run the application

## Coding Style Guide

1. [Component Stucture](#component-structure)
2. [Styling](#styling)
3. [Commenting](#commenting)

### Component Structure

When creating a component, follow the below structure with `Test` being used as an example:

#### Folder/File Structure

When creating a file, ensure that it is placed into a correct hierarchy. This should follow the structure of any relevant parent folders, the item folder, and finally the item file name.

For example,

```
├── components
    ├── UI
        └── Test
            └── Test.component.jsx
            └── Test.styles.scss
```

- Folder name: `Test`
- Component file name: `Test.component.jsx`
- `SCSS` file name: `Test.styles.scss`

#### Section Order

- Imports

  - `// Import: Dependencies`
  - `// Import: Assets`
  - `// Import: UI`
  - `// Import: subPages`
  - `// Import: pages`

- Component

  - `// [UI, subPage, or page]: Test`
  - `// Export: Test`

- Styled Components
  - `// Styled: TestContainer`

#### Example

```
// Import: Dependencies
import React from "react";
import styled from "styled-components";

// UI: Test
function Test() {
  return(
    <TestContainer>
      <h1>Hello, world!</h1>
    </TestContainer>
  );
}

// Export: Test
export default Test;

// Styled: TestContainer
const TestContainer = styled.div`
  ... styling
`;
```

### Styling

#### Alphabetical Order

When styling in `SCSS` and/or with `styled-components`, keep all styling properties in alphabetical order.

`TestContainer` will be used as a `styled-components` example:

```
// Styled: TestContainer
const TestContainer = styled.div`
  align-items: center;
  background: red;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;
```

#### BEM (Block, Element, Modifier)

When naming components, `styled-components` or `SCSS` classes, follow the BEM methodology.

##### Block

A **Block** is a standalone entity that is meaningful on its own.

For example, a `Header`, `Container` or `Menu` component can be viewed as a **Block**.

##### Element

An **Element** is part of a **Block** that has no standalone meaning, and is semantically tied to its **Block**.

For example, a `HeaderTitle`, `ContainerItem` or `MenuItem` can be viewed as an **Element**.

##### Modifier

A **Modifier** is a flag on a **Block** or **Element**. These are used to change the apperance or behaviour of their relative **Block** or **Element**.

For example, `HeaderTitleDisable`, `ContainerItemSmall` or `MenuItemFixed` can be viewed as **Modifiers**.

### Commenting

Commenting is an important part of keeping each file easily understandable and well structured.

1. Comment each relevant section

e.g. `// Import: Dependencies` as seen in the above Component Structure section.

2. If you are using `useState`, add the comment `// State = nameOfState` above the list of state variables in use. For example:

```
// State = randomData, preciseData
const [randomData, setRandomData] = useState([]); // Random Data
const [preciseData, setPreciseData] = useState([]); // Precise Data
```

2.1. If you are using lots of different state variables, add a comment alongside each state item to clarify each state item's use. For example:

```
// State
const [randomData, setRandomData] = useState([]); // Random Data
const [preciseData, setPreciseData] = useState([]); // Precise Data
const [defaultData, setDefaultData] = useState([]); // Default Data
const [difficultData, setDifficultData] = useState([]); // Difficult Data
const [easyData, setEasyData] = useState([]); // Easy Data
```
