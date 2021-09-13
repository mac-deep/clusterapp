import Markdown from "react-markdown";

const Quote = ({ text, type }) => {
  let color;
  if (type === "tip") color = "yellow";
  if (type === "note") color = "green";
  return (
    <div
      className={`lg:w-80 border-l-4 mb-4 border-${color}-400 p-2 rounded-lg bg-white shadow-md dark:bg-gray-800 bg-opacity-50 dark:text-gray-300`}
    >
      <h3 className={`text-4xl mb-2 text-${color}-300 font-medium capitalize`}>
        {type}
      </h3>
      <Markdown className="font-normal text-xl" children={text} />
    </div>
  );
};

export default Quote;
