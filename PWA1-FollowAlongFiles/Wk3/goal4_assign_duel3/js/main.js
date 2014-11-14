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
    var fighter1_txt = document.querySelector("#ww").querySelector("p"); //
    var fighter2_txt = document.querySelector("#bw").querySelector("p"); //
    var round_txt = document.querySelector("h5"); //
    var button = document.getElementById("fight_btn"); //

    //Click Event
    button.addEventListener("click", fight, false); //

    var fighters = [
    {
        name:"kabal", //
        damage: 20, //
        health: 100 //
    },
    {
        name:"Kratos", //
        damage: 20, //
        health: 100 //
    }];

    //initiate round
    var round = 1; //Created variable round and set it equal to 0

    //Initialize DOM innerHTML text for top of HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!"; //
    fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health; //
    fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health; //

    function fight(){ //Created function fight

        //Alert fighters name and health
        fighter1_txt.innerHTML = fighters[0].name + ":   " + fighters[0].health; //
        fighter2_txt.innerHTML = fighters[1].name + ":   " + fighters[1].health; //

            //Determine Damage
            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage *.5); //
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage *.5); //


            //inflict damage
            fighters[0].health -=f1; //fighter1 damage equals f1 minus fighter1 health
            fighters[1].health -=f2; //fighter2 damage equals f2 minus fighter2 health

            console.log(fighters[0].health,fighters[1].health); //Printed to the console both players health and name after damage was taken

            //check for winner
            var result = winnerCheck(); //Created variable result and set it equal to winnerCheck() which will check if there is a winner yet
            console.log(result); //Printed the result
            round_txt.innerHTML = "ROUND #" + round + " Results:"; //
            round++; //
            if (result==="no winner") //If statement with an argument result is equal to "no winner"
            {
                fighter1_txt.innerHTML = fighters[0].name + ": " + fighters[0].health; //
                fighter2_txt.innerHTML = fighters[0].name + ": " + fighters[0].health; //

            } else{ //else statement
                fighter1_txt.innerHTML = result; //
                fighter2_txt.innerHTML = ""; //

                //Disable the button
                button.removeEventListener("click", fight, false);

                document.querySelector ('.buttonblue').innerHTML = 'DONE!!!';


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
