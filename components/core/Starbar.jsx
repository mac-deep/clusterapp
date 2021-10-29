import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeftIcon, MenuIcon } from "@heroicons/react/outline";
import ListItem from "./ListItem";

const Starbar = ({ isOpen, onClose, title, data, parentLink, className }) => {
  const router = useRouter();
  return (
    <div className={className}>
      <div className="absolute p-2 w-16 h-16 top-8 -right-16 bg-yellow-400 dark:bg-yellow-600 rounded-r-xl text-white text-3xl z-50">
        {isOpen ? (
          <ChevronLeftIcon onClick={onClose} />
        ) : (
          <MenuIcon onClick={onClose} />
        )}
      </div>
      <div className="relative overflow-y-auto h-full bg-blue-900 dark:bg-dark dark:light-shadow-md shadow-md">
        <div className="sticky top-0 shadow-lg dark:light-shadow-lg bg-blue-900 dark:bg-black z-50 flex items-center justify-between">
          <span className="font-bold uppercase text-white dark:text-blue-400 cursor-pointer text-5xl block py-8 px-8 ">
            <Link href={parentLink}>{title}</Link>
          </span>
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
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
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
  isOpen: true,
  onClose: "link",
  title: "Title",
  data: [{ title: "Star name" }],
  parentLink: PropTypes.string,
  className: PropTypes.string,
};

export default Starbar;
