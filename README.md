# README

# The Game Of Shells

The Game of Shells involves a flat surface, a row of three small containers and a ball small enough to fit underneath each of them.
On each turn of the game the player is shown the ball being placed under one of the containers before the order of the containers is repeatedly shuffled at random.
The player has to guess correctly which container the ball is under in order to win; otherwise they lose.
 
## Available Features

| Feature        |
|----------------|
| Play With Hint |
| Choose Level   |
| Score Board    |

## Tech

- [Node] - 16.14.2
- [Yarn] - 1.22.18
- [React] - 18.0.0
- [Vite] - 2.9.9
- [Jest] - 27.5.0
- [ReduxjsToolKit] - 1.8.2

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd shell-game
yarn install
yarn dev
```


## Run Tests
```sh
cd shell-game
yarn test
```

## Demo

[![Watch the video](./DemoVideo/Demo.png)](./DemoVideo/DemoVideo.mp4)



## Limitations & Infos

- Only once player can choose the shell during a game
- Animations can be improved further
- This whole app can be written as single component, for readability & understanding
  I've added Router/redux/multiple pages only for 
