import React from "react";
import {Text} from "react-native"; // Uso das chaves { pegando um componente exportado}

// exportando a funcao Cesta
// export function Cesta(){}
// quando não colocamos o default, pegamos o componente com a chave pois podemos colocar vários componentes no mesmo arquivo
// colocando export default pegamos o import sem {}

export default function Cesta (){
    return <text> Cesta</text>
}