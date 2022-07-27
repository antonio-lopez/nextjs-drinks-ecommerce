import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="mx-auto my-12 max-w-7xl px-4 text-white">
      <div className="flex flex-col items-center justify-center space-y-5">
        <span className="text-xl">Follow Us</span>
        <div className="flex space-x-3">
          <AiOutlineInstagram className="h-9 w-9 rounded-full p-2 outline outline-1" />
          <AiOutlineYoutube className="h-9 w-9 rounded-full p-2 outline outline-1" />
          <AiOutlineFacebook className="h-9 w-9 rounded-full p-2 outline outline-1" />
          <AiOutlineLinkedin className="h-9 w-9 rounded-full p-2 outline outline-1" />
        </div>
        <p className="pt-14 text-sm">@2022 Antonio Lopez</p>
      </div>
    </footer>
  );
};

export default Footer;
