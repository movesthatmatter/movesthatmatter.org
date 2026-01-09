// import { getBlogPosts } from 'app/blog/utils'

import { getBlogPosts } from './blog/_util';
import { getIdeas } from './ideas/_util';

export default async function sitemap() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  let blogs = getBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const ideas = getIdeas().map((post) => ({
    url: `${BASE_URL}/ideas/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/ideas'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs, ...ideas];
}
