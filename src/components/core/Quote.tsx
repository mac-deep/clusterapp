import React from 'react';
import Markdown from 'react-markdown';

export default function Quote({ text }) {
  return (
    <div className="p-4 rounded-2xl text-2xl leading-10 bg-white shadow-lg dark:bg-gray-900 bg-opacity-50 dark:text-gray-400">
      <Markdown>{`👉 ${text}`}</Markdown>
    </div>
  );
}
