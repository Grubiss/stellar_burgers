import React from "react";
import Ingredient from "../BurgerIngredient/Ingredient";
import style from "./IngredientsCategory.module.css";

const IngredientsCategory = ({
    title,
    titleid,
    ingredients,
    onIngredientsClick,
}) => {
    return (
        <>
            <h2 className=" text_type_main-medium">{title}</h2>
            <div className={`${style.category} pl-4 pr-4 `}>
                {ingredients.map((ingredient) => {
                    return (
                        <Ingredient
                            ingredientData={ingredient}
                            key={ingredient._id}
                            // count={1}
                            onClick={onIngredientsClick}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default IngredientsCategory;
