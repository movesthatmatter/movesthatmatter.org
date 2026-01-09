import { getMDXData } from '../_util';
import path from 'path';

type Metadata = {
  name: string;
  avatar?: string;
  url?: string;
};

export function getContributors() {
  return getMDXData<Metadata>(
    path.join(process.cwd(), 'app', 'contributors', 'users')
  );
}
