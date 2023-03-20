import React, { useState } from "react";
import style from "./BurgerConstructor.module.css";
import {
    ConstructorElement,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = ({ constructorIngr }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    const bulka = constructorIngr.find(
        (ingredient) => ingredient.type === "bun"
    );

    const ingredients = constructorIngr.filter(
        (ingredient) => ingredient.type !== "bun"
    );

    return (
        <article className={style.BodyConstructor}>
            <section className="pt-25 ">
                <div className={"mb-4 mr-4"}>
                    {console.log(bulka)}
                    {console.log(ingredients)}

                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bulka.name} (Верх)`}
                        price={bulka.price}
                        thumbnail={bulka.image}
                    />
                </div>
                <div className={style.ingredientList}>
                    <ul className={style.ingredientListmarker}>
                        {ingredients.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div
                                        className={`${style.ingredient} pl-4 pr-4`}
                                    >
                                        <DragIcon />
                                        <ConstructorElement
                                            text={item.name}
                                            price={item.price}
                                            thumbnail={item.image}
                                        />
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={"mt-4 mr-4"}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bulka.name} (Низ)`}
                        price={bulka.price}
                        thumbnail={bulka.image}
                    />
                </div>
            </section>
        </article>
    );
};

export default BurgerConstructor;
