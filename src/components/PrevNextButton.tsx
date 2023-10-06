import Link from 'next/link';
import { UrlObject } from 'url';

type PrevNextButtonProps = {
  prevLink: UrlObject | string | null;
  nextLink: UrlObject | string | null;
};

export default function PrevNextButton({
  prevLink,
  nextLink,
}: PrevNextButtonProps) {
  return (
    <div className="flex gap-4 justify-between">
      {prevLink && (
        <Link
          href={prevLink}
          className="bg-black text-white p-4 w-full rounded-xl"
        >
          Previous
        </Link>
      )}

      {nextLink && (
        <Link
          href={nextLink}
          className="bg-black text-white p-4 w-full rounded-xl"
        >
          Next
        </Link>
      )}
    </div>
  );
}
