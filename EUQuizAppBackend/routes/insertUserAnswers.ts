import { userAnswers } from "./../src/schema/userAnswers";
import { db } from "../src";
import { partyEnum } from "../src/schema/Enums/partyEnum";
import { users } from "../src/schema/users";

interface userAnswer {
  userId: number;
  answerId: number;
}

interface user {
  votedLastElection?: string;
  mayVote?: string;
}

export async function insertUserAnswers(userAnswersData) {
  let newUser: user;
  newUser = userAnswersData.user;

  try {
    const insertedUser = await db
      .insert(users)
      .values(newUser)
      .returning({ insertedId: users.userId });

    let newAnswer: userAnswer;
    let userId = insertedUser[0].insertedId;

    for (const userAnswer of userAnswersData.answers) {
      let newUserAnswer: userAnswer = {
        userId,
        answerId: userAnswer,
      };
      await db.insert(userAnswers).values(newUserAnswer);
      console.log("User answer inserted successfully.");
    }
  } catch (error) {
    console.error("Error inserting user and answers:", error);
    throw new Error("Failed to insert user and answers.");
    // You can customize the error message or handle the error in a way that fits your application.
  }
}
