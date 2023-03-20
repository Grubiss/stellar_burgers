import React from "react";
import style from "./Tabs.module.css";
const Tabs = ({ text }) => {
    return (
        <div className={`${style.tabsBody} text_type_main-default`}>{text}</div>
    );
};

export default Tabs;
