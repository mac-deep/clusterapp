import React, { ReactElement } from 'react';

type LayoutProps = {
  sidebar: ReactElement;
  star: ReactElement;
  children: ReactElement;
};

export default function Layout(props: LayoutProps) {
  return (
    <main className="relative flex gap-8 mx-auto my-20 px-8">
      <article className="flex-1">{props.star}</article>
      {props.sidebar && props.sidebar}
    </main>
  );
}
