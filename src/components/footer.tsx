export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="test" className="text-black dark:text-white text-xs text-center md:text-left opacity-60 pb-2 pl-2 md:pb-0 float-bottom">
      © {currentYear} Made by Dvitash
    </footer>
  );
}
