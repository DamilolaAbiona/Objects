// 1. Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// - Handle of author
// - content,
// - An image link posted by the author of the post
// - Number of views,
// - Number of likes,
function InstagramPost(authorHandle, content, link, numOfViews, numOfLikes ){
    this.handle = authorHandle;
    this.content = content;
    this.link = link;
    this.views = numOfViews;
    this.likes = numOfLikes;

}

// 2. Create 2 Instagram post objects from the constructor function you created above
const simply__dharmy = new InstagramPost("simply__dharmy","Let love lead","<a href='https://instagram.com/simply__dharmy/' title='love Leads'>","11300 views",2000 )
console.log(simply__dharmy)
const peterson = new InstagramPost("peterson","Vote Peter Obi","<a href='https://instagram.com/peterson/Nigeria' title='NigeriaDecides'>","39800 views",8000 )
console.log(peterson)

// 3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94
//  a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function.  
//  b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Musa’s JAMB scores. Add the object as a property to Musa object you created above in (a) above


