function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Alice", "Bob"];
console.log(greeterArray(user)); //This will now work correctly because the function expects a string array

//Another Solution 
for (const person of user) {
  console.log(greeter(person));
}