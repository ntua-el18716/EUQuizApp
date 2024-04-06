"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertUserAnswers = void 0;
const userAnswers_1 = require("./../src/schema/userAnswers");
const src_1 = require("../src");
const users_1 = require("../src/schema/users");
async function insertUserAnswers(userAnswersData) {
    console.log(userAnswersData);
    let newUser;
    newUser = userAnswersData.user || {};
    try {
        const insertedUser = await src_1.db
            .insert(users_1.users)
            .values(newUser)
            .returning({ insertedId: users_1.users.userId });
        let newAnswer;
        let userId = insertedUser[0].insertedId;
        console.log(userId);
        for (const userAnswer of userAnswersData.answers) {
            let newUserAnswer = {
                userId,
                answerId: userAnswer,
            };
            await src_1.db.insert(userAnswers_1.userAnswers).values(newUserAnswer);
            console.log("User answer inserted successfully.");
        }
    }
    catch (error) {
        console.error("Error inserting user and answers:", error);
        throw new Error("Failed to insert user and answers.");
        // You can customize the error message or handle the error in a way that fits your application.
    }
}
exports.insertUserAnswers = insertUserAnswers;
