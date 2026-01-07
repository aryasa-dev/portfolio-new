import Link from "next/link";
import React from "react";
import Container from "./container";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

type Props = {};

const navMenu = [
  {
    menu: "Home",
    link: "hero",
  },
  {
    menu: "About",
    link: "about",
  },
  {
    menu: "Expertise",
    link: "expertise",
  },
  {
    menu: "Projects",
    link: "projects",
  },
];

const Header = (props: Props) => {
  const [expandMenu, setExpandMenu] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleOpenMobile = () => {
    setExpandMenu(!expandMenu);
  };

  const router = useRouter();

  return (
    <header className="py-5 fixed z-20 w-full">
      <nav>
        <div className="max-w-[250px] relative  flex items-center justify-center  mx-auto  group">
          <p className="w-full px-3 pt-1 pb-2 text-center bg-neutral-700 rounded-xl text-3xl tracking-wide font-bold block text-[#F3F4FA] transition-all duration-300 cursor-pointer group-hover:w-[150px]">
            arya.
          </p>
          <div className="max-w-xl mx-auto absolute -z-[3] top-full -mt-3 flex items-center gap-x-1 bg-neutral-700 p-3 rounded-xl transition-all duration-300 opacity-0 -translate-y-2 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto">
            {navMenu.map((menu, id) => (
              <Link
                href={`/#${menu.link}`}
                className={`w-max px-8 py-2 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-[#F3F4FA] hover:text-neutral-700 ${
                  activeSection === menu.link
                    ? "bg-[#F3F4FA] text-neutral-700"
                    : "bg-transparent text-[#F3F4FA]"
                }`}
                key={id}
              >
                <span>{menu.menu}</span>
              </Link>
            ))}
          </div>
        </div>
        {/* <Container>
          <div className="flex items-center justify-between">
            <Link href="#" className="text-3xl font-bold">
              arya
            </Link>

            <ul
              className={`flex flex-col gap-x-8 text-2xl lg:text-lg font-semibold lg:font-normal tracking-wider items-center fixed lg:static lg:flex-row inset-0 bg-[#F3F4FA] lg:bg-transparent gap-y-10 place-content-center transition-transform duration-500 ${
                expandMenu ? "translate-x-0" : "translate-x-full"
              } lg:translate-x-0`}
            >
              {navMenu.map((menu, id) => (
                <li key={id}>
                  <Link href={menu.link}>{menu.menu}</Link>
                </li>
              ))}
            </ul>

            <button className="relative z-30 lg:hidden" onClick={handleOpenMobile}>
              {expandMenu ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
        </Container> */}
      </nav>
    </header>
  );
};

export default Header;
