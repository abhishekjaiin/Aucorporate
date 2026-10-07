-- Rename the Phase 1 editorial content model from Insights to Blogs.
-- This preserves all existing rows and relationships while making Blog the
-- single public/editorial content concept.

ALTER TYPE insight_status RENAME TO blog_status;

ALTER TABLE insights RENAME TO blogs;
ALTER INDEX insights_slug_idx RENAME TO blogs_slug_idx;

ALTER TABLE insight_keywords RENAME TO blog_keywords;
ALTER INDEX insight_keywords_pk RENAME TO blog_keywords_pk;
ALTER TABLE blog_keywords RENAME COLUMN insight_id TO blog_id;

ALTER TABLE related_insights RENAME TO related_blogs;
ALTER INDEX related_insights_pk RENAME TO related_blogs_pk;
ALTER TABLE related_blogs RENAME COLUMN insight_id TO blog_id;
ALTER TABLE related_blogs RENAME COLUMN related_insight_id TO related_blog_id;
