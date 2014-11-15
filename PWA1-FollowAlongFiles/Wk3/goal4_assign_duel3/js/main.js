/**
 * Duel Fight Game - FINISHED
 * Patrick Little
 * Date: 11/12/14
 * Week#3:{homework} - ANALYZE Duel #3

 Assignment 3
 Part 2/3 of series
*/

// self-executing function
(function(){ //Creating a function without a name

    console.log("FIGHT!!!"); //Printing to the console "FIGHT! ! !"

    //Define DOM pieces
    var fighter1_txt = document.querySelector("#kabal").querySelector("p"); //Name kabal
    var fighter2_txt = document.querySelector("#kratos").querySelector("p"); //Name kratos
    var round_txt = document.querySelector("h5"); //h5 tag which says click to start fight
    var button = document.getElementById("fight_btn"); //Fight button

    //Click Event
    button.addEventListener("click", fight, false); //button for click event

    var fighters = [
    {
        name:"kabal", //array for variable fighters, this is the name for fighter 1
        damage: 20, //array for variable fighters, this is the damage for fighter 1
        health: 100 //array for variable fighters, this is the health for fighter 1
    },
    {
        name:"kratos", //array for variable fighters, this is the name for fighter 2
        damage: 20, //array for variable fighters, this is the damage for fighter 2
        health: 100 //array for variable fighters, this is the health for fighter 2
    }];

    //initiate round
    var round = 1; //Created variable round and set it equal to 0

    //Initialize DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!"; //innerHTML of round_txt
    fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health; //writing text on screen name and health
    fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health; //writing text on screen name and health

    function fight(){ //Created function fight

        //Alert fighters name and health
        fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health; //alert fighters name and health for fighter 1
        fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health; //alert fighters name and health for fighter 1

            //Determine Damage
            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5); //damage for fighter1
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5); //damage for fighter2


            //inflict damage
            fighters[0].health -=f1; //fighter1 damage equals f1 minus fighter1 health
            fighters[1].health -=f2; //fighter2 damage equals f2 minus fighter2 health

            console.log(fighters[0].health,fighters[1].health); //Printed to the console both players health and name after damage was taken

            //check for winner
            var result = winnerCheck(); //Created variable result and set it equal to winnerCheck() which will check if there is a winner yet
            console.log(result); //Printed the result
            round_txt.innerHTML = "ROUND #" + round + " Results:"; //the round number
            round++; //increment the round
            if (result==="no winner") //If statement with an argument result is equal to "no winner"
            {
                fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health; // fighter1 name and health
                fighter2_txt.innerHTML = fighters[1].name + ": " + fighters[1].health; // fighter 2 name and health

            } else{ //else statement
                fighter1_txt.innerHTML = result; //result fighter1 innHTML
                fighter2_txt.innerHTML = ""; //fighter 2 innerHTML

                //Disable the button
                button.removeEventListener("click", fight, false); //disable button

                document.querySelector('.buttonblue').innerHTML = 'DONE!!!'; //query select buttonblue = to "done"


            }
    }

    function winnerCheck(){ //Created function winnerCheck
        var result="no winner"; //Variable result is set to equal "no winner"
        if (fighters[0].health <1 && fighters[1].health <1) //if statement with arguments fighter1<1 and fighter2<1
        {
            result = "You Both Die"; //Result "You Both Die"
        } else if(fighters[0].health<1){ //Else if statement with argument fighter1 health<1
            result =fighters[1].name+ " WINS!!!" // result  fighter2 "WINS!!!"
        } else if (fighters[1].health<1) //Else if statement with argument fighter2 health<1
        {
            result = fighters[0].name+ " WINS!!!" // result fighter1 "WINS!!!"
        }
       return result; // Return result
    }


})();
