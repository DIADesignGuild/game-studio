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

The players wins when they finish writing x amount of stories in y amount of time for z number of levels without going over the word and time limits.

### Actions

Players can:
- Shuffle, Pull, Arrange, and Read Tarot cards.
- Do a little math to find a theme to write under.
- Finish assignments.
- Write within time and line-word limits.
- Write a line for each act.

### Objects

- Tarot cards
  - Meta cards
  - Act Cards
  - Keywords
  - Images
- Mystic Tools
  - Mystic Formula
  - Mystic Number
  - Mystic Table
  - Themes
- Kishotenketsu acts
- Counters
  - Round counter
  - Level counter
  - Line-word limit counter
  - Time limit counter
- Assignment briefs
- Job titles
  - Promotions

- What does the player interact with?

### Playspace

- Kishotenketsu spread
  - Meta cards
  - Act cards
  - Card relationships
- Headspace
  - Game world (working at the firm)
  - Narrative (the story itself)
- Writing implementation tool


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
   3. Draw Act Cards.
      1. Draw 1 card for Setup.
      2. Draw 1 card for Development.
      3. Draw 1 card for Twist.
      4. Draw 1 card for conclusion.
      5. Arrange into its sub-spread within the super-spread.
      6. Repeat for however many episodes are specified by the current level.
   4. Arrange Meta and Act Cards into the super-spread.
   5. Take the sum of numerical values of all Meta and Act Cards, plugging that value into the Mystic Formula™, and referring to the Theme table, choose the theme corresponding the the sum's value.
   6. Note current level's number/title, time and line-word limits, possibility for promotion.
   7. Start round of play.
      1. Cards can be interpeted using their Keywords and Images.
      2. Player must write 1 line of words for each card.
      3. Round ends in success if player meets current level's episode goal within time and line-word limits.
      4. The player checks if finishing the current level results in a promotion to the next job title.
      5. Round ends in failure if player can't finish writing level's episode goal within the time and line-word limits.
         1. If player fails to meet level goal within limits, then they may restart the level and play again.
            1. Player increments their round counter.
            2. Player keeps the lines a/o stories they wrote from the previous round to count towards the current level's episode goal and continue writing by building off what they already have written.
            3. However players must also lower the current level's line-word limit according to the level's specified difficulty/line-word decrementer.
   8. Set and start timer for writing Meta cards.
      1. Interpret and write Meta cards.
   9.  Set and start timer for writing current level's Act Cards and spreads.
       1.  Interpret Act Cards.
          1. Reverse the Twist card to use its opposite meaning. 
          2. Narrative must fit in the Kishotenketsu structure.
          3. Narrative must not have a central/driving conflict. <-- TBD, let's come back to this.
3. Scoring
   1. The round counter can act as a "high-score" type variable used for personal achievement. 

## Design values

What does your game's design prioritize? You should always refer back to these while fleshing out the game.

### Experience

KTSG lets players experience writing an East Asian-style narrative using Tarot card meanings to answer prompt questions.
- Ex: I pull The Empress for the Character Meta card. What does this person want to accomplish before the end of time?

KTSG is a creative exercise game. Players get to come up with stories really fast under healthy constraints to get their creativity going. 

Players write stories using Kishotenketsu that don't have a central/driving conflict. <-- yeah I'm gonna have to research this more LOL.

Players experience the thrill of fast-paced content creation using healthy restraints. Unlike real world work expectations, however, failure isn't the end of things. This game also lets players understand "failure" as an integral aspect of the creative process and isn't necessarily a negative concept. 

I also want players to experience purposeful and meaningful work by:
- Creating actual narrative outlines they can use outside of the game.
- Rising through a promotion system that emulates real world career progression. 

What players will take away by the end of the game is an idea of what is feels like to do fulfilling work that they have creative ownership over. It's stressful to be in a cycle where you seek meaningful work but also feel too paralyzed to do anything about it. Sometimes you feel like there's no way out of a hole you've fallen into. By playing this game players can realize there's no such hole and that they can do whatever they set out to, even if it hurts.


What can the player do? What do players *experience* when they play your game? Ex: Mario lets players experience what it's like to be a jumping plumber who rescues a princess. 

### Theme

This game is about learning about Kishotenketsu and Tarot by exploring the space between them.

This game is about how writing stories for different mediums can be easily achievable through writing under constraints that encourage creativity. Out of this setting, play can be achieved through supplying the player with tools to overcome challenges. 


What's the game about? What ideas, concepts, or arguments is your game communicating to the players?

### Point of view

The players feel the narrative in their heads as they interpet Tarot cards to address the requirements of each step in Kishotenketsu.

This game is about writing a series, such as a tv, novel, or comic book series. 

Story: The player is a "Creative Consultant Intern" for a media production firm in a world where stories are the hottest commodity. To keep up with the insane demand for content, the firm takes a chance on the player and gradually gives them more and more assignments such as going from writing a single novel to writing and overseeing an entire tv series. The player gets promoted every couple of levels/assignments. Once they finish all levels/assignments, they become a firm partner and end the game.


During gameplay, what do players see, hear, and/or feel? Ex: When playing Mario, what view of the game world do players see? Answer: They see a sideview of the levels Mario jumps through. This can also include POV's such as cultural undersatnding, presentation of information, etc.

### Challenge

The challenge lies in applying Tarot meanings to create story events. This challenge is difficult from the start so the game aims to reduce this difficulty down to an optimal level for play. Players can answer prompt questions for each Kishotenketsu step to help focus their thinking. 

One challenge to the player is writing under constraints. The difficulty in writing quick narratives comes from line-word and time limits that forces the player to think on their feet and make something up as fast as possible. 


What stops the player from achieving their goals without any effort? Are there any constraints that add a dimension of fun?

### Decision-making

