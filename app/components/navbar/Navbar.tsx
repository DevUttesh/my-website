import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav
      className=" float-left h-screen  flex px-3 flex-col justify-center gap-2 items-center fixed"
    >
      <div className=" w-14 h-14 p-4 bg-slate-100 rounded-full ">
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      <div className=" w-14 h-14 p-4 bg-slate-100 rounded-full ">
        <Link href="/">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
      <div className=" w-14 h-14 p-4 bg-slate-100 rounded-full ">
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      <div className=" w-14 h-14 p-4 bg-slate-100 rounded-full ">
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      <div className=" w-14 h-14 p-4 bg-slate-100 rounded-full ">
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      <div className=" w-14 h-14 p-4 bg-slate-100 rounded-full ">
        <Link href="/">
          <EnvelopeIcon className="text-orange-700 font-bold text-4xl" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
