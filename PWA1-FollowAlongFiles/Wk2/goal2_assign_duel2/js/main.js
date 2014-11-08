/**
 * Duel Fight Game - FINISHED
 * Patrick Little
 * Date: 11/07/14
 * Week#2:{homework} - ANALYZE Duel #2

 Assignment 2
 Part 2/3 of series
*/

// self-executing function
(function(){ //Creating a function without a name

    console.log("FIGHT!!!"); //Printing to the console "FIGHT! ! !"

    //player name
    var fighter1 = ["sabretooth", 20, 100]; //Created variable playerOneName and set it equal to "sabretooth"
    var fighter2 = ["wolverine", 20, 100]; //Created variable playerTwoName and set it equal to "wolverine"

    //initiate round
    var round = 1; //Created variable round and set it equal to 0

    function fight(){ //Created function fight

        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]); //Alerted array  fighter1 and fighter2 health and name

        for (var i=0; i<10; i++)//Created a for loop and variable i, used 3 arguments in the loop, i = 0, i<10, and i++
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighter1[1] * .5; //Created variable minDamage1 and set it equal to fighter1 damage* .5
            var minDamage2 = fighter2[1] * .5; //Created variable minDamage2 and set it equal to fighter2 Damage * .5
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1); //Created variable f1, used math.random to randomize the damage
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2); //Created variable f2, used math.random to randomize the damage

            //inflict damage
            fighter1[2]-=f1; //fighter1 damage equals f1 minus fighter1 health
            fighter2[2]-=f2; //fighter2 damage equals f2 minus fighter2 health

            console.log(fighter1[2]+" "+fighter2[2]); //Printed to the console both players health and name after damage was taken

            //check for victor
            var result = winnerCheck(); //Created variable result and set it equal to winnerCheck() which will check if there is a winner yet
            console.log(result); //Printed the result
            if (result==="no winner") //If statement with an argument result is equal to "no winner"
            {
                round++; //Increment round
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter1[0]+":"+fighter1[2]); //Alerted both players name and health and round over

            } else{ //else statement
                alert(result); //Alert the result
                break; //Break command is to break out of the loop if the fight ends before ten rounds
            };

          };
    };

    function winnerCheck(){ //Created function winnerCheck
        var result="no winner"; //Variable result is set to equal "no winner"
        if (fighter1[2]<1 && fighter2[2]<1) //if statement with arguments fighter1<1 and fighter2<1
        {
            result = "You Both Die"; //Result "You Both Die"
        } else if(fighter1[2]<1){ //Else if statement with argument fighter1 health<1
            result =fighter2[0]+" WINS!!!" // result  fighter2 "WINS!!!"
        } else if (fighter2[2]<1) //Else if statement with argument fighter2 health<1
        {
            result = fighter1[0]+" WINS!!!" // result fighter1 "WINS!!!"
        };
       return result; // Return result
    };

    /*******  The program gets started below *******/
    fight(); //Call the function fight which starts the program

})();