// var stdObj = {

//     stdName: "Muhammad Talha Ali",
//     stdGetName: function () {
//         console.log(this.stdName);
        
//     },

//     stdAge: 25,
//     stdRollNo: 1011,
//     stdEmail: "talhaali163@gmail.com",
//     stdCity: "Karachi"

// };



// stdObj.stdCourses = ["HTML","CSS","JS","React"];

// console.log(stdObj);



// stdObj.stdQualification = {
//     Education: "Batchelor",
//     CGPA: "3.5",
//     Address: {
//         city: "Karachi",
//         Country: ["Pakistan","China","Iran","Turkey"]
//     }
// };

// stdObj.stdRollNo = 9489;

// console.log(stdObj.stdQualification.Address.Country[0]);

// console.log(`My name is ${stdObj.stdName}. I am ${stdObj["stdAge"]} years old.`);

// console.log(stdObj.stdAge);

// console.log(stdObj["stdEmail"]);

// console.log(stdObj);


// stdObj.stdQualification.Address.Country = ["Pakistan","China","Iran","Turkey","Iraq"];

// console.log(stdObj);


// delete stdObj.stdAge;

// console.log(stdObj);



// var response = "stdEmail" in stdObj;

// console.log(stdObj);

// function Student(name,rollno,email,city,gender) {
//     this.stdName = name;
//     this.stdRollNo = rollno;
//     this.stdEmail = email;
//     this.stdCity = city;
// }

// Student.prototype.stdGetGender = function(){
//     console.log("gender");
    
// }

// var student1 = new Student("Talha",25,9489,"talhaali163@gmail.com","Karachi","Male");

// var student2 = new Student("Arsalan",26,9060,"arsalan@gmail.com","Karachi","Male");

// console.log(student1);

// console.log(student2);

// console.log(student1.stdGetGender());

var studentObj1 = {
    stdName: "Muhammad Talha Ali",
    stdAge: 25,
    stdRollNo: 1011,
    stdEmail: "talhaali163@gmail.com",
    stdCity: "Karachi"
}

for(var key in studentObj1){
    console.log(key.studentObj1);
    
}

for(var key in studentObj1){
    console.log(studentObj1[key]);
    
}












