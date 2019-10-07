# Group Project

#### 🐕🐩 Build a dog breed memorization game. 🐕🐩

You'll be using a free public API called [Dog API](https://dog.ceo/dog-api/documentation/).

The webapp must be built using React and Redux. 

# 🎯 Learning goals 🎯 

#### 1. Practicing React, Redux & React-Router:

**note**: While you can use setState to store state in components we strongly advise you to use Redux for state management from the start to practice making actions & reducers. Though small apps do not always *need* Redux it is important *all team members* practice using Redux.

#### 2. Collaboration using git:

- Make use of master / development & feature branches with good names
- Use good commit messages
- Use pull request and review each others' work.

 
#### 3. Project management using Trello & Scrum:

- Split tasks into small pieces and keep track of them using trello. Also keep track of who is doing what. This way everyone knows what to do next.
- Start making a habit of doing a daily standup and sharing things you're working on and things that block you.
- If there are any blockers, go find the project hotline teacher so we can help you.

#### 4. Incremental and Iterative development:

- Set up automatic deployments using netlify at the start of development. 
- Have a working version on master at all times.
- Merge working features into your app one by one instead of deploying once at the end of the project.


#### 🔍 Assessment: 🔍

Because this project is for you to practice and learn from, and learning involves making mistakes, this project is not a formal assessment. At the end of the project we will be peer reviewing each others' projects according to the learning goals. 


# 📋 Features 📋

1. The app should have a dog list page where it lists all the breeds, so the user can memorise the names of all the breeds.
2. When you click one of the breeds on the doglist page you should go to a page that shows 10 pictures of that breed. So the user can see what a breed looks like.
3. The app contains a game which must show the user a random picture of a dog and it must ask the user to choose the correct breed name from a list of 3 options. 
4. When a user makes the correct choice, they proceed to the next question.
5. If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.
6. The game must keep track of the user's performance and display a success rate (in percentages) on the page.
7. The app contains a second game where the user will get a different question type. This game must show the user the name of a breed and 3 images of dogs. The user must select the correct image that matches the breed name.
8. The app contains a third game that alternates the combines the 2 other games: sometimes it shows a picture and 3 breednames and sometimes it shows a breedname and 3 pictures. (a mix of features 3 & 7)
9. The user should also be able to use the keyboard to select their answer for quicker gameplay.
10. If a user sees a breed for the first time, the game should give them an easy hint so they can learn the right answer.
11. The game starts off with only 3 breeds and should gradually increase in difficulty. When the user has a streak of 5 correct answers, the game will add another 3 breeds into the mix, and so on.
12. Extend the app with your own custom feature: use your imagination!


# 🏁 How to get started 🏁

1. Draw some wireframes. That is, simple schematic designs that lay out all the parts of the webapp that need to be built.

2. Specify the game logic:
   1. List all the actions the user can take. For each interaction, write down what the input information is.
   2. Define the shape of your state. Think about all the pieces of information that you have to store in your application state.

3. If you want to work on the project in parallel it makes sense to start with project that already has React & Redux set up. Setup a React project and the Redux store by pair programming together before you start working on the project in parallel. 

4. Push it to GitHub and add your teammates as collaborators. One person will host the code on their account.

5. Start implementing the features one by one and deploy them when they are working.

6. Occasionally you might be able to develop two features in parallel. If you spot an opportunity: go for it. But make sure to finish one feature before starting the next one.
