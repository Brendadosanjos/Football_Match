export const getFlagUrl = (countryCode: string, style: "flat" | "shiny" = "flat", size: number = 64) => {
    return `https://flagsapi.com/${countryCode}/${style}/${size}.png`;
  };