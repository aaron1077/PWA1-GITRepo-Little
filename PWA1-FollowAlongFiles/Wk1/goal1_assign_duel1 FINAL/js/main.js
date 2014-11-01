/**
 * Duel Fight Game - FINISHED
 * Patrick Little
 * Date: 4/09/13
 * Week#1:{homework} - ANALYZE Duel #1

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){ //Creating a function without a name

    console.log("FIGHT!!!"); //Printing to the console "FIGHT! ! !"

    //player name
    var playerOneName = "Spiderman"; //Created variable playerOneName and set it equal to "Spiderman"
    var playerTwoName = "Batman"; //Created variable playerTwoName and set it equal to "Batman"

    //player damage
    var player1Damage = 20; //Created variable player1Damage and set it equal to 20
    var player2Damage = 20; //Created variable player2Damage and set it equal to 20

    //player health
    var playerOneHealth = 100;//Created variable playerOneHealth and set it equal to 100
    var playerTwoHealth = 100;//Created variable playerTwoHealth and set it equal to 100

    //initiate round
    var round=0; //Created variable round and set it equal to 0

    function fight(){ //Created function fight
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //Alerted playerOneName, playerOneHealth, playerTwoName, playerTwoHealth, and start
        for (var i = 0; i < 10; i++)//Created a for loop and variable i, used 3 arguments in the loop, i = 0, i<10, and i++
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; //Created variable minDamage1 and set it equal to player1Damage * .5
            var minDamage2 = player2Damage * .5; //Created variable minDamage2 and set it equal to player2Damage * .5
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); //Created variable f1, used math.random to randomize the damage
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); //Created variable f2, used math.random to randomize the damage

            //inflict damage
            playerOneHealth-=f1; //playerOneHealth equals f1 minus playerOneHealth
            playerTwoHealth-=f2; //playerTwoHealth equals f2 minus playerTwoHealth

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //Printed to the console both players health and name after damage was taken

            //check for victor
            var result = winnerCheck(); //Created variable result and set it equal to winnerCheck() which will check if there is a winner yet
            console.log(result); //Printed the result
            if (result==="no winner") //If statement with an argument result is equal to "no winner"
            {
                round++; //Increment round
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //Alerted both players name and health and round over

            } else{ //else statement
                alert(result); //Alert the result
                break; //Break command is to break out of the loop if the fight ends before ten rounds
            };

          };
    };

    function winnerCheck(){ //Created function winnerCheck
        var result="no winner"; //Variable result is set to equal "no winner"
        if (playerOneHealth<1 && playerTwoHealth<1) //if statement with arguments playerOneHealth<1 and playerTwoHealth<1
        {
            result = "You Both Die"; //Result "You Both Die"
        } else if(playerOneHealth<1){ //Else if statement with argument playerOneHealth<1
            result =playerTwoName+" WINS!!!" // result playerTwoNAme plus "WINS!!!"
        } else if (playerTwoHealth<1) //Else if statement with argument playerTwoHealth<1
        {
            result = playerOneName+" WINS!!!" // result playerOneNAme plus "WINS!!!"
        };
       return result; // Return result
    };

    /*******  The program gets started below *******/
    fight(); //Call the function fight which starts the program

})();