import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Link
  const navLinks = [
    {
      title: "Home",
      href: "/",
      icon: <IoMdHome />,
    },
    {
      title: "Profile",
      href: "/profile",
      icon: <IoPersonOutline />,
    },
  ];

  return (
    <div className="border-e-2 border-[#2f3336] h-screen sticky left-0 top-0">
      <div className="flex flex-col justify-between h-full">
        {/* Navbar */}
        <div className="flex flex-col justify-evenly gap-5 pe-4 pt-5 transition-all">
          <h1 className="text-5xl p-4 rounded-full hover:bg-[#ffffff13] transition-all w-fit">
            <FaXTwitter />
          </h1>
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="flex gap-3 items-center text-2xl py-3 px-4 rounded-full hover:bg-[#ffffff13]">
              {link.icon} <span className="text-xl">{link.title}</span>
            </Link>
          ))}
        </div>
        {/* Profile */}
        <div className="flex items-center gap-5 pb-5">
          <img
            src={"https://randomuser.me/api/portraits/women/11.jpg"}
            alt="Profile Picture"
            className="object-cover rounded-full w-12"
          />
          {/* Username */}
          <div>
            <p className="text-xl font-semibold">Siska Ernita</p>
            <p className="text-gray-500">@siskae_</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
