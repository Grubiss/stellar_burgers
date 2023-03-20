import React from "react";
import style from "./HeaderItem.module.css";

const HeaderItem = ({ link, children }) => {
    return (
        <>
            <a
                href={link}
                className={`${style.links} pl-2 text_type_main-default`}
            >
                {children}
            </a>
        </>
    );
};

export default HeaderItem;
