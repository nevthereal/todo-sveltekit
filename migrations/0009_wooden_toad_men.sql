ALTER TABLE "todos" ALTER COLUMN "content" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "title" text NOT NULL;