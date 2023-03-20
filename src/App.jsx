import React, { useEffect, useState } from "react";
import { getIngredients } from "./components/utils/burger-api";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import Header from "./components/AppHeader/Header";
import style from "./App.module.css";

function App() {
    const [ingredients, setIngredients] = useState([]);
    const [ingredientsLoading, setIngredientsLoading] = useState(true);

    useEffect(() => {
        getIngredients()
            .then(setIngredients)
            .catch(() => alert("Ошибка загрузки"))
            .finally(() => setIngredientsLoading(false));
    }, []);

    return (
        <div className={style.App}>
            <Header />
            <main className={style.AppBody}>
                <BurgerIngredients ingredients={ingredients} />
                <BurgerConstructor constructorIngr={ingredients} />
            </main>
        </div>
    );
}

export default App;
