import React from "react";
import style from "./Header.module.css";
import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderItem from "../HeaderLinks/HeaderItem";
const Header = () => {
    return (
        <header className={style.Header}>
            <div className={style.Wrapper}>
                <nav className={style.Header_nav}>
                    <div className={style.Header_nav__container}>
                        <ul className={style.Header_nav__list}>
                            <li className="pr-4 pb-4 pt-4">
                                <div className={style.Header_nav__wrapper}>
                                    <BurgerIcon type="primary" />

                                    <HeaderItem link="№" className="mr-5">
                                        Конструктор
                                    </HeaderItem>
                                </div>
                            </li>
                            <li className="p-4">
                                <div className={style.Header_nav__wrapper}>
                                    <ListIcon type="primary" />
                                    <HeaderItem link="*">
                                        Лента заказов
                                    </HeaderItem>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={style.Logo}>
                        <Logo />
                    </div>

                    <div
                        className={`${style.Header_nav__wrapper} ${style.Account}`}
                    >
                        <ProfileIcon type="primary" />

                        <HeaderItem link="#">Личный кабинет</HeaderItem>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
