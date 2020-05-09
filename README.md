Initial Wireframe

Here's an image of my initial wireframe: https://imgur.com/C3RXpKT

Technologies Used
The page is HTML linked to a separate CSS stylesheet. The stylesheet uses SASS and Bootstrap. All game logic is coded with Javascript. The game engine communicates with the Game and User Authorization APIs using AJAX calls, and makes changes to the DOM using jQuery. Code was written in the Atom text editor and tested in Chrome.

Document your planning and tell a story about your development process and problem-solving strategy.

Planning
My planning in this project started initialy on two fronts, one technical and the other conceptual. After working through and understanding the scope of the project, I laid out the distinct components of the HTML, SCSS, and JS files in pseudo code so that I could survey my inital set of problems to consider. From that point I tried to break down the steps involved in as tangible a manner as possible. Often, my instincs would point me to some of the more overwhelming aspects of the game engine but I did my best to keep things simple.

Developing the Game

I wanted to first spend time making the board work work well, as this was the primary component of the project. Intially I gave each part of board an individual ID and from that point I tested rules in my app.js file to efficiently affect each space, but after some success I noticed the code becoming long and cumbersome.

Breakthrough on the gameBoard

Instead of targetting each specific piece on the game board using the ID tag, I targetted the '.box' class as a whole and worked to ensure that each click was correctly registered in the apporpriate space. This also proved helpful in creating an effective gameBoard function that identies the appropriate indice that the game move fits into.

List unsolved problems which would be fixed in future iterations.

Updates and Fixes for Version 2
My goals for version two would be to create more gameplay modes (verse computer and verse another player). Right now games are able to be played by two players but there is no way of picking which player is which, users must accept player 1 as x and player 2 as o. I’d like to add a field to ask a user their name so that in the future their token would automatically refer to that user by their name. I’d also like to improve the styling and add pieces of the parquet floor at the Boston Garden.

User Stories
Story 1: As a game enthusiast, I need a game app to work as expected for an enjoyable experience.

When the gamer plays tic-tac-toe the game must play by the correct rules. Thus, we have requirement criteria essential for the gamer:
Render a game board in the browser.
Switch turns between X and O (or whichever markers you select). Tip: Assume player X is the first player to start the game.
Visually display which side won if a player gets three in a row or show a draw if neither wins.
Support playing multiple games, one at a time.
Visually display the results of retrieving game statistics, such as total games won by a user. (READ)
 Give feedback to the user after each action.
Story 2: As a novice web user, I want a game that's easy to operate within.

When the novice web user attempts to sign in and then use the game, the experience must be structured, contained, and simple. Thus, we have the following essential criteria for the novice web user:
Be a single-page application, no browser refresh.
Signup and Signin must only be available to users who have not yet signed in.
Logout and Change password must only be available to signed in users.
Give feedback to the user after each action's success or failure.
All forms must clear after submit success or failure
Story 4: As a web security specialist, I want to know my data is stored safely.

My concerns are around the way my data is being stored in the sign-in authorization and after each game is played. Thus, the tic-tac-toe app will include:
Signup with email, password, and password confirmation.
 Login with email and password.
 Logout when logged in.
 Change password with current and new password.
 Signup and Signin must only be available to not signed in users.
 Logout and Change password must only be available to signed in users.
 Give feedback to the user after each action's success or failure.
 All forms must clear after submit success or failure
Story 4: As an experienced web developer, I want to make sure my game uses efficient code.

When the web developer uses the engine of the app and potentially inspects the code or included documentation, the structure of the page should hold up to best practices. Thus, we provide the following:
Complete information on GitHub
List technologies used
Document your planning and tell a story about your development process and problem-solving strategy.
List unsolved problems which would be fixed in future iterations.
Link to wireframes and user stories.
Use a custom game engine written by you.
Use jQuery for DOM manipulation and event handling.
Use AJAX for interacting with a provided API.
