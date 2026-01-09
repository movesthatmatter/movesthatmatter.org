import Link from 'next/link';
import { getContributors } from '../_util';

export function ContributorsList() {
  const allBlogs = getContributors();

  return (
    <div>
      <h1>Contributors</h1>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.metadata.name) > new Date(b.metadata.name)) {
              return -1;
            }
            return 1;
          })
          .map((user) => (
            <Link
              key={user.slug}
              className="flex flex-col space-y-1 mb-4 no-underline hover:underline"
              href={`/contributors/${user.slug}`}
            >
              <span className="">{user.metadata.name}</span>
            </Link>
          ))}
      </div>
    </div>
  );
}
