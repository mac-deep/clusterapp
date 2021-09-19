import Markdown from "react-markdown";

const Quote = ({ text }) => {
  return (
    <div
      className={`border-l-4 m  b-4 border-blue-400 p-2 rounded-lg bg-white shadow-md dark:bg-gray-800 bg-opacity-50 dark:text-gray-300`}
    >
      <Markdown children={text} />
    </div>
  );
};

export default Quote;
