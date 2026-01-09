import { ArticleList } from '../_components/ArticleList';
import { getBlogPosts } from './_util';

export const metadata = {
  title: ' Blog | Moves That Matter',
  description: 'Moves That Matter Blog.',
};

export default function Page() {
  const allPosts = getBlogPosts().sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <ArticleList
      articles={allPosts.map((post) => ({
        slug: post.slug,
        title: post.metadata.title,
        displayDate: post.metadata.publishedAt,
      }))}
      basePath="/blog"
      displayListTitle="Blog"
    />
  );
}
