# Raise! - A Mastermind Game Clone

Raise! is a fun and challenging game, inspired by the classic code-breaking game, Mastermind. This web app was built during my application process for the UI Engineer cohort of the REACH program at LinkedIn.

The goal of the game is for users to discover the correct sequence of numbers in the fewest tries possible. The secret code includes numbers from 0 to 7 and it can include repeats.

The player, who is the code-breaker, will have up to 10 attempts to try different sequences of numbers and compare them with the secret code. The app provides feedback that aims to help players use their logical thinking to uncover the secret code.

It has a home page with two buttons: one for instructions and one to start the game.

The second page is the game page, where users will use the up and down buttons to select their answers.

![Raise app](https://user-images.githubusercontent.com/69801600/213645990-dc1569db-ad42-4a7b-bcb5-cb94745c64ae.png)

## The App's Users

This app was built for users, like my mom, who play games on their mobile devices to keep their minds sharp and be entertained.

The original design of the Mastermind game and the common UI were simplified to facilitate the user experience and understanding of the game's rules.

## Installation

To install the dependencies for this project, run the following command:
npm install

## Usage

To start the development server, run the following command:
npm start
This will start a local development server at http://localhost:3000.

To build a production version of the code, run the following command:
npm run build

## Technologies Used

This project is built using React.js and makes use of the following technologies:

- javascript
- axios
- react
- react-dom
- react-router-dom
- semantic-ui-react
- random number generator API

## The Process

These were the steps followed during the process of creating this Web App:

1.- Understand the game and its users, review existing products on the market
2.- Describe a "persona" who might be the game's user and the desired UX
3.- List user stories and possible features, prioritize them
4.- Evaluate happy path and edge cases
5.- Develop alternatives for a low-fidelity UI on paper
6.- Select the tech stack
7.- Build the project structure
8.- Start coding
9.- Test the app with users and gather feedback
10.- Reevaluate the UI based on feedback and update code

## Code Structure

![Code](https://user-images.githubusercontent.com/69801600/213649149-3a4e809f-5e3c-42d6-9c86-f874fed7e46a.png)

## Extensions Attempted or Implemented

In addition to the project instructions, I was able to implement user-selected difficulty levels. I was halfway through implementing modals to inform users of the end of the game.
