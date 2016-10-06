var FirstPerson = new app.SinglePeople({
  "id": 1,
  "first_name": "Karen",
  "last_name": "Hernandez",
  "email": "khernandez0@privacy.gov.au",
  "gender": "Female",
  "bio": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "interest": "teaching"
});


console.log(FirstPerson.toJSON());
FirstPerson.set("first_name", "Bob");
FirstPerson.set("last_name", "Hamilton");
