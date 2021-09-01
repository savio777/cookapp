import React from "react";
import { MotiImage } from "moti";

import { styles } from "./styles";
import plateImg from "../../assets/plate.png";

export function Plate() {
  return (
    <MotiImage
      style={styles.plate}
      source={plateImg}
      resizeMode="contain"
      from={{ rotate: "90deg", opacity: 0 }}
      // somente rotate '0' gira mais rapido
      // animate={{ opacity: 1, rotate: "0" }}
      animate={{ rotate: "0deg", opacity: 1 }}
      transition={{
        type: "timing",
        duration: 2000,
        // no caso deve ser número ímpar para terminar a animação
        // com opacity 1
        //repeat: 3,
        // repetir para sempre
        //loop: true,
        // para não voltar de forma fluída a cada repetição
        // repeatReverse: false,
      }}
    />
  );
}
