import Link from "next/link";

const BlogItem = ({ title, url }) => (
  <Link href={url} passHref>
    <a>
      <li className="w-full border-b-2 border-transparent dark:border-gray-800 mb-4 shadow-sm h-20 rounded-lg p-6 hover:shadow-md text-2xl dark:bg-gray-900">
        🔗 {title}
      </li>
    </a>
  </Link>
);

export default BlogItem