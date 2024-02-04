const bcrypt = require("bcrypt");

async function generatePasswordHash(
  password: string,
  saltRounds: number
): Promise<string> {
  // Generate a salt
  const salt = await bcrypt.genSalt(saltRounds);
  console.log("SALT", salt);
  // Hash the password with the generated salt
  const hash = await bcrypt.hash(password, salt);
  console.log("HASH", hash);
  return hash;
}

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
