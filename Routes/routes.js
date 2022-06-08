import { createAppContainer, createSwitchNavigator } from "react-navigation";

import HomeCrud from "../src/Pages/HomeCrud";
import HomeTwo from "../src/Pages/homeTwo"

const Rotas = {
    HomeCrud: {
        name: "HomeCrud",
        screen: HomeCrud,
    },
    HomeTwo: {
        name: "HomeTwo",
        screen: HomeTwo,
    },

}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);