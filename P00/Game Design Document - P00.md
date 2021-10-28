# Game Design Document Template

v0.1 - Justin Kim - Oct. 19th, 2021

- Basic template to get the ball rolling.
- Questions are meant to encourage brainstorming and ideation.

v0.2 - Justin Kim - Oct. 27th-28th, 2021

- Changed "Obstacles" to "Meteors".

## Macklin & Sharp's Basic Elements, SoP, and Dominant Play

### Actions

The player can move the ship up and down on the screen. 

### Goals

Play ends when the player's ship crashes into a meteor.

### Objects

Object list:
- Ship
- Meteor

The player controls the ship to avoid colliding with various incoming meteors.

The player can move the ship to the top and bottom edges of the ship and only be blocked from moving past the edge.

Meteors move from past the right edge of the screen and move to the left until they're completely past the left edge of the screen.

### Rules

- The player moves the ship using the up and down arrow keys.
- The player loses upon immediately colliding with a meteor (sfx plays).
- The player can't move past the edge of the screen.

### Playspace

The player moves their ship within the Pico-8 screen dimensions.

### Players

Single-player experience.

### Space of possibility

I want players to feel immersed into the scenario of controlling a ship on its last legs by being limited in what they can do with it.

To make a quick prototype with enough play, the goal is to only avoid obstacles. Thus obstacles can be procedurally generated without having to place them beforehand.

These obstacles exist to emulate movie scenes such as the [asteroid field in *The Empire Strikes Back*](https://youtu.be/c8deRYotdng?t=109), where imminent doom keeps coming at the player/viewer in a tight space.

For this game to be simple to make, it's best to stick with accounting for only one player.

### Dominant play

This game is primarily active skill-based with an emphasis on reaction time.

## High-level game loop

When the player beings the game they start immediately in-game with the ship moving and no obstacles for 5 seconds.

After 5 seconds, the obstacles start coming and the player dodges them.

When the player hits an obstacle, the ship explodes. A sfx plays to indicate the player has lost and they're brought back to the initial state where they play again.