//Patrick Little
//Nov 4 2014
//Practice Functions

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){

        //CODE GOES HERE
        arr = [1, 2, 3, 4, 5]
        avgNumbers = (arr[1] + arr[2] + arr[3] +arr[4] +arr[0])/5
        return avgNumbers;
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

    var fName = "James";

        //PUT FUNCTION HERE
    var fullName = function(var1){
        var firstName = var1
        var lastName = 'Bond'
        var name = firstName + '' + lastName;
        console.log(name);
        return name;
    }
    var nameFN = fullName(fName);
    console.log(fName);

    //--------------------------------------------------------
    console.log("3. word count");
    var text = "this is test text that is being used as input to a function"

        //PUT FUNCTION HERE
    function wordCount(text){
        wordCount = text.length;
        return wordCount;
    }

    console.log(wordCount(text));

    //--------------------------------------------------------
    console.log("4. sentence char count");
    var ipsum = ["hello what is your name?", "My name is aaron what about you?", "Hi"];
        //PUT FUNCTION HERE
    function charCount(ipsum){
        charCount = ipsum.length;
        return charCount;
    }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");
    var word = 'Javascript';
        //PUT FUNCTION HERE
    function vowelsInWord(word){


    }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE
    function findNum(){

    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();