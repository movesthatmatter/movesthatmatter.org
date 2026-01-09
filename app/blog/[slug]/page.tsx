import { notFound } from 'next/navigation';
import { formatDate, getBlogPosts } from '../_util';
import { CustomMDX } from '@/app/_components/mdx';
import Link from 'next/link';
import { getContributors } from '@/app/contributors/_util';

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// export function generateMetadata({ params }: any) {
//   let post = getBlogPosts().find((post) => post.slug === params.slug);
//   if (!post) {
//     return;
//   }

//   let {
//     title,
//     publishedAt: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata;
//   let ogImage = image
//     ? image
//     : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: 'article',
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

export default async function Blog({ params }: any) {
  const { slug } = await params;

  const post = getBlogPosts().find((post) => post.slug === slug);

  if (post === undefined) {
    return notFound();
  }

  const author = getContributors().find(
    (user) => user.slug === post.metadata.author
  );

  return (
    <section>
      {/* <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      /> */}

      <h1 className="prose stitle font-semibold text-2xl tracking-tighter">
        <Link
          href="./"
          className="stext-xl text-neutral-500 no-underline hover:underline "
        >
          Blog/{' '}
        </Link>
        {post.metadata.title}
      </h1>
      <div className="flex flex-col sjustify-between sitems-center mt-2 mb-8 text-sm">
        {author && (
          <span className="text-sm text-neutral-600 sdark:text-neutral-400">
            By: <a href={`/contributors/${author.slug}`}>{author.metadata.name}</a>
          </span>
        )}

        <span className="text-sm text-neutral-600 sdark:text-neutral-400">
          Published: {formatDate(post.metadata.publishedAt)}
        </span>
        {post.metadata.writtenAt && (
          <span className="text-sm text-neutral-600 sdark:text-neutral-400">
            Written At: {formatDate(post.metadata.writtenAt)}
          </span>
        )}
      </div>
      <hr />
      <article className="prose prose-lg prose-a:text-blue-600">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );

  // return <>asda</>;
}
