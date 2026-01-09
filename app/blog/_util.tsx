import path from 'path';
import { getMDXData } from '../_util';

type Metadata = {
  title: string;
  publishedAt: string;
  writtenAt?: string;
  summary?: string;
  image?: string;
  author: string;
};

export function getBlogPosts() {
  return getMDXData<Metadata>(path.join(process.cwd(), 'app', 'blog', 'published'));
}

