import Link from 'next/link';
import { formatDate, getBlogPosts } from '../_util';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4 no-underline hover:underline"
              href={`/blog/${post.slug}`}
            >
              <div className="sflex sflex-col leading-none">
                <span className="text-sm text-neutral-500">
                  {formatDate(post.metadata.publishedAt, false)}
                </span>
                &nbsp;
                <span className="">{post.metadata.title}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
