# P02 Game Design Document

v0.1 - Justin Kim - 12/19/21-12/23/21
- Finished spitballing my ideas and thoughts.

## Working title

[Kishotenketsu Tarot Spread Game](https://docs.google.com/document/d/1bgnpU05j40BGx25Rpb4umxYWp0rPAaY6-49w2q-8cTs/edit?usp=sharing) (KTSG)

## Gameplay description

KTSG is a game and writing framework where you make a narrative using tarot cards.

As a creative exercise game, its main mechanics are constraints such as a set amount of time to finish writing under and a word-limit.

How would you describe your game? Think of it as a summary of the game's overall design. It should be understandable by someone who's never played this game before. 

## Goal(s)

Players play until they've written a story using the Kishotenketsu narrative and guidance from Tarot cards.



What goals are players trying to achieve in your game? What's the end result?

## 6 Basic elements

The "atoms" of the game, they're important elements that gives it a more concrete form.

### Players

KTSG is meant to be a single-player experience for newbies to creative writing and Tarot reading. It can also be a two-player game where one person interprets the Tarot cards, another suggests beats for each card's interpretation, and both assemble the Kishotenketsu narrative.

### Goals

The players must finish writing x amount of stories in y amount of time for z number of levels without going over the word and time limits.

### Actions

Players can:
- Shuffle, Pull, and Read Tarot cards.
- Create narrative beats. 
- Amswer prompt questions.


- What can the player do to accomplish their goals?

### Objects

- Tarot cards
  - Major arcana (Meta cards?)
  - Minor arcana (Kishotenketsu cards?)
- Narrative beats
- Prompt questions for each beat

- What does the player interact with?

### Playspace

- Tarot spread itself
  - 
- Narrative space (mentally)
- Writing space (physically)


- Where is the player?

### Rules
1. Level 0.
   1. Gather materials
      1. Something to record narrative, current line-word limit, current level, number of rounds played, job title.
      2. Digital/physical Tarot deck.
         1. Any Tarot frameworks are welcome, but this game assumes the RWS framework by default.
      3. Timer.
2. Game loop (per level)
   1. The game ends when the player finishes all levels and reaches the final promotion.
   2. Drawing Meta cards.
      1. Pull 1 card for the Setting.
      2. Pull 1 card for the Character.
   3. Draw Kishotenketsu cards.
      1. Draw 1 card for Setup.
      2. Draw 1 card for Development.
      3. Draw 1 card for Twist.
      4. Draw 1 card for conclusion.
      5. Arrange into its sub-spread within the super-spread.
      6. Repeat for however many episodes are specified by the current level.
   4. Arrange Meta and Kishotenketsu cards into the super-spread.
   5. Take the sum of numerical values of all Meta and Kishotenketsu cards, plugging that value into the formula, and referring to the Theme table, choose the theme corresponding the the sum's value.
   6. Note current level's number/title, time and line-word limits, possibility for promotion.
   7. Start round of play.
      1. Player must write 1 line of words for each card.
      2. Round ends in success if player meets current level's episode goal within time and line-word limits.
      3. The player checks and sees if finishing the current level results in a promotion to the next job title.
      4. Round ends in failure if player can't finish writing level's episode goal within the time and line-word limits.
         1. If player fails to meet level goal within limits, then they may restart the level and play again.
            1. Player increments their round counter.
            2. Player keeps the lines a/o stories they wrote from the previous round to count towards the current level's episode goal and continue writing by building off what they already have written.
            3. However players must also lower the current level's line-word limit according to the level's specified difficulty/line-word decrementer.
   8. Set and start timer for writing Meta cards.
      1. Interpret and write Meta cards.
   9.  Set and start timer for writing current level's Kishotenketsu cards and spreads.
       1.  Interpret Kishotenketsu cards.
          1. Reverse the Twist card to use its opposite meaning. 
          2. Narrative must fit in the Kishotenketsu structure.
          3. Narrative must not have a central/driving conflict. <-- TBD, let's come back to this.

## Design values

What does your game's design prioritize? You should always refer back to these while fleshing out the game.

### Experience

KTSG lets players experience writing an East Asian-style narrative using Tarot card meanings to answer prompt questions.
- Ex: I pull The Empress for the Character Meta card. What does this person want to accomplish before the end of time?

KTSG is a creative exercise game. Players get to come up with stories really fast under healthy constraints to get their creativity going. 

Players write stories using Kishotenketsu that don't have a central/driving conflict. <-- yeah I'm gonna have to research this more LOL.

What can the player do? What do players *experience* when they play your game? Ex: Mario lets players experience what it's like to be a jumping plumber who rescues a princess. 

### Theme

This game is about learning about Kishotenketsu and Tarot by exploring the space between them.


What's the game about? What ideas, concepts, or arguments is your game communicating to the players?

### Point of view

The players feel the narrative in their heads as they interpet Tarot cards to address the requirements of each step in Kishotenketsu.

This game is about writing a series, such as a tv, novel, or comic book series. 

Story: The player is a "Creative Consultant Intern" for a media production firm in a world where stories are the hottest commodity. To keep up with the insane demand for content, the firm takes a chance on the player and gradually gives them more and more assignments such as going from writing a single novel to writing and overseeing an entire tv series. The player gets promoted every couple of levels/assignments. Once they finish all levels/assignments, they become a firm partner and end the game.


During gameplay, what do players see, hear, and/or feel? Ex: When playing Mario, what view of the game world do players see? Answer: They see a sideview of the levels Mario jumps through. This can also include POV's such as cultural undersatnding, presentation of information, etc.

### Challenge

The challenge lies in applying Tarot meanings to create story events. This challenge is difficult from the start so the game aims to reduce this difficulty down to an optimal level for play. Players can answer prompt questions for each Kishotenketsu step to help focus their thinking. 


What stops the player from achieving their goals without any effort? Are there any constraints that add a dimension of fun?

### Decision-making

Decisions to make:
- What story part to make
- How the card even fits in

Players make decisions by choosing how a Tarot meaning defines the development of the act itself. If the Empress tells me the Twist should be about showing compassion, then perhaps my character who was selfish decides to commit an act of generosity.


How are decisions made by players? Do they have to use muscle memory or apply a set of basic principles to a series of new situations?

### Skill, strategy, chance, and uncertainty

Skill: Skill shouldn't impact the gameplay. In fact it shouldn't be a factor at all. This game is about self-expression.

Strategy: N/A.

Chance: Tarot deck is shuffled before drawing cards. 

Uncertainty: Uncertainty thrives in how the Tarot cards may be interpeted depending on the story. Players won't necessarily make the same interpretations (unless they want to).


In what way do these factors impact gameplay? The game experience? How are they all balanced with each other and other elements?

### Context

Players include:
- Tarot enthusiasts
- Writers
- Newbies to both Tarot and Writing

They most likely play at their desks or on some sort of surface to make the spreads. They'll probably play whenever they feel the urge to write a story/express themselves. This game is intended to be on anything players use to record their story.


Who are the players? Where do they play this game? When will they play the game? What platform will this game be on? 

Ex: Handheld games such as the ones on the Gameboy line had a feature for saving at any point in the game because the Gameboy platform, a handheld console, was meant to be taken on the go and both played and shutdown anywhere, anytime. Target players probably included people who commuted via trains and had a variety of stops depending on the time of day. 

### Emotions

When players play KTSG they should feel satisifed an excited to make a story that reminds them of their favorite anime, kdrama, etc.


What do players feel when playing the game? Fear? Sadness? An irresistable urge to eat gummy bears?

## Interface and controls

![](Assets/unnamed.png)


Insert wireframes here -->

Wireframes depicting game screen, information layout and representation, player interaction, etc.

## Game flow

Decide theme/setting --> Pull cards --> Write narrative --> reshuffle cards --> Pull cards...

- Pull card --> Interpret card --> Write based on card


Flow chart showing intended use case(s) along with wireframes.

## Level design

Level 1: 10 minute time limit, up to 4-sentences per act. 
Level 2: 5 minute time limit, up to 2-sentences per act.
Level 3: 30 second time limit, up to 1-sentence per act.
Level 4: 30 second time limit, up to 5 words per act.

### Theme table (based on the Major Arcana)

The Theme table is meant to help the player decide on a headspace to think and write in. The Major Arcana is used as inspiration since it's typically interpreted as the "Fool's Journey".

This table's focus is to present themes as genres for accessibility purposes. Since this game's target audience includes players who may not have experience in fiction writing, it's prudent to help them approach writing stories through keywords they'd be familiar with. 

|Number|Theme|
|-|-|
|0|Comedy/Adventure|
|1|Fantasy/Sci-Fi|
|2|Mystery|
|3|Family/Parenthood|
|4|Political|
|5|Faith/Spirituality|
|6|Romance|
|7|Racing/Road Trip|
|8|Nature/Survival|
|9|Coming of Age|
|10|Casino/Heist|
|11|Legal|
|12|Stoner/Spy|
|13|War|
|14|Crime|
|15|Horror|
|16|Tragedy/Disaster|
|17|Healing|
|18|Surrealism|
|19|Educational|
|20|Apocalyptic|
|21|Epic|


Major Arcana: 0-21
Minor Arcana:
- Ace (1), 2-10, Page (11), Knight (12), Queen (13), King (14)
  - 4 groups of 1-14

Min possible val: (6 cards) --> 0 + 1 + 1 + 1 + 1 + 1 = **5**
Max possible val: (6 cards) --> 21 + 20 + 19 + 18 + 17 + 16 = **111**

Formula --> Theme = (Card1 + Card2 + Card3 + Card4 + Card5 + Card6) % 22
- "22" is based off the number of cards in the Major arcana, since it's commonly interpreted as the Fool's Journey.

Each level should be explained by a brief overall summary and annotated map or other way to visualize and point out specific details in it.

## Art direction

- A simple Google Doc.
- Font: Sen


The "look, feel, and sound" of the game. Essentially a series of deliverables showing the game's aesthetics.

Example deliverables include:
- Moodboard with annotated photo and sound references
- Concept art
- Sample audio

## Technical overview

- May require in-depth analysis on what exactly a narrative structure without "a driving conflict" means.
- Look at different Tarot frameworks and see alternative ways of interpeting cards.


If the game requires a lot of technical know-how, this is where we give the run-down. While more of an implementation deliverable, the technical overview's still good for giving the development team a sense of how this game will be built (in code, etc).