//-------------------------------------- Simple Object --------------------------------------------


// let stud1 = { name : "Jenni", mark1 : 87, mark2 : 68, mark3 : 98};
// let stud2 = {
//     name : "Jisoo",
//     mark1 : 67,
//     mark2 : 87,
//     mark3 : 78
// };
// let stud3 = new Object();
// stud3.name = "Lisa";
// stud3.mark1 = 78;
// stud3.mark2 = 90;
// stud3.mark3 = 65;
// let stud4 = {};
// stud4.name = "Rose";
// stud4.mark1 = 65;
// stud4.mark2 = 89;
// stud4.mark3 = 56;
// console.log(stud1, stud2, stud3, stud4);
// console.log(stud1.name, stud2.name, stud3.name, stud4.name);
// console.log(stud1["mark1"], stud2["mark1"], stud3["mark1"], stud4["mark1"]);
// console.log(stud1["mark2"], stud2["mark2"], stud3["mark2"], stud4["mark2"]);
// console.log(stud1["mark3"], stud2["mark3"], stud3["mark3"], stud4["mark3"]);


//----------------------- Adding new properties --------------------------------
// let person = {
//     firstName : "Jansi",
//     lastName : "Devi",
//     age : 20
// };
// person.nationality = "Indian";
// console.log(person);
// let text = "";
// for (let i in person)
// {
//     text += person[i] + " ";
// }
// console.log(text);
// console.log(person.firstName, person.lastName, "is", person.nationality);


//------------------------ Deleting properties -----------------------------------


// delete person.age;
// console.log(person);
// console.log(person.firstName, person.age, "years old.");


//------------------------ Nested Object ------------------------------------------


// let person1 = {
//     name : "IU",
//     age : 28,
//     colors : {
//         col1 : "Red",
//         col2 : "Blue",
//         col3 : "Green",
//         col4 : "Purple"
//     },
//     place : "Korean",
// }
// console.log(person1);
// console.log(person1.name, person1.colors["col1"], person1["colors"]["col2"]);


//-------------------------- Nested Array and Object --------------------------------------


// let person2 = {
//     brandname : "Bts",
//     noofperson : 7,
//     companyName() 
//     {
//         console.log("Big Hint")
//     },
//     name : [
//         {
//             p1 : "RM",
//             song : [
//                 "Persona", "Flower", "Dimple"
//             ]
//         },
//         {
//             p1 : "Jin",
//             song : [
//                 "Epiphany", "Life Goes On", "ON"
//             ]
//         },
//         {
//             p1 : "Suga",
//             song : [
//                 "SeeSaw", "AugustD", "Truth and Told"
//             ]
//         } 
//     ],
//     place : "Korea"
// };
// let text = "";
// console.log(person2);
// console.log(person2.name);
// person2.companyName();
// for (let i in person2.name)
// {
//     text += person2.name[i].p1 + "\n";
//     for (let j in person2.name[i].song)
//     {
//         text += person2.name[i].song[j] + "\n";
//     }
// }
// console.log(text);