ALTER TYPE "enAspectsEnum" ADD VALUE 'Turkish Cypriots';--> statement-breakpoint
ALTER TYPE "grAspectsEnum" ADD VALUE 'Τουρκοκύπριοι';--> statement-breakpoint
ALTER TYPE "trAspectsEnum" ADD VALUE 'Τουρκοκύπριοι';--> statement-breakpoint
ALTER TABLE "questions" ADD COLUMN "questionInfo" jsonb;