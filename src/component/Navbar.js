import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import DarkMode from "../function/DarkMode";

const navigation = [
  { name: "About", href: "/about", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Resume", href: "/resume", current: false },
  { name: "Blogs", href: "/blogs", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ page = "home" }) {
  const [darkMode, setDark] = useState(false);

  useEffect(() => {
    DarkMode() === "dark" ? setDark(true) : setDark(false);
  }, []);

  function setDarkMode() {
    if (localStorage.theme === "dark") {
      setDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "ligth");
    } else {
      setDark(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }

  return (
    console.log(window.pageYOffset),
    (
      <Disclosure
        as='nav'
        className="sticky top-0 bg-white dark:bg-slate-900 shadow-md">
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
              <div className='relative flex items-center justify-around h-16'>
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-around'>
                  <div className='flex-shrink-0 flex items-center'>
                    <Link to={"/"}>
                      <p className='font-bold text-black dark:text-white italic hover:not-italic tracking-wide underline hover:underline-offset-4 decoration-wavy decoration-pink-500 hover:decoration-indigo-500'>
                        Halim.
                      </p>
                    </Link>
                  </div>
                  <div className='hidden sm:block sm:ml-6'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            page.toLowerCase() === item.name.toLowerCase()
                              ? "underline decoration-2"
                              : "hover:underline",
                            "px-2 py-2 text-sm font-bold text-black dark:text-white underline-offset-8"
                          )}
                          aria-current={
                            page.toLowerCase() === item.name.toLowerCase()
                              ? "page"
                              : undefined
                          }>
                          {item.name}
                        </Link>
                      ))}
                      <div className='px-3 py-2' onClick={setDarkMode}>
                        {!darkMode ? (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            preserveAspectRatio='xMidYMid meet'
                            viewBox='0 0 64 64'>
                            <path
                              fill='#ffce31'
                              d='M43.1 2c3.2 4.8 5.1 10.6 5.1 16.8C48.3 35.5 34.6 49 17.7 49C12 49 6.6 47.4 2 44.7C7.2 55 17.9 62 30.3 62C47.8 62 62 48 62 30.7C62 17.9 54.2 6.9 43.1 2z'
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6'
                            preserveAspectRatio='xMidYMid meet'
                            viewBox='0 0 24 24'>
                            <path
                              fill='#ffce31'
                              d='M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z'
                            />
                            <path
                              fill='orange'
                              fillRule='evenodd'
                              d='M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM3.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414Zm17.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0ZM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM6.207 17.793a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0Zm11.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414ZM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z'
                              clipRule='evenodd'
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className='absolute inset-y-0 right-0 flex items-center sm:hidden'>
                    {/* Mobile menu button*/}
                    <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Link to={item.href} key={item.name}>
                    <Disclosure.Button
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-black dark:text-white"
                          : "text-black hover:bg-gray-700 hover:text-white dark:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
                <div className='px-3 py-2' onClick={setDarkMode}>
                  {!darkMode ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      preserveAspectRatio='xMidYMid meet'
                      viewBox='0 0 64 64'>
                      <path
                        fill='#ffce31'
                        d='M43.1 2c3.2 4.8 5.1 10.6 5.1 16.8C48.3 35.5 34.6 49 17.7 49C12 49 6.6 47.4 2 44.7C7.2 55 17.9 62 30.3 62C47.8 62 62 48 62 30.7C62 17.9 54.2 6.9 43.1 2z'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      preserveAspectRatio='xMidYMid meet'
                      viewBox='0 0 24 24'>
                      <path
                        fill='#ffce31'
                        d='M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z'
                      />
                      <path
                        fill='orange'
                        fillRule='evenodd'
                        d='M12 1a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM3.293 3.293a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414Zm17.414 0a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 1 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0ZM1 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm19 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM6.207 17.793a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414l1.5-1.5a1 1 0 0 1 1.414 0Zm11.586 0a1 1 0 0 1 1.414 0l1.5 1.5a1 1 0 0 1-1.414 1.414l-1.5-1.5a1 1 0 0 1 0-1.414ZM12 20a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z'
                        clipRule='evenodd'
                      />
                    </svg>
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  );
}
