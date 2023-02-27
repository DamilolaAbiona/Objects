// 1. Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// - Handle of author
// - content,
// - An image link posted by the author of the post
// - Number of views,
// - Number of likes,
function InstagramPost(authorHandle, content, link, numOfViews, numOfLikes) {
  this.handle = authorHandle;
  this.content = content;
  this.link = link;
  this.views = numOfViews;
  this.likes = numOfLikes;
}

// 2. Create 2 Instagram post objects from the constructor function you created above
const simply__dharmy = new InstagramPost(
  "simply__dharmy",
  "Let love lead",
  "<a href='https://instagram.com/simply__dharmy/' title='love Leads'>",
  "11300 views",
  2000
);
console.log(simply__dharmy);
const peterson = new InstagramPost(
  "peterson",
  "Vote Peter Obi",
  "<a href='https://instagram.com/peterson/Nigeria' title='NigeriaDecides'>",
  "39800 views",
  8000
);
console.log(peterson);

// 3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94
//  a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function.
//  b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Musa’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}
const Musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos");
console.log(Musa);
function createJambScores(ENG, GOVT, LIT, CRK) {
  return {
    ENG: ENG,
    GOVT: GOVT,
    LIT: LIT,
    CRK: CRK,
  };
}
Musa.jambscores = createJambScores(70, 85, 82, 94);
console.log(Musa);
// 4. What are the different ways you can clone an object? Give examples for each of them.
// 1. Clone the Object Using Object.assign()
// program to clone the object

// declaring object
const person = {
  name: "John",
  age: 21,
};

// cloning the object
const clonePerson = Object.assign({}, person);

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = "Peter";

console.log(clonePerson.name);
console.log(person.name);
//2. Clone the Object Using Spread Syntax
// program to clone the object
// declaring object
const Dperson = {
    name: 'Hannah',
    age: 26,
}

// cloning the object
const clonePersonn = { ... Dperson}

console.log(clonePersonn);

// changing the value of clonePerson
clonePersonn.name = 'Shola';

console.log(clonePersonn.name);
console.log(Dperson.name);
// 3.Clone the Object Using JSON.parse()

// declaring object
const person2 = {
    name: 'Funke',
    age: 11,
}

// cloning the object
const clonePerson2 = JSON.parse(JSON.stringify(person2));

console.log(clonePerson2);

// changing the value of clonePerson
clonePerson.name = 'Bolu';

console.log(clonePerson2.name);
console.log(person2.name);

/*5. As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

- const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
  }

- Using any of the enumeration methods taught in class (for…in or for..of), log out each of the presidential candidates in this format:
  ’Omoyele Sowore is the presidential candidate of AAC’ */

  const presidentialCandidates = {
  AAC: 'Omoyele Sowore',
  ACCORD: 'Christopher Imumolen',
  APC: 'Bola Ahmed Tinubu',
  LP: 'Peter Obi',
  NNPP: 'Rabiu Kwankwaso',
  PDP: 'Atiku Abubakar',
  }
let text = "candidare";
for (let AAC in presidentialCandidates) {
 console.log(presidentialCandidates["AAC"] + "is a presidential candidate of AAC")

}
for (let ACCORD in presidentialCandidates) {
 console.log(presidentialCandidates["ACCORD"] + "is a presidential candidate of ACCORD")

}
for (let APC in presidentialCandidates) {
 console.log(presidentialCandidates["APC"] + "is a presidential candidate of APC")

}
for (let LP in presidentialCandidates) {
 console.log(presidentialCandidates.LP + "is a presidential candidate of Labour Party")


}
for (let NNPP in presidentialCandidates) {
 console.log(presidentialCandidates["NNPP"] + "is a presidential candidate of NNPP")

}
for (let PDP in presidentialCandidates) {
 console.log(presidentialCandidates["PDP"] + "is a presidential candidate of PDP")

}