Decisions to make:
- What story part to make
- How the card even fits in

Players make decisions by choosing how a Tarot meaning defines the development of the act itself. If the Empress tells me the Twist should be about showing compassion, then perhaps my character who was selfish decides to commit an act of generosity.


How are decisions made by players? Do they have to use muscle memory or apply a set of basic principles to a series of new situations?

### Skill, strategy, chance, and uncertainty

Skill: Skill shouldn't impact the gameplay. In fact it shouldn't be a factor at all. This game is about self-expression.

Chance: Tarot deck is shuffled before drawing cards. 

Uncertainty: Uncertainty thrives in how the Tarot cards may be interpeted depending on the story. Players won't necessarily make the same interpretations (unless they want to).

**Strategy:** The best strategy for this game is to build up an extensive vocabulary for writing with brevity. The line-word and time limits both discourage lengthy and meandering sentences and favor short sentences out of necessity. 

**Skill:** Players need to build up multiple skills to finish writing stories in a short amount of time and words:
- Memory
  - Vocabulary
  - Tarot keywords, meanings, and synergies
- Getting used to writing under constraints
- Learning to write narratives without a driving conflict


In what way do these factors impact gameplay? The game experience? How are they all balanced with each other and other elements?

### Context

Players include:
- Tarot enthusiasts
- Writers
- Newbies to both Tarot and Writing

They most likely play at their desks or on some sort of surface to make the spreads. They'll probably play whenever they feel the urge to write a story/express themselves. This game is intended to be on anything players use to record their story.

Kishotenketsu as a structure doesn't require conflict that the entire narrative focuses on. Its lack of a need for desire, and thus motivation to solve a problem, on a protagonist's part most likely draws from Buddhist values. In this case characters don't need complex motivations as expected in Western storytelling and can simply react to what's occuring in the world around them. This lack of a singular agenda also allows for more exploration around ideas in a work. 


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

### Level 0: Prep

#### The Mystic Formula

That's right. Math is magical~ 

The Mystic Formula provides the player with a theme to write under by first eating the sum of the Meta and Act Cards' numerical values. It then spits out a Mystic Number which corresponds with a specific theme in the Mystic Table. The formula is as follows: 

`Mystic Number = (Card 1's # + Card 2's # + Card 3's # + Card 4's # + Card 5's # + Card 6's #) % 22`

Let's break this down.

The funky action inside the parentheses is the sum of the cards' numbers that appear on their designs. The `%` in this case doesn't mean "percentage", but "modulo". Basically modulo gives you the remainder that comes from division between a dividend (left of the `%`) and a divisor (right of the `%`). In the Mystic Formula's case, its dividend is the sum of all cards' numerical values and its divisor is 22.

##### Hold on, what's with this 22?

22 is based off the number of cards in the Major Arcana, since it's commonly interpreted as the Fool's Journey. 

This number is also practical due to the minimum and maximum possible values one gets from finding the sum of 6 cards. To break down the arcanas' numerical ranges:
- The Major Arcana ranges from 0 to 21. 
- For the purposes of easy numbers, the Minor Arcana ranges from 1 to 14.
  - Ace = 1, Page = 11, Knight = 12, Queen = 13, and King = 14.

Thus,
- Minimum possible value: (6 cards) --> 0 (The Fool) + 1 (The Magician) + 1 (of Swords) + 1 (of Wands) + 1 (of Clubs) + 1 (of Pentacles) = **5**
- Maximum possible value: (6 cards) --> 16 (The Tower) + 17 (The Star) + 18 (The Moon) + 19 (The Sun) + 20 (Judgement) + 21 (The World) = **111**

With a minima and maxima of 5 and 111, we can reliably use 22 to find a remainder ranging from 0 to 21 (the Major Arcana's range) that corresponds to a Theme in the Mystic Table.

As proof of concept, here's 22 modulo operations that result in every value from 0 to 21, without any operations where the dividend is the same as the remainder:
- `110 % 22 = 0`
- `111 % 22 = 1`
- `68 % 22 = 2`
- `47 % 22 = 3`
- `92 % 22 = 4`
- `49 % 22 = 5`
- `28 % 22 = 6`
- `95 % 22 = 7`
- `74 % 22 = 8`
- `97 % 22 = 9`
- `76 % 22 = 10`
- `99 % 22 = 11`
- `56 % 22 = 12`
- `101 % 22 = 13`
- `36 % 22 = 14`
- `81 % 22 = 15`
- `38 % 22 = 16`
- `61 % 22 = 17`
- `106 % 22 = 18`
- `19 % 22 = 19`
- `86 % 22 = 20`
- `65 % 22 = 21`

One downside is that without testing to see what the spread of possible values is from 5 to 111, the probability of getting a certain theme more than others could affect the player's experience either positively or negatively. I'll need to test this and see if there's any significant difference for the gameplay experience. 

#### The Mystic Table (based on the Major Arcana)

The Mystic Table is meant to help the player decide on a headspace to think and write in. The Major Arcana is used as inspiration since it's typically interpreted as the "Fool's Journey".

This table's focus is to present themes as genres for accessibility purposes. Since this game's target audience includes players who may not have experience in fiction writing, it's prudent to help them approach writing stories through keywords they'd be familiar with. 

|Mystic Number|Theme|
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
|13|War/Supernatural|
|14|Crime|
|15|Horror|
|16|Tragedy/Disaster|
|17|Healing|
|18|Surrealism|
|19|Educational|
|20|Apocalyptic|
|21|Epic|

### Level X

Level 1: 10 minute time limit, up to 4-sentences per act. 
Level 2: 5 minute time limit, up to 2-sentences per act.
Level 3: 30 second time limit, up to 1-sentence per act.
Level 4: 30 second time limit, up to 5 words per act.


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