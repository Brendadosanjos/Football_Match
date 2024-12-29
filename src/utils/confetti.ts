import confetti from "canvas-confetti";

export const shootConfetti = () => {
  confetti({
    particleCount: 150, // Número de partículas
    spread: 70,         // Ângulo de espalhamento
    origin: { y: 0.6 }, // Origem vertical (ajustado para cair no centro)
    colors: ["#ff0", "#ff6961", "#00f"], // Cores personalizadas
  });
};
