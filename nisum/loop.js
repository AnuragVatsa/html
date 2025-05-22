const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}