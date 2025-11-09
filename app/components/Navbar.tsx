"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "./Mode";

interface NavLink {
  label?: string;
  href: string;
  iconLight?: string;
  iconDark?: string;
  iconLightHover?: string;
  iconDarkHover?: string;
}

export default function Navbar() {
  const { isDark, toggleDarkMode } = useDarkMode();

  const mainLinks: NavLink[] = [
    { iconLight: "/images/brand/me.webp", iconDark: "/images/brand/me.webp", href: "/" }
  ];

  const userLinks: NavLink[] = [
    {
      iconLight: "/images/icons/shopping-dark.png",
      iconLightHover: "/images/icons/shopping-hover.png",
      iconDark: "/images/icons/shopping-light.png",
      iconDarkHover: "/images/icons/shopping-hover.png",
      href: "/"
    }
  ];

  const bodyLinks: NavLink[] = [
    {
      iconLight: "/images/icons/profile-dark.png",
      iconLightHover: "/images/icons/profile-hover.png",
      iconDark: "/images/icons/profile-light.png",
      iconDarkHover: "/images/icons/profile-hover.png",
      href: "/",
    },
    {
      iconLight: "/images/icons/list-dark.png",
      iconLightHover: "/images/icons/list-hover.png",
      iconDark: "/images/icons/list-light.png",
      iconDarkHover: "/images/icons/list-hover.png",
      href: "/",
    },
    {
      iconLight: "/images/icons/freelancer-dark.png",
      iconLightHover: "/images/icons/freelancer-hover.png",
      iconDark: "/images/icons/freelancer-light.png",
      iconDarkHover: "/images/icons/freelancer-hover.png",
      href: "/",
    },
    {
      iconLight: "/images/icons/blog-dark.png",
      iconLightHover: "/images/icons/blog-hover.png",
      iconDark: "/images/icons/blog-light.png",
      iconDarkHover: "/images/icons/blog-hover.png",
      href: "/",
    },
    {
      iconLight: "/images/icons/msg-dark.png",
      iconLightHover: "/images/icons/msg-hover.png",
      iconDark: "/images/icons/msg-light.png",
      iconDarkHover: "/images/icons/msg-hover.png",
      href: "/",
    }
  ];

  const renderIcon = (link: NavLink) => {
    const normalSrc = isDark ? link.iconDark : link.iconLight;
    const hoverSrc = isDark ? link.iconDarkHover : link.iconLightHover;

    if (!normalSrc) return null;

    return (
      <div className="relative w-5 h-5 group">
        <Image
          src={normalSrc}
          alt="icon"
          width={20}
          height={20}
          className="block group-hover:hidden"
        />
        {hoverSrc && (
          <Image
            src={hoverSrc}
            alt="icon-hover"
            width={20}
            height={20}
            className="hidden group-hover:block absolute top-0 left-0"
          />
        )}
      </div>
    );
  };

  return (
    <nav className="flex flex-col bg-white dark:bg-black">
      <div className="flex justify-between items-center py-3 px-4 pb-4 md:px-20 border-b border-b-slate-500">
        <div className="flex items-center gap-2">
          {mainLinks.map((link, idx) => (
            <Link key={idx} href={link.href}>
              {renderIcon(link)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {userLinks.map((link, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Link href={link.href}>
                {renderIcon(link)}
              </Link>

              {/* শুধু shopping icon-এর পাশে Dark Mode toggle রাখছি */}
              {link.iconLight?.includes("shopping") && (
                <button onClick={toggleDarkMode} className="ml-3">
                  <Image
                    src={isDark ? "/images/icons/sun-light.png" : "/images/icons/night-dark.png"}
                    alt="toggle theme"
                    width={20}
                    height={20}
                  />
                </button>
              )}
            </div>
          ))}

          {/* Hamburger */}
          <div className="flex flex-col gap-[4px] cursor-pointer">
            <span className="w-5 h-[2px] rounded-full bg-black dark:bg-white hover:bg-[rgb(156, 201, 111)] transition-colors duration-300"></span>
            <span className="w-5 h-[2px] rounded-full bg-black dark:bg-white hover:bg-[rgb(156, 201, 111)] transition-colors duration-300"></span>
            <span className="w-5 h-[2px] rounded-full bg-black dark:bg-white hover:bg-[rgb(156, 201, 111)] transition-colors duration-300"></span>
          </div>
        </div>
      </div>

      {/* Body Links */}
      <div className="flex items-center justify-between px-10 py-4">
        {bodyLinks.map((link, idx) => (
          <Link key={idx} href={link.href}>
            {renderIcon(link)}
          </Link>
        ))}
      </div>
    </nav>
  );
}