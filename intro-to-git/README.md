# Hack on the Hill 9 - Intro to Version Control: Git

**Date**: February 26, 2022

**Location**: Zoom

**Teacher**: [Katelyn Yu](https://github.com/katelynsyu)

Welcome. welcome to our Intro to Git Version Control workshop's README!!! I hope this workshop helps you 
understand git a little better, so happy hacking!

## Resources
- [Slides](https://docs.google.com/presentation/d/11Gb0WyIzhGyTfzxS0bg_IhUuvTgwYifyVpzmMK8aOmg/edit#slide=id.g113b2df1613_0_4)
- Workshop Recording (coming soon)

## What we'll be learning today
- [Introducing git](#introducing-git)
    - [What is git?](#what-is-git)
    - [Why do we use git?](#why-do-we-use-git)
    - [Installing git](#installing-git)
    - [Configuring git](#configuring-git)
    - [Conceptualizating git](#conceptualizing-git)
    - [The git workflow](#the-git-workflow)
    - [More helpful workflow commands](#more-helpful-workflow-commands)
- [Collaborating with GitHub](#collaborating-with-github)
    - [What is GitHub](#what-is-github)
    - [Setting up GitHub](#setting-up-github)
- [Branching](#branching)
    - [What is branching?](#what-is-branching)
    - [Why do we branch?](#why-do-we-branch)
    - [How do we branch?](#how-do-we-branch)
- [Merging](#merging)
    - [What is merging?](#what-is-merging)
    - [Merge conflicts](#merge-conflicts)
    - [How do we merge?](#how-do-we-merge)
- [Extra Resources and Tidbits](#extra-resources-and-tidbits)
    - [Helpful Tidbits (Git Edition)](#helpful-tidbits-git-edition)
    - [Helpful Tidbits (Bash Edition)](#helpful-tidbits-bash-edition)
    - [Extra Resources](#extra-resources)

## Introducing git
### What is git?
Git is an *open-source, distributed version control software*. What does that mean?

Let's side track and talk about video games first, specifically save points.
Save points you to save all the progress that you have made so far. Essentially, they allow you 
to save the current state of your game. Then at some point down the line, say you make a mistake. 
Since you have a save point, you can go back to the state the game was in when you saved it earlier 
and continue playing from there, correcting your mistake without having to replay your game from the beginning. 

Right. Amazing. Cool. How do video games have anything to do with git?

Well, **save points** are to **video games** as **git** is to **program development**. (If you've never seen this 
kind of logical analogy before, I envy your clearly more-idyllic-than-mine childhood.) All this means is that git 
works as the save points of program development. Git, as a version control software, helps you keep track of the 
versions of your program the same way that save points keep track the versions your game went through. With git, 
you are able to save snapshots of the states of all of our files. By state, I mean what files are in your project 
folder and what the code looks like in each of those files. Using git, you can refer back to these snapshots at a 
later time to see what has changed between then and now. You can even revert your program to that previous state.

Taking snapshots with git is very different from just saving your file. Saving your file only tracks the most recent 
version of that file. Once you save, previous saved version of the file disappear and are no longer accessible. 
With git, those previous versions are still accessible, making git a very powerful tool to have in your metaphorical 
back pocket.

### Why do we use git?
Let's go back to that video game analogy of ours. Imagine you're zipping through your video game, and you're having 
a great time, and no, you will not be using save points because save points are for noobs. Then, BOOM. You made a 
mistake. You died! Game Over! And look at that... you don't have a save point. You have to start the game all over 
again—goodbye progress, hello new game. Sucks right?

The same thing is gonna happen to your code. You can definitely yolo it and not use version control softwares like 
git and maybe things will work out. However, I guarantee that the larger your project is and the more intense coding 
becomes, the higher chance that something will be messed up at some point. Then, you'll have a minor aneurysm trying 
to figure out what went wrong. You might have to replace your ctrl-z buttons and the world's on fire as your brain 
shuts down as you try to decipher 150 lines of error messgaes that weren't there 15 minutes ago.

*TL;DR: please use git. I'm not trying to make your life harder! I'm honestly trying to make it easier, and though 
git might be a little difficult to begin learning, I swear that the benefits outweigh the drawbacks.*

### Installing git
Git is a command line tool accessed through the terminal. This means that you have to install git in the terminal.
To find the terminal, go to your finder and type in 'terminal'. Your terminal should pop up. If you are a windows user, 
you might find it by typing 'command prompt' or 'powershell'. 

**Note**: commands that are supposed to be typed in the terminal will be prepended with a `$`. When typing these 
commands into the terminal, don't type the `$`. For example if the command given is `$ git init`, only type `git init` 
into your terminal.

- **Linux**

In your terminal type:
```git
$ sudo apt-get install git-all
```
This will install git for you. Congrats!

- **Mac**

Macs have a two-step installation process.

First, you have to install the Homebrew Package Manager with the command:
``` git
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then, after an unearthly amount of waiting time, you get to type:
``` git
$ brew install git
```
to install git. Voilà! You've got git on your computer now!

- **Windows**

Congratulations, windows-users! You special cookies get to follow this link right here: 
[direct installation](https://gitforwindows.org).
That link will give you a thorough process outline to downloading git onto your device. Godspeed and good luck :)

### Configuring git

You have to configure git so that it knows stuff about you. This is important because if you are working in a git
repository with a bunch of people, git can list who exactly created what change at what time and how to get in
contact with them. 

What do I mean by repository? A repository (often called a rep) is a fancy name for the collection of all files 
in your folder that gill will be tracking (ie. paying attention to, recording the history of) and the history of 
changes made to them.

You can set your name in git using the command:
``` git
$ git config --global user.name "John Doe"
```

Set your email in git with this command:
``` git
$ git config --global user.email johndoe@example.com
```

### Conceptualizing git

***What does saving with git look like?***

Conceptually, imagine the whole set of save points you make to exist like this diagram here:

![Snapshot History Diagram](./images/CommitHistory.png)

Each circle represents a save point, a snapshot of the state your files were in when you saved that time.
Each circle points to the previous one: E to D, D to C, etc. This means that snapshot E, the snapshot that has no
arrows pointing to it, is the latest snapshot, the latest saved state of the program. E points to D which is the
second-to-last saved  version of the program. So on, so forth. Then, snapshot A, which does not point to a snapshot,
is the first saved version of the program. In this way, git allows us to create a timeline of the evolution of our 
program.

### The git workflow

How do we go from our project files on our computer to the timeline of save points? Now introducing: the git workflow!

The git workflow has three stages: the working directory, the staging area, and the repository. Let's break this down.

![Git Workflow](./images/GitWorkflow.png)

- **The Working Directory**

The working directory exists on your personal device. It is the folder you are working in to create your project (ie.
the folder that has all the files that you wnat git to keep snapshots of).

In order to save the state of the files in the working directory, you have to introduce git to it. How?
Type this command in your project folder:
``` git
$ git init
```
`$ git init` creates an empty git repository in the folder you are currently in in the terminal. What does this mean? It 
means that by typing this command, git will begin to track what happens in the folder it is in. Since it has not been 
told to save anything yet, it has an empty timeline, like save point slots that have no save points in them.

- **The Staging Area**

The staging area is the next part of the git workflow, but what is it?

The staging area holds all the changes you've made to your files that you want git to include in the next "save point" 
of your program. The staging area tells git to pay attention to the files that are included here because the developer
wants to track the changes to these files over time.

How do you get files from the working directory to the staging area? Use this command:
``` git
$ git add [file(s)/folder(s)]
```
Once you have gotten your project to a state that you would like to save as a snapshot, call the `$ git add` command and
list the files and folders that you want included in the snapshot. If you would just like to include everything in the
working directory, you can use the command `$ git add .` This command does not create the snapshot. It only puts 
everything that needs to be added to the snapshot in one place.

- **The Repository**

The final stage of the workflow is the repository. The repository is the collection of all the snapshots of the project 
in a timeline, enabling easy tracking regarding how the program has changed over time. This is essentially the diagram 
of circles displayed below that I stole from the [conceptualizing git](#conceptualizing-git) section.

![Snapshot History Diagram](./images/CommitHistory.png)

What are these snapshots that I keep mentioning though? We can answer this now with our understanding of the git workflow.
Snapshots are everything that was in the staging area bundled up in a wrapper and displayed as one cohesive object.

How do we get our files from the staging area into a snapshot in the repository? You need to use the command `$ git commit`.
This command packages up everything in the staging area into a commit and puts the commit into the repo. What is a commit?
A commit is the technical term for a snapshot of the repo. It stores who made the changes that were saved and when the
changes were made. However, I recommend that you use this version of git commit command:
``` git
$ git commit -m "[your succinct and informative commit message]"
```
This version of the command allows you to give a commit message for each commit made. This is because commit messages 
explain why the changes in the commit were made and allow viewers of the repository to understand the motivation behind each 
incremental change to the project. Thus, including a commit message is considered good practice.

### More helpful workflow commands

- `$ git status`

This command will display which files you have changed since your last commit. It will also tell you whether you have staged 
these files or not (ie. Have you put these files in the staging area? Is git tracking changes to these files?)

- `$ git log`

This command allows you to see the list of commits in a repo with the top entry being the most recent and subsequent commits 
being progressively older. It essentially gives a text version of this commit history diagram I revived from the 
[conceptualizing git](#conceptualizing-git) section.

![Snapshot History Diagram](./images/CommitHistory.png)

For each snapshot in the repo, `$ git log` will list who commited, when they commited, and the commit message. This is why 
commit messages are so important to include. With commit messages, people know what a commit does and they can easily track 
how a program evolved.

- `$ git restore [file(s)]`

This command undoes the changes you applied to your working direcory until it matches the stat it was in when you last 
committed. It essentially allows you to start programming from your last save point.

- `$ git restore --staged [file(s)/folder]`

Say you staged a file, then you decide that you actually don't want git to track this file or you don't want your next commit
to include the changes you added to this file. Use `$ git restore --stages [file]` to unstage these files, and then you can
commit as normal or continue working.

## Collaborating with GitHub

Git is actually very useful when you want to collaborate on a project with others. How do we do it though?
Like every multiplayer game out there, we need a server or some space on the internet in whcih we can see what other people 
are doing in the game and interact with their progress to help us finish our game.
...Can we use google drive? Nah. Hold onto your socks, folks, we're gonna talk about collaborating using GitHub.

### What is GitHub?
### Setting up GitHub

## Branching
### What is branching?
### Why do we branch?
### How do we branch?

## Merging
### What is merging?
### Merge conflicts
### How do we merge?

## Extra Resources and Tidbits
### Helpful Tidbits (Git Edition)
### Helpful Tidbits (Bash Edition)
### Extra Resources