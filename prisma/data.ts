// Example usage
const password = "1234";
const saltRounds = 5; // Adjust the number of salt rounds as needed

generatePasswordHash(password, saltRounds)
  .then((hash) => {
    console.log("Password hash:", hash);
  })
  .catch((error) => {
    console.error("Error generating password hash:", error);
  });
