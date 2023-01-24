#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
// import gradient from 'gradient-string';
//import chalkAnimation from 'chalk-animation';
//import chalk from 'chalk/index.js';
// import figlet from 'figlet';
//import { createSpinner } from 'nanospinner';


class Adventure {
    public start() {
      console.log(chalk.greenBright("Welcome to adventure game!"))
        this.intro();
    }

    private intro() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'You are in a dark forest, what do you want to do?',
                choices: ['Explore', 'Leave']
            }
        ])
        .then((answers) => {
            switch (answers.choice) {
                case 'Explore':
                    this.explore();
                    break;
                case 'Leave':
                    console.log("You leave the dark forest and return home safely.");
                    break;
            }
        });
    }

    private explore() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'You come across a fork in the road, which way do you want to go?',
                choices: ['Left', 'Right']
            }
        ])
        .then((answers) => {
            switch (answers.choice) {
                case 'Left':
                    console.log("You find a beautiful waterfall and decide to take a rest.");
                    break;
                case 'Right':
                    this.continue();
                    break;
            }
        });
    }


     private continue() {
        inquirer.prompt([{
            type: 'list',
            name:'choice',
            message: 'You goes inside and hear sounds of wolf growling and birds chippring, you continue to walk until you saw a light coming from a left way, will u go? ',
            choices: ['yes', 'no'],
        }
    ]).then((answers:any) => {
        switch(answers.choice){
            case 'yes':
                this.end();
                break;

                case "no":
                    console.log("You turn back and run until you were outside the dark forest");
                    break;
        }
    });

     }
     private end(){
        inquirer.prompt([{
            type: "list",
            name:'choice',
            message: 'You walk on that way and find there is light coming out from a box you go near that box and found treasure hunt. Will you take it?',
            choices: ['yes', 'no'],
        }
    ]).then((answers:any) => {
        switch(answers.choice){
            case  "yes":
              console.log("You carry that treasure and went home happily.")
                break;

                case "no":
                    console.log("You didnt take anything from that hunt and went home smiling to tell this story to your friends.");
                    break;
        }
    });

     }
}

const adventure = new Adventure();
adventure.start();














