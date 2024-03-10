DO $$ BEGIN
 CREATE TYPE "enAspectsEnum" AS ENUM('Cyprus Problem', 'European Union', 'Economy', 'Foreign Policy', 'Immigration', 'Green Politics', 'Social Issues');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "grAspectsEnum" AS ENUM('Κυπριακό Πρόβλημα', 'Ευρωπαϊκή Ένωση', 'Οικονομία', 'Εξωτερική Πολιτική', 'Μεταναστευτικό', 'Περιβάλλον', 'Κοινωνικά Θέματα');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "trAspectsEnum" AS ENUM('Κυπριακό Πρόβλημα', 'Ευρωπαϊκή Ένωση', 'Οικονομία', 'Εξωτερική Πολιτική', 'Μεταναστευτικό', 'Περιβάλλον', 'Κοινωνικά Θέματα');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "partyEnum" AS ENUM('disy', 'akel', 'diko', 'elam', 'edek', 'depa', 'greens', 'volt');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "answers" (
	"answerId" serial PRIMARY KEY NOT NULL,
	"questionId" integer,
	"answerIndex" integer,
	"answerText" jsonb,
	"answerPoints" jsonb[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "candidateAnswers" (
	"candidateId" integer,
	"answerId" integer,
	CONSTRAINT candidateAnswers_candidateId_answerId PRIMARY KEY("candidateId","answerId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "candidates" (
	"candidateId" serial PRIMARY KEY NOT NULL,
	"candidateName" jsonb,
	"candidateParty" text,
	"candidateBallotNumber" integer,
	"candidateMobileNumber" text,
	"candidateEmail" text,
	"candidateWebPage" text,
	"candidateImg" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "parties" (
	"partyName" text,
	"partyImg" text,
	"partyAbbreviation" text PRIMARY KEY NOT NULL,
  "partyAbbrGr" text,
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "questions" (
	"questionId" serial PRIMARY KEY NOT NULL,
	"questionIndex" integer,
	"questionTitle" jsonb,
	"questionAspect" jsonb
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "userAnswers" (
	"userId" integer,
	"answerId" integer,
	CONSTRAINT userAnswers_userId_answerId PRIMARY KEY("userId","answerId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"userId" serial PRIMARY KEY NOT NULL,
	"votedLastElection" text,
	"mayVote" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "answers" ADD CONSTRAINT "answers_questionId_questions_questionId_fk" FOREIGN KEY ("questionId") REFERENCES "questions"("questionId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "candidateAnswers" ADD CONSTRAINT "candidateAnswers_candidateId_candidates_candidateId_fk" FOREIGN KEY ("candidateId") REFERENCES "candidates"("candidateId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "candidateAnswers" ADD CONSTRAINT "candidateAnswers_answerId_answers_answerId_fk" FOREIGN KEY ("answerId") REFERENCES "answers"("answerId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userAnswers" ADD CONSTRAINT "userAnswers_userId_users_userId_fk" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "userAnswers" ADD CONSTRAINT "userAnswers_answerId_answers_answerId_fk" FOREIGN KEY ("answerId") REFERENCES "answers"("answerId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
