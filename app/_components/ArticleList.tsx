import Link from 'next/link';
import { formatDate } from '@/app/_util';

type Article = {
  slug: string;
  title: string;
  displayDate?: string;
};

type Props = {
  articles: Article[];
  basePath: string;
  displayListTitle: string;
};

export function ArticleList({ displayListTitle, articles, basePath }: Props) {
  return (
    <div>
      <h1>{displayListTitle}</h1>
      <div>
        {articles.map((article) => (
          <Link
            key={article.slug}
            className="flex flex-col space-y-1 mb-4 no-underline hover:underline"
            href={`${basePath}/${article.slug}`}
          >
            <div className="sflex sflex-col leading-none">
              {article.displayDate && (
                <span className="text-sm text-neutral-500">
                  {formatDate(article.displayDate, false)}
                </span>
              )}
              &nbsp;
              <span className="">{article.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
