# React-Tic-Tac-Toe
Remake of the tic-tac-toe game by the Odin project curriculum using React to build the front-end and ES6 classes to build the OOP logic. The old project can be seen here [tic-tac-toe](https://alexerdei73.github.io/tic-tac-toe) and here the [old code](https://github.com/alexerdei73/tic-tac-toe). Although the
original plan was to rewrite the OOP syntax with ES6 classes, but so high code reuse was possible, that I kept the original code with all of its flaws
and with module pattern and factory function OOP syntax.

## What I have learned from this project
- I practiced how React can be used in an OOP project to provide the UI. It has been done in my Battleship project, so it was actually only practice.
The new aspect was how an old OOP project could be rewritten as the Battleship was disigned originally with a React UI. React has nicely taken over 
the role of those objects, which were responsible for the DOM manipulations. The gameControl module has become the React App component. It contains
mainly all the functions from the old gameControl module in the same or slightly rewritten form.
- I built the UI without a styling framework, I only used vanilla CSS to practice.
- I built my own simple modal component, which is used as a MessageDlg and a FormDlg component. 
- This is my first component, which has JSX as child content. This JSX is accessed from the props with the props.children prop.

## Further plans to improve the project
- I plan to improve the UI. A minor animation on the gameboard would be nice. Also a responsively positioned buttons element would be great.
- I also plan to make the extended mode button work. It's going to be a two player tic-tac-toe version, with 10 cells by 10 cells board and 5 cells in a line 
winner.
- After all this I plan to make this a multiplayer game with an AWS Amplify back-end and an online high score page.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
