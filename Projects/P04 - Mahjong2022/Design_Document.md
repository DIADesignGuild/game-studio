# Mahjong Resource Design Document

This project will be a web-based React application where someone can calculate how many points their winning hand is worth. This will be compatible will both mobile and desktop browsers. It will calculate points for Taiwanese-style Mahjong. 

The target audience for this resource is towards new Mahjong players that may know how to win, but not yet know how to calculate how much they won.

## General Rules of Win Conditions for Mahjong (for context)
In most cases, a winning hand is determined by having 5 sets of threes and 1 pair. An example of a winning hand is as follows:
![ui2](https://user-images.githubusercontent.com/36168113/157802405-1c6d2d1d-bb34-4370-9335-30a7fb978ae3.png)
When it is not the player's turn, their hand contain 16 tiles. A person wins when they either draw a winning tile from the deck when it is their turn or another player discards the tile they need. The winning hand will have a total of 17 tiles.

Scores are calculated primarily through the hand, but there are certain factors related to the table that may also affect scores.

## Proposed Mechanics
- When the website is first loaded up, there will be a pop-up blurb that details how to use the resource (maybe with a small animation to further emphasize)
  - have buttons to have it go to the next "page" of instructions
  - have the option to skip this
- First screen will contain the "keyboard" of possible tiles, 5 sets of three blank tiles (for the sets of 3), 1 set of 2 blank tiles (for the pair), and finally a singular blank tile (for the "winning" tile)
  - the tiles in the "keyboard" will be clickable and act like a keyboard
  - the blank tiles will act like a text field; there will be a blinking rectangle that will act as the "insertion point" to indicate where the next tile "typed" will be placed
  - 'Calculate' button will be on this screen, and will trigger the act of reading the tiles submitted and calcuate the score based on the algorithm
- Secondary screen to show calculated score along with which tiles gave them those points in a list format
  - This screen will have the 'Start Over' button to return to first screen so the user can calculate another hand
- Further detail will be documented in the [UI Document](https://github.com/DIADesignGuild/game-studio/blob/main/Mahjong2022/UI.md)

## Resources
These sites will be referenced for making the algorithm:
- <http://mahjong.wikidot.com/rules:taiwanese-scoring>
- <https://mahjongtime.com/mahjong-taiwanese-scoring.html>

This Mahjong resource will reference this [Mahjong Wordle](https://mahjong-handle.update.sh/) for inspiration, since they also have a [public repository](https://github.com/yf-dev/mahjong-hand-guessing-game) containing the code.

## Further Considerations to Take
- How to host the website (buy own domain/server?)
- How to have the user check off a checklist of other things that may affect scoring that are related to the table state rather than the hand
  - Self-draw, dealer bonus, Blessing of Heaven/Earth, etc

## Possible Enhancements for the Future (not thinking about this for first iteration)
- be able to calculate different versions of Mahjong (i.e. Japanese)
