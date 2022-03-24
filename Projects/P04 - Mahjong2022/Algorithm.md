# Algorithm (INCOMPLETE)
### Referencing these two sites for scoring:
- <http://mahjong.wikidot.com/rules:taiwanese-scoring>
- <https://mahjongtime.com/mahjong-taiwanese-scoring.html>

## Variables/Data Structures
### Structure of the Tiles
- id (will be numbers as above)
- boolean for winning tile
- boolean for self draw (this will be false unless winning tile = true)
#### Number the tiles as follows:
- 0-8: dots from 1-9
- 9-17: bamboos from 1-9
- 18-26: characters from 1-9
- 27-30: winds (east, south, west, north)
- 31-33: dragons (white, red, green)
- check boolean for whether a set/pair is closed or open
### Global Variables (for various scorings)
- closed wait - boolean
- single wait - boolean
- closed counter - int (special effect if closed = 6 or closed = 1)
- gang counter - int 
- pong counter - int (special effect if pong = 5 or pong = 0)

### How to Organize Tiles in Algorithm for calculating
- will already be sorted by sets/pairs via the UI, have a structure to read off of that (5 sets of 3s and the pair + the winning tile with special flags depending)
- have another structure that is 17 tiles long (insert tiles into here while reading off UI structure) to help calculate entire hand things (doesnt need special flag in the winning tile)
  - maybe calculate some things while getting inserted (i.e. how many chows/pungs/gangs)

#### Algorithm for Reading Tiles/Inserting (Standard)
1. check if the set/pair has a tile missing, if yes, put winning tile in the proper place (make sure the ids are in numerical order, or just add it at the end if the id is identical)
    - if winning tile is placed in middle, toggle closed wait variable
    - if winning tile is part of a pair, toggle single wait variable
3. insert tiles of the set/pair into 17 tile long struct
4. loop the above 5 times (for each 5 sets) and then do a separate read/insert for the pair
  - at the end of each set, check to see if the gang checkbox is checked. if yes, then +1 to gang counter variable
  - check if set is closed or open. add to closed counter
  - check if set is pong or chow. +1 to pong

### Needed flags to check (in order of priority, organized by how the if statements should be organized)
This will probably be incorporated with the above later
- all flowers/7 flowers and robbing the 8th (NO OTHER SCORING IS COUNTED,EXIT)  
----
- 8 pairs (aka. Seven Pairs And A Pung)
- 5/4/3/2 concealed pungs (quads count as a concealed triplet)  
----
- full flush
- half flush  
----
- big 4 winds
- big 3 dragons
- little 4 winds
- little 3 dragons  
----
- all pungs
- all chows (with(out) flowers and honors)  
---- 
Miscellaneous
- ready hand
- win within 5(-10) discards (i guess i gotta figure out this one)
- all revealed/closed hand
- full straight (closed and open)

- single/closed wait

**need to finish the list**
