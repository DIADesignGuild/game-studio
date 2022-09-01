# Mahjong Calculator

[https://mahjong-calculator.update.sh/](https://mahjong-calculator.update.sh/)

This is a clone project of a Mahjong hand guessing game made using React, Typescript, and Tailwind.

_To Run Locally:_
Clone the repository and perform the following command line actions:

```bash
$ cd mahjong-calc
$ npm install
$ npm run start
```

_To build/run docker container:_

```bash
$ docker build -t game .
$ docker run -d -p 3000:80 game
```

open http://localhost:3000 in browser.

Uses [FluffyStuff/riichi-mahjong-tiles](https://github.com/FluffyStuff/riichi-mahjong-tiles) as icons for the tiles, which are licensed under [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).