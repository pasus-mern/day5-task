//question 1
// for the given JSON iterate over all for loops
//for-in loop
var resume = {
    "name": "PASUPATHI",
    "email": "xyz@gmail.com",
    "phone":"1234567890",
    "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
"and do the smart work for the consistent growth of the company."],
    "LOCATION": {
      "address": "xyz",
      "postalCode": "123456",
      "city": "xyz",
      "District":"xyz",
      "State":"xyz",
    },
  

  "EDUCATION": {
    "college":"Anna University",
    "Degree": "MBA",
    "Duration": "2017-2019",
    "cgpa": "7.8",
  },
  
  "LANGUAGES": {
    "language": "Tamil , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "based on true storeies",
    
  },
  
};
for(var i in resume){
    console.log(i,resume[i]);
}



//2nd loop
//for loop iteration
var resume = {
  "name": "PASUPATHI",
  "email": "xyz@gmail.com",
  "phone":"1234567890",
  "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
"and do the smart work for the consistent growth of the company."],
  "LOCATION": {
    "address": "xyz",
    "postalCode": "123456",
    "city": "xyz",
    "District":"xyz",
    "State":"xyz",
  },


"EDUCATION": {
  "college":"Anna University",
  "Degree": "MBA",
  "Duration": "2017-2019",
  "cgpa": "7.8",
},

"LANGUAGES": {
  "language": "Tamil , English",
},
"INTEREST": {
  "name": "Watching movie",
  "keywords": 
    "based on true storeies",
  
},

};

for(var i = 0; i<resume.length; i++){
  console.log(resume[i]);
}


// 3.for of -loop iteration

const num = [10,20,30,40,50];

for(var newnum of num){
  console.log(newnum);
}
//output
//10
//20
//30
//40
//50

//4. for each-loop iteration

let str = [1,2,3,4,5];
str.forEach(element => {
  console.log(element)
});
//output
//1
//2
//3
//4
//5


//question 2
//2.create your own resume for JSON format
var resume = {
    "name": "PASUPATHI",
    "email": "xyz@gmail.com",
    "phone":"1234567890",
    "SUMMARY": ["Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis",
"and do the smart work for the consistent growth of the company."],
    "LOCATION": {
      "address": "xyz",
      "postalCode": "123456",
      "city": "xyz",
      "District":"xyz",
      "State":"xyz",
    },
  

  "EDUCATION": {
    "college":"Anna University",
    "Degree": "MBA",
    "Duration": "2017-2019",
    "cgpa": "7.8",
    
  },
  
  "LANGUAGES": {
    "language": "Tamil , English",
  },
  "INTEREST": {
    "name": "Watching movie",
    "keywords": 
      "based on true storeies",
    
  },
};
console.log(resume);

