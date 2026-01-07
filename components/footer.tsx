import { MoveUpRightIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

type FooterProps = {
  data: Contact[];
};

const Footer = ({data}: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="">
      <div className="container">
        <div className="flex flex-col items-center mb-8 pt-10">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl max-w-2xl text-center uppercase"
          >
            Interested in Work Together?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p>Drop me an email:</p>
            <Link href={"/"} className="font-bold text-lg">
              aryasadev21@gmail.com
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-y-4 justify-between border-t border-slate-300 py-7">
          <p className="text-xs lg:text-base">Copyright © {year} aryasadev</p>

          <div className="flex items-center gap-x-4">
            <Link
              href={data[0].github ?? "/"}
              target="_blank"
              className="flex items-center gap-x-1"
            >
              <p>Github</p>
              <MoveUpRightIcon size={16} />
            </Link>
            <Link
              href={data[0].linkedin ?? "/"}
              target="_blank"
              className="flex items-center gap-x-1"
            >
              <p>Linkedin</p>
              <MoveUpRightIcon size={16} />
            </Link>
            {/* <Link
              href={data[0].phone ?? "/"}
              target="_blank"
              className="flex items-center gap-x-1"
            >
              <p>Phone</p>
              <MoveUpRightIcon size={16} />
            </Link> */}
          </div>
        </div>
      </div>
      {/* <div className="text-center py-5 font-semibold opacity-60">
        <p>© Arya {year}</p>
      </div> */}
    </footer>
  );
};

export default Footer;
