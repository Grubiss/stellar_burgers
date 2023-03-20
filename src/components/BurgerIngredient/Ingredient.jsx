import React from "react";
import {
    Counter,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./Ingredient.module.css";

const Ingredient = ({ ingredientData, count, onClick }) => {
    const { image, price, name } = ingredientData;

    const handleClick = () => {
        onClick(ingredientData);
        count++;
    };

    return (
        <article className={style.article} onClick={handleClick}>
            {count && <Counter extraClass={style.Counter} count={count} />}
            <img
                className={`${style.img} mt-6 `}
                src={image}
                alt="Картинка ингредиента"
            />
            <div className={`${style.cost} mt-2 mb-2`}>
                <p className={`text text_type_digits-default mr-2`}>{price}</p>
                <CurrencyIcon />
            </div>
            <p className={`text text_type_main-default ${style.text} pb-10`}>
                {name}
            </p>
        </article>
    );
};

export default Ingredient;
