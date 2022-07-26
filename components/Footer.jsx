import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="mx-auto my-12 max-w-7xl text-white">
      <div className="flex flex-col items-center justify-center space-y-7">
        <span className="text-xl">Follow</span>
        <div className="flex items-center justify-center space-x-3">
          <a
            className="hover:text-white/70"
            href="https://github.com/antonio-lopez"
            aria-label="Antonio Lopez github profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="h-9 w-9" />
          </a>
          <a
            className="hover:text-white/70"
            href="https://www.linkedin.com/in/antoniolopez6/"
            aria-label="Antonio Lopez linkedin profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLinkedin className="h-9 w-9" />
          </a>
          <a
            className="hover:text-white/70"
            href="https://www.antoniolopez.me/"
            aria-label="Antonio Lopez website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGlobe className="h-8 w-8" />
          </a>
        </div>
        <p className="pt-14 text-sm">@2022 Antonio Lopez</p>
      </div>
    </footer>
  );
};

export default Footer;
