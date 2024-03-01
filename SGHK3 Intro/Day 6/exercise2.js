//  1. In this activity, the use a variable to put in a value of score.

let score = 0;
let grade = null;

// 2. Based on the score in the variable, the code uses conditional statements (if, else if, and else) to determine the corresponding grade. 

// 3. If the score is 90 or above, it assigns the grade 'A'. Print the grade in the console. 

// 4. If the score is between 80 and 89, it assigns the grade 'B'. Print the grade in the console.

// 5. If the score is between 70 and 79, it assigns the grade 'C'. Print the grade in the console.

// 6. If the score is between 60 and 69, it assigns the grade 'D'. Print the grade in the console.

// 7. Otherwise, if the score is below 60, it assigns the grade 'F'. Print the grade in the console.

if(score>=90){
    grade = "A";
} else if (score>=80 && score<= 89){
    grade = "B";
} else if (score>=70 && score<= 79){
    grade = "c";
} else if (score>=60 && score<= 69){
    grade = "D";
} else if (score < 60){
    grade = "F";
} else {
    grade = "Not graded.";
}

console.log(`Your score of ${score}, graded as: ${grade}.`)
