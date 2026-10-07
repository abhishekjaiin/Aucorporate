-- Rename the Phase 1 editorial content model from Insights to Blogs.
-- This preserves all existing rows and relationships while making Blog the
-- single public/editorial content concept.

ALTER TYPE insight_status RENAME TO blog_status;

ALTER TABLE insights RENAME TO blogs;
ALTER INDEX insights_slug_idx RENAME TO blogs_slug_idx;
ALTER TABLE blogs RENAME CONSTRAINT insights_author_id_authors_id_fk TO blogs_author_id_authors_id_fk;
ALTER TABLE blogs RENAME CONSTRAINT insights_category_id_categories_id_fk TO blogs_category_id_categories_id_fk;
ALTER TABLE blogs RENAME CONSTRAINT insights_topic_cluster_id_topic_clusters_id_fk TO blogs_topic_cluster_id_topic_clusters_id_fk;

ALTER TABLE insight_keywords RENAME TO blog_keywords;
ALTER INDEX insight_keywords_pk RENAME TO blog_keywords_pk;
ALTER TABLE blog_keywords RENAME COLUMN insight_id TO blog_id;
ALTER TABLE blog_keywords RENAME CONSTRAINT insight_keywords_insight_id_insights_id_fk TO blog_keywords_blog_id_blogs_id_fk;
ALTER TABLE blog_keywords RENAME CONSTRAINT insight_keywords_keyword_id_keywords_id_fk TO blog_keywords_keyword_id_keywords_id_fk;

ALTER TABLE related_insights RENAME TO related_blogs;
ALTER INDEX related_insights_pk RENAME TO related_blogs_pk;
ALTER TABLE related_blogs RENAME COLUMN insight_id TO blog_id;
ALTER TABLE related_blogs RENAME COLUMN related_insight_id TO related_blog_id;
ALTER TABLE related_blogs RENAME CONSTRAINT related_insights_insight_id_insights_id_fk TO related_blogs_blog_id_blogs_id_fk;
ALTER TABLE related_blogs RENAME CONSTRAINT related_insights_related_insight_id_insights_id_fk TO related_blogs_related_blog_id_blogs_id_fk;
