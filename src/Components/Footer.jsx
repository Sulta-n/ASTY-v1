import { footerInfo } from "../lib/info";

const Footer = () => {
  return (
    <footer
      className="bg-background   mx-auto w-full text-white py-3.5 lg:scroll-mt-20"
      role="contentinfo"
      aria-label="Site footer with contact and legal information"
    >
      <div className="max-w-[85rem]  w-full h-full mx-auto px-7 py-12">
        <div className="w-[95%] h-1 bg-primary mx-auto my-4 rounded-full" />
        <div className="flex gap-x-5 items-center  text-primary font-light tracking-wider mx-auto text-sm text-center w-full justify-center flex-wrap">
          {footerInfo.map((info, i) => (
            <a
              key={i}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {info.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
