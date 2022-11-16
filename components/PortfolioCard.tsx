import Image from "next/image";

interface Props {
  title: string;
  src: string;
  alt: string;
}

function PortfolioCard(props: Props) {
  return (
    <div className=" shadow-lg p-2 rounded-xl dark:shadow-gray-800">
      <Image
        src={props.src}
        width={350}
        height={230}
        alt={props.alt}
        className=" rounded-lg object-cover pt-2"
      />
      <div className=" flex justify-between items-center text-md rounded-xl py-2 leading-8 text-gray-800 dark:text-gray-30">
        <span className=" pl-2 text-gray-800 font-medium dark:text-white">
          {props.title}
        </span>
        <button className=" mr-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 border-none rounded-md ml-8">
          Repo
        </button>
      </div>
    </div>
  );
}

export default PortfolioCard;
