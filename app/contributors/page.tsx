import { ArticleList } from '../_components/ArticleList';
import { getContributors } from './_util';

export const metadata = {
  title: ' Contributors | Moves That Matter',
  description: 'Moves That Matter Contributors.',
};

export default function Page() {
  const allContributors = getContributors();

  return (
    <ArticleList
      articles={allContributors.map((c) => ({
        slug: c.slug,
        title: c.metadata.name,
      }))}
      basePath="/contributors"
      displayListTitle="Contributors"
    />
  );
}
