![Application UI](https://github.com/barbararcbf12/react-redux-video-library/blob/master/assets/Application-UI.png) 

# What is it?
Small video library where:
* Data is fetched from given API and load only the items with active key not false, bringing their thumbnail, title and description, and segmenting them by their category key.
* onClick at an item, it's title, description and video are loaded.
* The library can be searchable (or filtered in-place) by simple plain text entry and matching 'title', 'description' and 'tag'.

# Motivation
Coding assessment task.

# Technology used
* [React](https://facebook.github.io/react/) as the core infrastructure.
* [Redux](https://github.com/reactjs/redux) for state management.
* [Redux-saga](https://github.com/yelouafi/redux-saga) for handling async tasks with agility.

# Running the application
Clone this repository, navigate to its folder and run:
* 'npm install' to install the dependences
* 'npm start' to run the application at development server

## Credit
Special credit goes to Rowland Ekemezie, whose tutorial based the development of this video gallery and the improvement of my professional skills. [Tutorial](https://scotch.io/tutorials/build-a-media-library-with-react-redux-and-redux-saga-part-1)

