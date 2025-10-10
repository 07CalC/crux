type props = {
  text: string | React.ReactNode;
  clickAction: () => void;
};

export const ClickyButton = ({ text, clickAction }: props) => {
  return (
    <button
      onClick={clickAction}
      className="rounded-xl sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2"
    >
      {text}
    </button>
  );
};
