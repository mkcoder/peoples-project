var app = app || {};

app.peopleService.getData()
.then(function (data){
  new app.PeoplesCollection(data);
})
.catch(function (err) {
  console.log(err);
});


// TODO: remove in next commit 
// let firstPerson = new app.SinglePeople({
//   "id": 1,
//   "first_name": "Karen",
//   "last_name": "Hernandez",
//   "email": "khernandez0@privacy.gov.au",
//   "gender": "Female",
//   "bio": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
//   "interest": "teaching"
// });

// let secondPerson = new app.SinglePeople({
//   "id": 2,
//   "first_name": "Charles",
//   "last_name": "Hill",
//   "email": "chill1@dagondesign.com",
//   "gender": "Male",
//   "bio": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
//   "interest": "community work"
// });

// let peopleCollectionGroup = new app.PeoplesCollection([
//   firstPerson, secondPerson
// ]);

// DEMO HOW TO ADD + REMOVE ELEMENTS FROM THE MODEL
// console.log("normal", peopleCollectionGroup.toJSON());

// let thirdPerson = new app.SinglePeople({
//   "id": 3,
//   "first_name": "Charles",
//   "last_name": "Hill",
//   "email": "chill1@dagondesign.com",
//   "gender": "Male",
//   "bio": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
//   "interest": "community work"
// });

// peopleCollectionGroup.add(thirdPerson);
// console.log("add", peopleCollectionGroup.toJSON());

// peopleCollectionGroup.remove(thirdPerson);


// console.log("remove", peopleCollectionGroup.toJSON());