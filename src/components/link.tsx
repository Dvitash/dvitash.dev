interface Props {
  children: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: Props) {
  return (
    <a className="underline hover:no-underline" href={href}>
      {children}
    </a>
  );
}
