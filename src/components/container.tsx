interface Props {
  children: React.ReactNode;
  className?: string;
  borders?: string;
  style?: React.CSSProperties;
}

export default function Container({ children, className, borders, style }: Props) {
  let css = "bg-white dark:bg-black border-black dark:border-white ";

  if (className) {
    css += className;
  }

  if (borders != undefined) {
    if (borders.includes("t")) {
      css += " border-t-2";
    }
    if (borders.includes("b")) {
      css += " border-b-2";
    }
    if (borders.includes("l")) {
      css += " border-l-2";
    }
    if (borders.includes("r")) {
      css += " border-r-2";
    }
  } else {
    css += " border-2";
  }

  return (
    <div className={css} style={style}>
      {children}
    </div>
  );
}
