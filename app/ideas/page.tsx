// import Image from 'next/image';
// import Header from '../_components/Header/Header';
// import Content from './content.mdx';
// import { IdeaList } from './_components/IdeaList';

// export default function Manifesto() {
//   return <IdeaList />;
// }

import { ArticleList } from '../_components/ArticleList';
import { getIdeas } from './_util';
// import { getBlogPosts } from './_util';

export const metadata = {
  title: ' Blog | Moves That Matter',
  description: 'Moves That Matter Blog.',
};

export default function Page() {
  const allIdeas = getIdeas().sort(
    (a, b) =>
      // sort by published or by draftedAt or by the same date which goes to lexical
      new Date(b.metadata.publishedAt || b.metadata.draftedAt || 1).getTime() -
      new Date(a.metadata.publishedAt || b.metadata.draftedAt || 1).getTime()
  );

  return (
    <ArticleList
      articles={allIdeas.map((a) => ({
        slug: a.slug,
        title: a.metadata.name,
        displayDate: a.metadata.publishedAt,
      }))}
      basePath="/ideas"
      displayListTitle="Ideas"
    />
  );
}
