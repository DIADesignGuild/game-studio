# Algorithm
### Referencing these two sites for scoring:
- <http://mahjong.wikidot.com/rules:taiwanese-scoring>
- <https://mahjongtime.com/mahjong-taiwanese-scoring.html>

### Number the tiles as follows:
- 0-8: dots from 1-9
- 9-17: bamboos from 1-9
- 18-26: characters from 1-9
- 27-30: winds (east, south, west, north)
- 31-33: dragons (white, red, green)
- 34-41: flowers
- maybe have negative values = part of a closed hand?

### How to group the tiles for easier algorithm calculating
- put them in groups of 2/3/4 (excluding flowers)
- then copy the tiles into one big list (that is absolute value-d) to check for things like full/half flush

### Needed flags
- all flowers/7 flowers and robbing the 8th (NO OTHER SCORING IS COUNTED)
- 8 pairs (aka. Seven Pairs And A Pung)
- 5/4/3/2 concealed pungs (quads count as a concealed triplet)
- full flush
- half flush
- big 4 winds
- big 3 dragons
- little 4 winds
- little 3 dragons
- ready hand
- win within 5(-10) discards (i guess i gotta figure out this one)
- all revealed/closed hand
- full straight (closed and open)
- all pungs
- all chows (with(out) flowers and honors)
- single/closed wait

**need to finish the list, getting tired LUL**
