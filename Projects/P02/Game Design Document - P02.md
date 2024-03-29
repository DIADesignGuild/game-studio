# P02 Game Design Document
v0.2 - Justin Kim - 01/14/21-
- 

v0.1 - Justin Kim - 12/19/21-12/23/21
- Finished spitballing my ideas and thoughts.

## Table of contents
1. [Working title](#working-title)
2. [Gameplay description](#gameplay-description)
3. [Goal(s)](#goals)
4. [6 Basic elements](#6-basic-elements)
5. [Design values](#design-values)
6. [Interface and controls](#interface-and-controls)
7. [Game flow](#game-flow)
8. [Level design](#level-design)
9. [Art direction](#art-direction)
10. [Technical overview](#technical-overview)
11. [MDA Framework (experimental)](#mda-framework-experimental)

## Working title

[Kishotenketsu Tarot Spread Game](https://docs.google.com/document/d/1bgnpU05j40BGx25Rpb4umxYWp0rPAaY6-49w2q-8cTs/edit?usp=sharing) (KTSG)

Alt's
- Tarot+writing game

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
- Write within time and word limits.
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
  - Word limit counter
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

#### Basic rules
1. Pull 1 card each for the:
   1. Setting (Meta)
   2. Character (Meta)
   3. Setup (Act)
   4. Development (Act)
   5. Twist (Act)
   6. Reconciliation (Act)
2. Make a list with 1 keyword for each card based on its image, text, and/or your intuition within 6 minutes.
   1. Reverse the Twist card to use its opposite meaning. 
   2. Don't forget to store your list somewhere to grow it!
   3. If you pull a card that already has a keyword, add a new one for it in your list.
3. ~~Discover your characters' emotional journey within 12 minutes by answering each Act card's Mystic Question, using its keyword and interpreting the card itself.~~
4. Create spread.
   1. Take the sum of numerical values of all Meta and Act Cards, plug that value into the Mystic Formula, and choose the theme from the Theme table corresponding the the Mystic Number's value.
   2. ~~Look at the Act cards and note their suites and arcana. Refer to the Mystic Questions table and choose a question to answer in each Act based on the element with the most number of cards in your spread.~~
5.  Set the timer and write 1 line of words, up to 12 words per line, for each card within 12 minutes.
    1.  Use the theme from the table.
    2.  Each card's keyword must be incorporated into its line at least once.
    3.  ~~Look at your Act cards. Change the time and word limits based on the combos you find by referring to the Mystic Combos table.~~
    4.  ~~While writing, answer the Mystic Question for each Act card's line based on its element.~~
6.  If you write within the time and word limits, use the theme, include all keywords, ~~and answer the Mystic Question for each act card,~~ you've succeeded.
    1.  If not, restart the timer, keep any complete lines, and discard any unfinished lines.
    2.  Lower the word limit by 2 words and begin writing again. Feel free to change previous lines.
    3.  If the word limit goes below 0, delete your story and start over from scratch.
    4.  Once you succeed, restore the word limit to its default value.
7.  If you've succeeded and want to write a sequel story, draw more cards for the Development, Twist, and Conclusion to make a new spread but use your previous Conclusion card as the new Setup card.

#### Extended rules
1. Level 0.
   1. Gather materials
      1. Something to record narrative, current word limit, current level, number of rounds played, job title.
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
      4. Draw 1 card for Conclusion.
      5. Arrange into its sub-spread within the super-spread.
      6. Repeat for however many episodes are specified by the current level.
   4. Take the sum of numerical values of all Meta and Act Cards, plugging that value into the Mystic Formula™, and referring to the Theme table, choose the theme corresponding the the sum's value.
      1. If a card is reverse, make its number negative.
   5. Note current level's number/title, time and word limits, possibility for promotion.
   6. Arrange Meta and Act Cards into the super-spread.
   7. Start round of play.
      1. Cards can be interpeted using their Keywords and Images.
      2. Player must write 1 line of words for each card.
      3. Round ends in success if player meets current level's episode goal within time and word limits.
      4. The player checks if finishing the current level results in a promotion to the next job title.
      5. Round ends in failure if player can't finish writing level's episode goal within the time and word limits.
         1. If player fails to meet level goal within limits, then they may restart the level and play again.
            1. Player increments their round counter.
            2. Player keeps the lines a/o stories they wrote from the previous round to count towards the current level's episode goal and continue writing by building off what they already have written.
            3. However players must also lower the current level's word limit according to the level's specified difficulty/word decrementer.
   8. Set and start timer for writing Meta cards.
      1. Interpret and write Meta cards.
   9.  Set and start timer for writing current level's Act Cards and spreads.
       1.  Interpret and write Act Cards.
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

Story: The player is a "Creative Consultant Intern" for a media production firm specializing in divinating narratives using Tarot cards in a world where stories are the hottest commodity. To keep up with the insane demand for content, the firm takes a chance on the player and gradually gives them more and more assignments such as going from writing a single novel to writing and overseeing an entire tv series. The player gets promoted every couple of levels/assignments. Once they finish all levels/assignments, they become a firm partner and end the game.
  Promotions happen so frequently because people keep burning out and leaving LMAO.

Characters: 
- The Creative Director
  - Your friendly interviewer and now direct boss.
  - Chill and always knows what to do if something goes wrong.
  - Dreads having meetings with the Firm Head.
  - Takes over as Firm Head when the old one escapes the country.
- The Senior Content Consultant
  - An established employee in the Firm's creative division.
  - Means well but definitely sees the interns as a bunch of inept monkeys.
- The Other Creative Consultant Intern
  - A nervous klutz who wants to do her best.
  - Has a strong knack for seeing the bigger picture of an overarching narrative.
  - Everyone thinks she'll become a great creative director someday.
- The Firm Head
  - An obnoxious creep who exploits the creative workers at the Firm.
  - Loves content but never had the talent for making it. Luckily for him he's good at the business end of things (and inherited the Firm from his dad).
  - Everyone knows he creeps on the employees.
  - Flees the country in the last level, leaving the player as the perfect fit to lead the firm.
- The HR Rep
  - A by-the-book walking encyclopedia who goes around citing the employee handbook from memory whenever she sees something wrong.
  - Exposes the Firm Head's dodgy tax history to the government when he tries to creep on her.
    - Oh, those poor sea otters... He won't ever hurt them ever again.
- The Secretary
  - The Firm Head's personal secretary.
  - Does her job. That's it. Don't bother her for anything else.
  - Doesn't matter that the old Head left the country. She's here to work for whoever's coughing up the money.
- The Player/Creative Consultant Intern
  - A bright-eyed young intern who dreams of writing up content all day. 
  - They also kind of need this job to pay the rent, so they'll put up with anything.

Alt story: You divinate what happens next and write news headlines ASAP.


During gameplay, what do players see, hear, and/or feel? Ex: When playing Mario, what view of the game world do players see? Answer: They see a sideview of the levels Mario jumps through. This can also include POV's such as cultural undersatnding, presentation of information, etc.

### Challenge

The challenge lies in applying Tarot meanings to create story events. This challenge is difficult from the start so the game aims to reduce this difficulty down to an optimal level for play. Players can answer prompt questions for each Kishotenketsu step to help focus their thinking. 

One challenge to the player is writing under constraints. The difficulty in writing quick narratives comes from word and time limits that forces the player to think on their feet and make something up as fast as possible. 


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

**Strategy:** The best strategy for this game is to build up an extensive vocabulary for writing with brevity. The word and time limits both discourage lengthy and meandering sentences and favor short sentences out of necessity. 

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

- Level 0 --> Level X --> End
  - Level 0: Gather materials
  - Level X: Check if game ended --> Pull cards --> Arrange spread --> Find theme --> Check current level details --> Read cards + Write stories --> Check if...
  - End: Read ending, feel like a champ


Flow chart showing intended use case(s) along with wireframes.

## Level design

### Level 0: Job interview

#### Introduction
- All the contextual info you need to play.

#### Alt. to physical decks and online services
If a player lacks access to an interactive deck, physical or digital, they can pick numbers ahead of time with a random number generator to determine what cards to reference during play. This method assumes the player isn't familiar with Tarot card numbers. Players can refer to any free online printable tarot deck pdf's.

Here's the process for choosing a random card from the deck. Players repeat these steps for each card they need to pull for the current level.

First choose a random number from 1 to 5 to select a category of cards.

|Number|Arcana|Suite|
|-|-|-|
|1|Major|N/A|
|2|Minor|Wands|
|3|Minor|Swords|
|4|Minor|Cups|
|5|Minor|Pentacles|

Next, choose a random number for the exact card to refer to depending on the Arcana and Suite chosen with the previous number.

|Arcana|Range|
|-|-|
|Major|0-21|
|Minor|1-14|

NOTE: For the Aces and Court cards in this game, players assume certain values.

|Card type|Number|
|-|-|
|Ace|1|
|Page|11|
|Knight|12|
|Queen|13|
|King|14|

#### The Mystic Questions
|Arcanum|Suite|Element|Question|
|-|-|-|-|
|Minor|Pentacles|Earth|What sensation(s) does your character experience?|
||Swords|Air|What are your character's thoughts centered around?|
||Cups|Water|What emotion(s) does your character feel?|
||Wands|Fire|What are your character's gut feelings?|
|Major|N/A|Path|What moral or fundamental truth does your character learn about?|

#### The Mystic Combos

|Combo|#/Suite|Any reversed?|Effect|
|-----|-------|---------|------|
|4 of a kind|#|N|+3 min|
|||Y|-3 min|
||Suite|N|+4 words|
|||Y|-4 words|
|3 of a kind|#|N|+2 min|
|||Y|-2 min|
||Suite|N|+3 words|
|||Y|-3 words|
|Pair|#|N|+1 min|
|||Y|-1 min|
||Suite|N|+2 words|
|||Y|-2 words|

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
|0|Comedy|
|1|Fantasy|
|2|Sci-Fi|
|3|Family|
|4|Political|
|5|Spirituality|
|6|Romance|
|7|Racing|
|8|Nature|
|9|Coming of Age|
|10|Heist|
|11|Legal|
|12|Spy|
|13|Supernatural|
|14|Crime|
|15|Horror|
|16|Tragedy|
|17|Healing|
|18|Surrealism|
|19|Road Trip|
|20|Apocalyptic|
|21|Epic|

### Level 1: Interview test
- Design goal: Introduce time limit, Introduce word limit
- Game goal: Ghost write a novel plot for a minor internet celebrity. 
- Brief: They're paying good money for this! But obviously not enough for the big shots to care. Write a simple 4 line story for the ~~sweatshop~~ content generation team. While we're not too concerned about the quality since they're trying to scrimp on us, we do care that you finish on time. Get your work in by the end of the day and you're hired! P.S. We'll compensate you with a month-old donut from the breakroom and some Monopoly money we have lying around.
- Liason: The Creative Director
- Time limit: 10 min real time or 1 in-game day
- Word limit: Up to 25 words/line, 100 words total
- Promotion: Non-employee to Creative Consultant Intern
  - Perk: You won't starve in the streets next week!

### Level 2: Welcome to the company
- Design goal: Introduce Kishotenketsu
- Game goal: Write a film trilogy for a low-budget, established indie studio.
- Brief: Great job, newbie. Welcome to the Firm. Your first official (paid with real money) assignment is to write a film trilogy. The client's (b12) a well-known indie studio that's been churning out B-level movies since before you were born. But need a new trilogy aka a new evergreen property that'll put their names on the map again. So basically, we actually need to kinda try this time. Write up 3 4-line stories using this hot new story structure called Kishotenketsu the Senior Content Consultant teaches you by the end of the day.
- Liason: The Senior Content Consultant
- Time limit: 7 min real time or 1 in-game afternoon
- Word limit: Up to 20 words/line, 240 words total
- Promotion: None
  - Perk: Get back to work.

### Level 3: 2 Brain cells colliding
- Design goal: Introduce Act cards, Introduce Kishotenketsu spread
- Game goal: Write a limited-run 5-issue comic book series for a well-known classic comics publisher.
- Brief: Excellent work with that film trilogy, the studio loved it. Now we need you to write up 5-issue, at 4-line each, limited run comic book series for a well-known comics publisher. They're a powerhouse in their industry and definitely someone we want to please. Or else these rabid nerds will have our heads (they've tried before). This time we'll have you learn how to divinate narratives using Tarot cards. It's what we're known for after all. The Other Creative Consultant Intern will help you out with that. Best of luck! If you succeed we'll bump you up to being an official Content Consultant. Not because our workforce keeps burning out and leaving, haha who told you that? Seriously, who.
- Liason: The Other Creative Consultant Intern
- Time limit: 5 min real time or 1 in-game work session
- Word limit: Up to 15 words/line, 300 words total
- Promotion: Content Consultant Intern to Content Consultant
  - Perks: 
    - Junior standing. During the next level only. After time's up you can take out up to any 3 words you wrote for the entire assignment. 
    - You get $3 right from the boss's wallet and an all expenses paid additional trip to the bathroom (you need to pay to flush, though).

### Level 4: Where did everyone go?
- Design goal: Introduce Meta cards, Introduce full Kishotenketsu spread
- Game goal: Write a 8-track concept album for a popular rock band.
- Brief: The comic book series is a hit! You're doing good. By the way there's a popular rock band out there who's trying to make a concept album that'll shake the charts. They'd do it themselves but management's concerned they're too busy having fun to actually get any work done. Corporate-made bands, am I right? Anyway we're short on staff this time- Oh don't worry, this usually happens at this time of the year. The HR Rep will give you the run-down on incorporating Meta cards into your spread. She's not necessarily an expert on content writing but she knows a thing or two. Get us 8 tracks worth of content at 4 lines for each track by today. Good luck! Oh also, don't do anything stupid; she's a stickler for the rules *groan*.
- Liason: The HR Rep
- Time limit: 3.5 min real time or 1/2 in-game work session
- Word limit: Up to 13 words/line, 416 words total
- Promotion: None
  - Perk: Opportunity to use previous level's perk.

### Level 5: 
- Design goal: Combine everything the players' learned
- Game goal: Write a 10-episode radio serial for a trending themed podcast.
- Brief: Wow that album blasted its way to the top of the charts! The record company's saying the band's ingenuity did it, but we all know who the real champs are (us, of course). This assignment's a little weird, though. Don't ask me why, but for some reason the Firm Head's Secretary wants to supervise you. She's capable and knows her way around content thanks to the Head's love for it. Make 10 episodes worth of content at 4 lines per episode... And who knows, maybe she'll bump you up in the ranks if you succeed. Why the sudden promotion? N-no reason! It's not like we're slipping into bankruptcy or anything like that- HAHA who told you that nonsense?
- Liason: The Secretary
- Time limit: 2 min real time or 1/2 in-game work session
- Word limit: Up to 8 words/line, 320 words total
- Promotion: Content Consultant to Senior Content Consultant
  - Perks: 
    - Senior standing. During the next level only. After time's up you can switch out up to any 3 words you wrote for the entire assignment. 
    - This time you get a $5 voucher for coffee from the machine (a coffee costs $7) and whatever lint's on it.

### Level 6: End of the line
- Design goal: Test everything the players' learned
- Game goal: Write a 12-episode anime TV series for a major broadcasting corporation.
- Brief: The Head's been keeping an eye on you and needs your help. The Firm's in danger of shutting down thanks to its funds mysteriously disappearing! Luckily the Firm Head leveraged his contact at a major broadcasting corporation to land a lucrative contract for writing 12 episodes of a new anime show. 4-lines each episode. But you have to finish writing it this second yesterday! Get this rush order out the door so you can save the company!
- Liason: The Firm Head
- Time limit: 1.5 min real time or literally right this instant in-game hurry hurry hurry
- Word limit: Up to 5 words/line, 240 words total
- Promotion: Senior Content Consultant to Creative Director
  - Perk: Opportunity to use previous level's perk.
  - You get to witness the Creative Director turn into the Firm Head and grant everyone equitable pay. No more eating stray yarn from strangers' coats at parties!


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


## MDA Framework (experimental)

### Aesthetics/Feels
1. Expression
2. Challenge
3. Education
4. Discovery
5. ~~Narrative~~ (On-hold, for full-version if player reaction is favorable.)

### Dynamics/Behavior
Expression
- Intuitively interpret card meanings 
- Write stories w/o a required driving conflict

Challenge
- Write before time's up
- Write concisely
- Write a specific genre

Education
- Learn reading Tarot cards
- Learn writing with Kishotenketsu

Discovery
- Explore the combination of Tarot cards and Kishotenketsu.

### Mechanics/Rules
Expression
- Interpret cards based on image, text, and intuition
- Follow Kishotenketsu structure by using a spread for it

Challenge
- Time limit
- Word limit
- RNG'd Theme

Education
- Create a keyword for each card and use it in its line.
- Write a story using Tarot card interpretations according to Kishotenketsu structure

Discovery
- Write Kishotenketsu narratives using Tarot reading interpretations.