import React from "react";
import { Text } from "react-native";

// DIFERENÇA EXPORT e EXPORT DEFAULT

// "export" consigo exportar mais de um
// E consigo importar o q quero assim... EXEMPLO: import { Text } from "react-native";

// "export default" exporto somente um
// E consigo importar somente assim... EXEMPLO import React from "react";  que importa 1 só, no caso o componente todo

export default function Cesta() {
  // text é como se fosse a tag p só que no react native
  // para utilizar o componente Text que é quase uma tag, voce deve importalo.
  return <Text>Cesta</Text>;
}
