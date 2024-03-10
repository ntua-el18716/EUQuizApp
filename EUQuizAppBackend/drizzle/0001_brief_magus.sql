ALTER TABLE "candidates" ADD COLUMN "candidateCode" text;--> statement-breakpoint
ALTER TABLE "candidates" ADD COLUMN "candidateCustomAnswers" text[];--> statement-breakpoint
ALTER TABLE "candidates" ADD COLUMN "candidateConsent" boolean;--> statement-breakpoint
-- ALTER TABLE "parties" ADD COLUMN "partyAbbrGr" text;