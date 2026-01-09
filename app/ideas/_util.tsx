import { getMDXData } from '../_util';
import path from 'path';

type Metadata = {
  name: string;
  status: string; // 'brainstorming' | 'started' | 'completed';
  author: string; // contributor
  url?: string;
  draftedAt?: string;
  publishedAt?: string;
};

export function getIdeas() {
  return getMDXData<Metadata>(
    path.join(process.cwd(), 'app', 'ideas', 'published')
  );
}
