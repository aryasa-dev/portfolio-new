"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { XIcon } from "lucide-react";

type ContactModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const contacts = [
  {
    label: "Gmail",
    icon: <FaGoogle size={20} />,
    link: "mailto:yourmail@gmail.com",
  },
  {
    label: "Whatsapp",
    icon: <FaWhatsapp size={20} />,
    link: "wa.me/6285156898745",
  },
  {
    label: "Linkedin",
    icon: <FaLinkedinIn size={20} />,
    link: "https://www.linkedin.com/in/rizkyaryasa/",
  },
  {
    label: "Github",
    icon: <FaGithub size={20} />,
    link: "https://github.com/aryasa-dev",
  },
  {
    label: "Telegram",
    icon: <FaTelegram size={20} />,
    link: "https://t.me/aryasa21",
  },
];

export function ContactModal({ isOpen, setIsOpen }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed z-50 inset-0 flex items-center justify-center px-4"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 pt-10 w-full max-w-xl shadow-xl" ref={modalRef}>
                <XIcon
                  className="absolute top-3 right-3 cursor-pointer transition-transform duration-300 hover:rotate-90"
                  onClick={() => setIsOpen(false)}
                />
                <h3 className="text-3xl font-bold uppercase mb-4">
                  Let’s Build <br /> Something Great Together
                </h3>

                <div className="space-y-4">
                  <div className="text-gray-700 text-lg">
                    <p>
                      Got an <b>idea 💡</b>, <b>project 💻</b>, or just want to{" "}
                      <b>say hi 👋</b>?
                    </p>
                    <p>
                      I’m always open to <u>new collaborations</u>,{" "}
                      <u>freelance work</u>, or <u>exciting opportunities</u>.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    {contacts.map((contact, id) => (
                      <div key={id} className="group flex flex-col gap-y-2 relative pt-6">
                        <span className="text-xs font-medium opacity-0 translate-y-1 absolute left-1/2 top-0 -translate-x-1/2 transition-transform duration-300 group-hover:opacity-100 group-hover:translate-y-0">{contact.label}</span>
                        <a
                          href={contact.link}
                          target={contact.label !== "Gmail" ? "_blank" : "_self"}
                          className="flex items-center gap-x-2 w-10 h-10 border border-gray-300 rounded-full justify-center text-gray-600 transition-colors after:content-[''] after:absolute after:inset-0 after:-z-10 after:bg-transparent hover:after:bg-gray-200 relative overflow-hidden hover:text-gray-900"
                        >
                          {contact.icon}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* <button
                  onClick={() => setIsOpen(false)}
                  className="mt-6 w-full py-2 rounded-md border border-gray-400 hover:bg-gray-100 transition-all"
                >
                  Close
                </button> */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
