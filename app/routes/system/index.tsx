import { Outlet } from 'remix';

import { useLoaderData, LoaderFunction } from 'remix';
import { db } from '~/database/db.server';

import { styled } from '~/styles/stitches.config';

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

export default function SystemIndexRoute() {
  const { images } = useLoaderData();

  console.log(images);

  return (
    <div>
      lol
      <Outlet />
    </div>
  );
}
