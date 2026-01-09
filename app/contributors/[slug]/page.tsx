import { notFound } from 'next/navigation';
import { CustomMDX } from '@/app/_components/mdx';
import Link from 'next/link';
import { getContributors } from '../_util';

export async function generateStaticParams() {
  const constributors = getContributors();

  return constributors.map((user) => ({
    slug: user.slug,
  }));
}

export default async function User({ params }: any) {
  const { slug } = await params;

  const user = getContributors().find((user) => user.slug === slug);

  if (user === undefined) {
    return notFound();
  }

  return (
    <section>
      <script type="application/ld+json" suppressHydrationWarning />

      <h1 className="prose stitle font-semibold text-2xl tracking-tighter">
        <Link
          href="./"
          className="stext-xl text-neutral-500 no-underline hover:underline "
        >
          Contributors/{' '}
        </Link>
        {user.metadata.name}
      </h1>
      <div className="flex flex-col sjustify-between sitems-center mt-2 mb-8 text-sm">
        {user.metadata.url && (
          <span className="text-sm text-neutral-600 sdark:text-neutral-400">
            Url:{' '}
            <a href={user.metadata.url} target="_blank">
              {user.metadata.url}
            </a>
          </span>
        )}
      </div>
      <hr />
      <article className="prose prose-lg prose-a:text-blue-600">
        <CustomMDX source={user.content} />
      </article>
    </section>
  );

  // return <>asda</>;
}
