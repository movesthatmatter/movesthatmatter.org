import { getBlogPosts } from './blog/_util';
import { getContributors } from './contributors/_util';
import { getIdeas } from './ideas/_util';

export default async function sitemap() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const routes = [
    '',
    '/manifesto',
    '/ideas',
    '/actions',
    '/inspiration',
    '/blog',
    '/contributors',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const blogs = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const ideas = getIdeas().map((post) => ({
    url: `${BASE_URL}/ideas/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const contributors = getContributors().map((post) => ({
    url: `${BASE_URL}/ideas/${post.slug}`,
    // lastModified: post.metadata.publishedAt,
  }));

  return [...routes, ...blogs, ...ideas, ...contributors];
}
