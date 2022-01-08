import { LoaderFunction } from 'remix';
import { db } from '~/database/db.server';

export interface Image {
  url: string;
  caption: string;
}

export type LoaderData = {
  images: Image[];
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    images: await db.image.findMany(),
  };

  return data;
};
