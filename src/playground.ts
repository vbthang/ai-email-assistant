import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "johndoe@gmail.com",
    firstName: "John",
    lastName: "Doe",
  },
});

console.log("Done");
