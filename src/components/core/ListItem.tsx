'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronForwardCircle } from 'react-tw-ionicons';
import { useSearchParams } from 'next/navigation';

type ListItemProps = {
  name: string;
  starId: string;
  type: string;
};

export default function ListItem({ name, type, starId }: ListItemProps) {
  const searchParams = useSearchParams()!;
  const active = searchParams?.get('starId') === starId;

  return (
    <Link
      // href={pathname + '?' + createQueryString('s', starId)}
      href={{}}
    >
      <li className="relative cursor-pointer text-trueGray-100">
        <div className="flex h-full px-8 py-6 font-bold  dark:text-gray-200 hover:bg-blue-800 dark:hover:bg-blueGray-800">
          <div className="mr-4 relative z-40">
            {active ? (
              <ChevronForwardCircle className="w-8 h-8 rounded-full text-white dark:text-black bg-blue-500 p-1" />
            ) : (
              <div className="w-8 h-8 rounded-full text-white border border-dashed border-white bg-blue-900 dark:bg-blueGray-900" />
            )}
          </div>
          <span
            className={`text-2xl font-light leading-7 ${
              active && 'font-bold text-white'
            }`}
          >
            {name}
          </span>
        </div>
        <div
          className={`absolute z-30 border-l border-dashed ml-12 border-gray-300 ${
            type === 'start' && 'top-1/2 h-1/2'
          } ${type === 'end' && 'bottom-1/2 h-1/2'} ${
            type === 'none' && 'top-0 h-full'
          }
        `}
        />
      </li>
    </Link>
  );
}
