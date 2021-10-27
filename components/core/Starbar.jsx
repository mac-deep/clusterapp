import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import ListItem from "./ListItem";

const Starbar = ({ open, close, title, data, parentLink, className }) => {
  const router = useRouter();
  return (
    <div className={className}>
      <div className="overflow-y-auto h-full bg-blue-900 dark:bg-blueGray-900 dark:light-shadow-md shadow-md">
        <div className="sticky top-0 shadow-lg dark:light-shadow-lg bg-blue-900 dark:bg-blueGray-900 z-50 flex items-center justify-between">
          <span className="font-bold uppercase text-white dark:text-blue-400 cursor-pointer text-5xl block py-8 px-8 ">
            <Link href={parentLink}>{title}</Link>
          </span>

          <ChevronLeftIcon
            onClick={close}
            className={`w-12 h-12 text-white mr-4 ${open && "lg:hidden"}`}
          />
        </div>
        <ul className="w-full">
          {data.map((star, index) => (
            <ListItem
              name={star.title}
              key={star.id}
              link={`${parentLink}/${star.videoURL}`}
              type={data.length === index + 1 ? "end" : "none"}
              active={router.query.star === star.videoURL}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

Starbar.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func,
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    })
  ),
  parentLink: PropTypes.string,
  className: PropTypes.string,
};

Starbar.defaultProps = {
  open: true,
  close: "link",
  title: "Title",
  data: [{ title: "Star name" }],
  parentLink: PropTypes.string,
  className: PropTypes.string,
};

export default Starbar;
