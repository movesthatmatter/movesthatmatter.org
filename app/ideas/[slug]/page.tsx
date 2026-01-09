import { notFound } from 'next/navigation';
import { CustomMDX } from '@/app/_components/mdx';
import Link from 'next/link';
import { getIdeas } from '../_util';
import { formatDate } from '@/app/_util';
import { getContributors } from '@/app/contributors/_util';

export async function generateStaticParams() {
  const ideas = getIdeas();

  return ideas.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Idea({ params }: any) {
  const { slug } = await params;

  const idea = getIdeas().find((item) => item.slug === slug);

  if (idea === undefined) {
    return notFound();
  }

  const author = getContributors().find(
    (user) => user.slug === idea.metadata.author
  );

  return (
    <section>
      <h1 className="prose stitle font-semibold text-2xl tracking-tighter">
        <Link
          href="./"
          className="stext-xl text-neutral-500 no-underline hover:underline "
        >
          Ideas/{' '}
        </Link>
        {idea.metadata.name}
      </h1>
      <div className="flex flex-col sjustify-between sitems-center mt-2 mb-8 text-sm">
        {idea.metadata.publishedAt && (
          <span className="text-sm text-neutral-600 sdark:text-neutral-400">
            Published: {formatDate(idea.metadata.publishedAt)}
          </span>
        )}
        {author && (
          <span className="text-sm text-neutral-600 sdark:text-neutral-400">
            By:{' '}
            <a href={`/contributors/${author.slug}`}>{author.metadata.name}</a>
          </span>
        )}
        {idea.metadata.status && (
          <span className="text-sm text-neutral-600 sdark:text-neutral-400">
            Status: <span className='capitalize'>{idea.metadata.status}</span>
          </span>
        )}
        {idea.metadata.url && (
          <span className="text-sm text-neutral-600 sdark:text-neutral-400">
            Url:{' '}
            <a href={idea.metadata.url} target="_blank">
              {idea.metadata.url}
            </a>
          </span>
        )}
      </div>
      {/* <hr /> */}
      <article className="prose prose-lg prose-a:text-blue-600">
        <CustomMDX source={idea.content} />
      </article>
    </section>
  );
}
