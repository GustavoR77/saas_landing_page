import { socials } from "../constants/index.jsx";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 max-md:flex-col-reverse flex-wrap items-center justify-stretch max-md:gap-3 gap-5">
            <div className="small-compact flex w-auto flex-wrap items-center justify-center gap-2 max-md:mb-3">
              <img src="/images/flags/brazil.png" width={30} alt="brazil" />
              <img src="/images/flags/usa.png" width={30} alt="usa" />
              <img src="/images/flags/spain.png" width={30} alt="spain" />
            </div>
            <p className="opacity-70">Copyright, Jorge Gustavo Ribeiro</p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Therms of Use
            </p>
          </div>
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
