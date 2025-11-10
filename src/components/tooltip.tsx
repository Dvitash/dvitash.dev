interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Tooltip({ children, className }: Props) {
  let css = "absolute pointer-events-none mb-[135px] z-10 px-4 py-2 text-center text-xs duration-200 delay-0 opacity-0 group-hover:delay-500 group-hover:opacity-100 bg-black dark:bg-white text-white dark:text-black";

  if (className) {
    css += className;
  }

  return (
    <div className={css}>
      {children}

      <svg className="absolute left-0 top-full h-3 w-full text-black dark:text-white" xmlSpace="preserve" x="0px" y="0px" viewBox="0 0 255 255">
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
  );
}
