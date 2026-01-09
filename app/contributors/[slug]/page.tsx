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

export default async function User({ params }: any) {
  const { slug } = await params;

  const user = getContributors().find((user) => user.slug === slug);

  if (user === undefined) {
    return notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        // dangerouslySetInnerHTML={{
        //   __html: JSON.stringify({
        //     '@context': 'https://schema.org',
        //     '@type': 'BlogPosting',
        //     headline: user.metadata.,
        //     datePublished: user.metadata.publishedAt,
        //     dateModified: user.metadata.publishedAt,
        //     description: user.metadata.summary,
        //     image: user.metadata.image
        //       ? `${baseUrl}${user.metadata.image}`
        //       : `/og?title=${encodeURIComponent(user.metadata.title)}`,
        //     url: `${baseUrl}/blog/${user.slug}`,
        //     author: {
        //       '@type': 'Person',
        //       name: 'My Portfolio',
        //     },
        //   }),
        // }}
      />

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
