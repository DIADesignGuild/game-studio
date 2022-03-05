# Mahjong Resource Design Document

This project will be a web-based application where someone can calculate how many points their winning hand is worth. It will calculate points for Taiwanese-style Mahjong. (potentially extending to other styles of Mahjong, depends how far I get with this)

Will be referencing these sites for getting the scores:
- <http://mahjong.wikidot.com/rules:taiwanese-scoring>
- <https://mahjongtime.com/mahjong-taiwanese-scoring.html>

## Proposed Mechanics
- initial screen with empty slots and tiles to choose from (empty slots for open hand, concealed hand, flowers)
- clickable/draggable tiles to designated empty slots
- 'Submit' button
- secondary screen to show calculated score along with which tiles gave them those points
- 'Refresh'/'Redo' button to return to first screen

## What will need to be decided
- how to host the website (buy own domain/server?)
- what language to use to code this thing
- algorithm
- UI/UX
- should it be mobile compatible? (i kind of had a different idea in mind for mobile altogether though, although for a mobile app, not a website)
- do I consider seating/dealer? (probably yes, gonna be annoying though)
- how to incorporate which tile they won on (if it's the last tile in the deck, etc)
- maybe a checklist of potential things that may affect scoring
  - Self-draw, dealer bonus, Blessing of Heaven/Earth, etc

Things can be added/modified as needed. Just laying out the basic ideas out for now. (2/3/2022)

Maybe good reference for inspiration: https://mahjong-handle.update.sh/
- Mahjong Wordle, I like the layout of the tiles, clickable tiles seem good enough. Maybe do something similar, except bigger tiles (3/4/2022)
