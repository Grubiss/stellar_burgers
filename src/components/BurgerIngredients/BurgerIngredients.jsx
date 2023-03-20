import React, { useMemo } from "react";
import Ingredient from "../Ingredient/Ingredient";
import Tabs from "../BurgerIngredientsTabs/Tabs";
import IngredientsCategory from "../IngredientsCategory/IngredientsCategory";
import style from "./BurgerIngredients.module.css";

const BurgerIngredients = ({ ingredients }) => {
    const sauces = useMemo(
        () => ingredients.filter((item) => item.type === "sauce"),
        [ingredients]
    );

    const buns = useMemo(
        () => ingredients.filter((item) => item.type === "bun"),
        [ingredients]
    );

    const mains = useMemo(
        () => ingredients.filter((item) => item.type === "main"),
        [ingredients]
    );

    return (
        <article className={`${style.BodyIngredients} pt-10`}>
            <h1 className="text_type_main-large ">Соберите бургер</h1>
            <section className={`${style.Tabs} pt-5`}>
                <Tabs text="Булки" />
                <Tabs text="Соусы" />
                <Tabs text="Начинки" />
            </section>
            <section className={style.ingredients}>
                <IngredientsCategory
                    title="Булки"
                    titleid="buns"
                    ingredients={buns}
                />
                <IngredientsCategory
                    title="Соусы"
                    titleid="sauce"
                    ingredients={sauces}
                />
                <IngredientsCategory
                    title="Начинки"
                    titleid="main"
                    ingredients={mains}
                />
            </section>
        </article>
    );
};

export default BurgerIngredients;
