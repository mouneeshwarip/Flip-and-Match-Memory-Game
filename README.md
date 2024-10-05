# Flip and Match-Memory Challenge

Welcome to the Memory Card Game! This classic game is a fun and challenging way to test your memory skills. The objective of the game is simple: flip over pairs of cards to find matching pairs. The game is over when all pairs have been matched.

<h1 id="contents">Contents</h1>

- [Introduction](#introduction)
- [Key Project Goals](#key)-project-goals
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Fonts](#fonts)
    - [Color Scheme](#color-scheme)
    - [Features](#features)
    - [Future Features](#future-features)
- [Resubmission Notes](#resubmission-notes)    
- [Game Play](#game-play)
  - [How It Works](#how-it-works)
- [Testing](#testing)
  - [Validator Testing](#validator-testing)
  - [Manual Testing](#manual-testing)
  - [Fixed Bugs](#fixed-bugs)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
  - [Content](#content)
  - [Special Thanks](#special-thanks)

# Introduction  

Memory Card Game, also known as Concentration or Pairs, is a popular card game that dates back to the 19th century. It has been enjoyed by people of all ages for generations and continues to be a favorite pastime today.

Challenge yourself by trying to beat your best time.

![To get started with the memory challenge game, simply visit: https://mouneeshwarip.github.io/Flip-and-Match--Memory-Challenge/ ]
![Responsice Mockup](assets/images/responsive_img.png)

## Key Project Goals

Develop a user-friendly game interface that:  
- Stimulates and enhances memory skills through engaging gameplay and challenging puzzles.
- Ensures accessibility for players of all ages and skill levels.
- Provides progressively challenging levels to keep players engaged.
- Offers an aesthetically pleasing gaming environment with soothing colors, to avoid overstimulation.

## Player and User Stories

 ### As a Player, I want to:
  - Sharpen my memory by matching pairs of cards in a captivating adventure.
  - Flip cards to find matches and progress through levels.
  - Beat my best time and increase my score with every successful match.
  - Enjoy smooth navigation and seamless gameplay for uninterrupted fun.
 ### As a website creator, I want to:
  - Design a responsive layout with attractive buttons to engage users effectively.
  - Implement game logic to handle user input and successfully match pairs of cards.
  - Optimize performance to ensure smooth gameplay and minimal lag for an enjoyable experience.
 ### As a business owner, I want to:
   - Offer appealing and engaging features to attract and retain users, fostering loyalty and long-term engagement.
   - Monetize the platform through various services, including in-between ads, app purchases, and premium subscriptions, 
     maximizing revenue potential.
   - Provide exceptional customer support to address feedback and resolve any technical issues promptly, ensuring a positive user 
     experience.
   - Strategically promote the brand to increase visibility and reach, driving user acquisition and brand recognition.

## Design 

 ### Fonts
    - The font utilized for headers, body text and buttons is Times New Roman.
 
 ### Color Scheme 

  - The colors used for the environment vary betweem green, black, whitesmoke.
  - The text color is whitesmoke with black background.
  - The background colors of buttons consist of black, transitioning to light green when hovered over.

   ![color_palette](assets/images/colorpalette.png)

   ## Features 

This website includes various features that enhance its usability and promote a friendly user experience to help you navigate through it.

### Existing Features

### Game screen  

  - The Game screen includes buttons to start the game and the instructions.

    ![Gameboard](assets/images/gamescreen.png)

  - When the "Start Game" button is clicked, the game board along with score and timer controls appear, allowing players to 
    interact with clickable cards. Additionally, two more buttons, "How to Play?" and "End Game", will be available for players to access instructions and end the game respectively.
   
    ![Gamestarts](assets/images/gamestarted.png)
    
 - __Play again button__
   - When the user matches all pairs, ends the game prematurely, or when the time runs out, the "Play Again" button will appear, allowing players to restart the game.

   ![Playagain_button](assets/images/playagain.png)
## Resubmission Notes

   - My original deadline was 05.10.2024, but I faced several challenges, including deployment issues and technical difficulties. I requested an extension, but unfortunately, I received delayed responses.

   - Despite these setbacks, I continued working diligently on my project. I have addressed the areas mentioned in the assessment feedback, made frequent commits with detailed messages, and even resolved some issues that were previously unfixed.

   - As a mother and a working professional, I have had to manage multiple responsibilities, which impacted my ability to meet the original deadline. I kindly request that you consider my circumstances and grant an assessment of my project. I have worked hard to ensure all feedback has been implemented and resolved.

   - Thank you for your understanding and consideration.

## Game Play

- __How it works__
    
  - When the "Start Game" button is clicked, players are permitted to flip two cards. If the two flipped cards match, the score   will be updated; otherwise, the cards will flip back. The game will conclude when the user matches all the cards within the given time limit. The cards feature images of football players, providing a challenge to the users' memory skills.

- ### Features that can be implemented in the future
  - Implement tracking for the number of moves made by the player and the number of players participating in the game.
  - Introduce different difficulty levels to cater to players of varying skill levels, such as easy, medium, and hard modes.
  - User can create a username and track their score.

# Testing 

## Validator Testing

### HTML Validator

No Errors were returned when passing through W3C Markup Validator 
* [W3C Markup Validator](https://validator.w3.org/#validate_by_input)-  ![Website Result](assets/images/html_validator.png)

### CSS Validator

No Errors were returned when passing through W3C CSS Validator 
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)-  ![Website Result](assets/images/css_validator.png)

### JavaScript Validator

No Errors were returned when passing through  [Jshint](https://jshint.com/).
-  script.js

* ![Website Result](assets/images/jshint.png)

Google Lighthouse was used to test Performance, Best Practices, Accessibility and SEO on both Desktop and Mobile devices.
- [Website Result] !(assets/images/lighthouse_perf.png)

The testing was done using the Google Chrome Browser. Chrome Developer Tools was used extensively, particularly to check responsiveness on different screen sizes. Testing was also done using Firefox on desktop, and again on Google Chrome.
* Responsive on all device sizes.

## Manual Testing

All the points features mentioned below were tested manually.

- All buttons function correctly, redirect user as intended.
- Timer works properly and Best time is updated when expected.
- Highest win streaks for different levels are upgraded when expected.
- All game modes function as expected.

## Unfixed Bugs

- I couldn't remove the 'timer' text when the game ended prematurely or when the user finished the game before the time was up. Debugging and fixing this issue will be a priority for future updates.

## Fixed Bugs

- I dedicated significant effort to resolving a critical bug wherein, upon game initiation, cards could be clicked multiple times, resulting in erroneous score updates. To rectify this issue, I removed the event listener for card clicks outside of the main function and reinstated it only when the cards were flipped back.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
## Credits 

### Code

* [W3Schools](https://www.w3schools.com/).

* [Stack Overflow](https://stackoverflow.com/).

* Some Youtube videos

### Icons

 - Favicon folder of various sizes was created via [Favicon generator](https://www.favicon-generator.org/).

### Media

 - Images as the card Values and the background image are downloaded from Google.
 - [ui.dev](https://ui.dev/amiresponsive) was used to get a responsive image for README.

### Content

 - I, the author, have written all the content on the website.

## Special Thanks

