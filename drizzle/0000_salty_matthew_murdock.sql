CREATE TYPE "public"."insight_status" AS ENUM('DRAFT', 'INTERNAL_REVIEW', 'APPROVED', 'PUBLISHED', 'NEEDS_REFRESH');--> statement-breakpoint
CREATE TYPE "public"."search_intent" AS ENUM('INFORMATIONAL', 'COMMERCIAL', 'TRANSACTIONAL', 'COMPARISON', 'REGULATORY');--> statement-breakpoint
CREATE TYPE "public"."user_role" AS ENUM('ADMIN', 'EDITOR', 'AUTHOR');--> statement-breakpoint
CREATE TABLE "authors" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"bio" text,
	"image" text,
	"designation" varchar(255),
	"email" varchar(255),
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "insight_keywords" (
	"insight_id" uuid NOT NULL,
	"keyword_id" uuid NOT NULL,
	"is_primary" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "insights" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"excerpt" text,
	"content" jsonb,
	"status" "insight_status" DEFAULT 'DRAFT' NOT NULL,
	"author_id" uuid,
	"category_id" uuid,
	"topic_cluster_id" uuid,
	"service_slug" varchar(255),
	"jurisdiction_slug" varchar(255),
	"industry_slug" varchar(255),
	"featured_image" text,
	"image_alt" varchar(255),
	"primary_keyword" varchar(255),
	"meta_title" varchar(255),
	"meta_description" varchar(500),
	"canonical_url" text,
	"published_at" timestamp with time zone,
	"last_reviewed_at" timestamp with time zone,
	"needs_refresh" boolean DEFAULT false NOT NULL,
	"seo_score" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "keywords" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"keyword" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"search_intent" "search_intent",
	"topic_cluster_id" uuid,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "related_insights" (
	"insight_id" uuid NOT NULL,
	"related_insight_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "topic_clusters" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text,
	"primary_keyword" varchar(255),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password_hash" text NOT NULL,
	"role" "user_role" DEFAULT 'AUTHOR' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "insight_keywords" ADD CONSTRAINT "insight_keywords_insight_id_insights_id_fk" FOREIGN KEY ("insight_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "insight_keywords" ADD CONSTRAINT "insight_keywords_keyword_id_keywords_id_fk" FOREIGN KEY ("keyword_id") REFERENCES "public"."keywords"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "insights" ADD CONSTRAINT "insights_author_id_authors_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."authors"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "insights" ADD CONSTRAINT "insights_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "insights" ADD CONSTRAINT "insights_topic_cluster_id_topic_clusters_id_fk" FOREIGN KEY ("topic_cluster_id") REFERENCES "public"."topic_clusters"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "keywords" ADD CONSTRAINT "keywords_topic_cluster_id_topic_clusters_id_fk" FOREIGN KEY ("topic_cluster_id") REFERENCES "public"."topic_clusters"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_insights" ADD CONSTRAINT "related_insights_insight_id_insights_id_fk" FOREIGN KEY ("insight_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_insights" ADD CONSTRAINT "related_insights_related_insight_id_insights_id_fk" FOREIGN KEY ("related_insight_id") REFERENCES "public"."insights"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "authors_slug_idx" ON "authors" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "categories_slug_idx" ON "categories" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "insight_keywords_pk" ON "insight_keywords" USING btree ("insight_id","keyword_id");--> statement-breakpoint
CREATE UNIQUE INDEX "insights_slug_idx" ON "insights" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "keywords_slug_idx" ON "keywords" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "related_insights_pk" ON "related_insights" USING btree ("insight_id","related_insight_id");--> statement-breakpoint
CREATE UNIQUE INDEX "topic_clusters_slug_idx" ON "topic_clusters" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");