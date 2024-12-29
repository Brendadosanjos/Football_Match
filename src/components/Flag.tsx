import React from "react";
import { getFlagUrl } from "../utils/flagsApi";

interface FlagProps {
  countryCode: string; // Código ISO Alpha-2 do país (ex.: "BR")
  style?: "flat" | "shiny"; // Estilo da bandeira
  size?: number; // Tamanho da bandeira (em pixels)
  alt?: string; // Texto alternativo da imagem
}

const Flag: React.FC<FlagProps> = ({ countryCode, style = "flat", size = 64, alt }) => {
  const flagUrl = getFlagUrl(countryCode, style, size);

  return (
    <img
      src={flagUrl}
      alt={alt || `Flag of ${countryCode}`}
      width={size}
      height={size}
      loading="lazy"
    />
  );
};

export default Flag;