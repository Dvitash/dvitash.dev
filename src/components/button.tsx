import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  borders?: string;
  link?: string;
  label?: string;
  callback?: () => undefined;
}

export const ButtonCSS = "group bg-[var(--bg-primary)] border-[var(--text-primary)] fill-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:fill-[var(--bg-primary)] hover:text-[var(--bg-primary)] duration-200 flex items-center justify-center ";

export default function Button({ children, className, borders, link, label, callback }: Props) {
  let css = ButtonCSS;

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

  if (link) {
    return (
      <Link aria-label={label} className={css} href={link} onClick={callback}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={css} onClick={callback}>
        {children}
      </button>
    );
  }
}
