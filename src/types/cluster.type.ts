import { TStar } from './star.type';

export type TCluster = {
  title: string;
  slug: string;
  stars: TStar[];
  published_at: string;
  id: string;
};
