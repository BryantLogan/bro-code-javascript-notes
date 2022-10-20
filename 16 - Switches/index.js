// switch =     statement that examines a value
//              for a match against many case clauses.
//              More efficient than many "else if" statements

// let grade = "C";

// if(grade == "A"){
//     console.log("You did great!");
// }
// else if(grade == "B"){
//     console.log("You did good!");
// }
// else if(grade =="C"){
//     console.log("You did okay!");
// }
// else if(grade == "D"){
//     console.log("You passed... barely!");
// }
// else if(grade == "F"){
//     console.log("You failed!");
// }
// else{
//     console.log(grade, "is not a letter grade!")
// }

// let grade = "A";

// switch(grade){
//     case "A":
//         console.log("You did great!");
//         break;
//     case "B":
//         console.log("You did good!");
//         break;
//     case "C":
//         console.log("You did okay!!");
//         break;
//     case "D":
//         console.log("You passed... barely!");
//         break;
//     case "F":
//         console.log("You FAILED!");
//         break;
//     default:
//         console.log(grade, "is not a letter grade!")           
// }

let grade = 65;

switch(true){
    case grade >= 90:
        console.log("You did great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!!");
        break;
    case grade >= 60:
        console.log("You passed... barely!");
        break;
    case grade > 60:
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, "is not a letter grade!")           
}