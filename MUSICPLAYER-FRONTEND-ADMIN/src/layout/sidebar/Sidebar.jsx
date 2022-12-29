import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import { listSidebars } from "./data";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <section className={cx("sidebar")}>
      <div className="flex items-center flex-col gap-2 mt-5">
        <img
          className="w-[100px]"
          src={require("./../../assets/images/Logo-Offical-gadient.png")}
          alt="logo"
        ></img>
        <p className="text-sm text-white text-[16px] font-light italic">
          Melody for emotion
        </p>
      </div>
      <div className="mt-[50px] relative">
        <ul className="text-white">
          {listSidebars.map((item, index) => {
            return (
              <li className="" key={index}>
                <Link
                  className={`flex gap-3 text-[18px] items-center font-header hover:text-primary pl-2 py-3 `}
                  to={item.path}
                >
                  {item.icon}
                  <p className={cx("text")}>{item.title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="absolute bottom-0">
        <div className="flex flex-col gap-2 mb-4 ml-5 text-white">
          <Link
            className={`flex gap-3 text-[18px] items-center font-header hover:text-primary pl-2 py-3 `}
            to="/login"
          >
            <AiOutlineLogout />
            <p className={cx("text")}>Logout</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
