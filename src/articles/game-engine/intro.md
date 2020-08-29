# One Man's Quest to Make a Universe - Beginning
## Introduction
I'm not sure what state the world will be in after the COVID-19 pandemic has finally run its course. But no matter if the people reading this are zombified flu victims or the last dregs of humanity waiting for the world to move on in a bunker; the pandemic and its associated lock-downs gave the world a lot of time for personal projects.

These articles will be about my experiences building a game engine from scratch (so less of a universe and more of a way to build a universe).

## Why, Oh God Why?
**My aim here is not to create a game;** it would be so much easier to use one of the many existing (and sometimes free) engine offerings out there. Unity, Unreal and the Source engine are all much better than anything I could ever make.

Much more importantly, they already exist.

My aim is to walk the same roads these projects have already walked; making all the wrong decisions and learning the many many ways not to make a game engine.

(And maybe, just maybe, have something usable at the end of it)

## The Broad Strokes
A game needs to do an awful lot of things to make a universe. So the game engine's job is to hide away the parts that are common to most games so that the games can do their jobs:
- Defining what things are in the game world.
- Defining what these things do.
- Present these things to the players.

In other words, content, logic and presentation.

To help the game do this we will:

1. **Render the content ~** Displaying lit and shadowed 3D content is something that is very common for today's games to do, so it makes sense for the engine to handle this.
2. **Load the content ~** This include core game content on the disk, custom content and content loaded from the vast wild-lands of the internet.
3. **Add physical interactions ~** Adding realistic physics is a good way for a game to create an enthralling world, and is a common tool in engines.
4. **Synchronise world state between players ~** Every multi-player game needs to do this so it is a great task for the game engine to offload from the game itself.

On a more technical point the engine can take the form of either a framework or a library. 

This is often a blurry distinction, but I use the terms as such:

**Framework ~** Contains the main entry-point of the application and is configured by the application to add functionality. I consider most engines to fall into this category; you define the game level layout and logic but the engine is the one leading the show.

**Library ~** The application tells the library what to do through a specified API but the application controls what happens. (If it wanted to the application could ignore the library completely)

Perhaps naïvely I have decided to make the engine a collection of separate libraries.

This will allow me to build each component in isolation and keep them very loosely coupled. It also means that any games using the library will have a lot more control over how they will use each of the components of the engine and the customisability that will come with this control.

## What We Have Already