"use client";
import { motion } from "framer-motion";

export default function Banner() {
  const letters = "Frieren".split("");

  return (
    <div className="flex-1 relative h-full overflow-hidden flex flex-col justify-center items-center">
      {/* Gradiente de fundo escuro para a imagem */}
      <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-2" />

      {/* Animação da imagem */}
      <motion.img
        src="https://res.cloudinary.com/dia3rgj1q/image/upload/v1760549565/z7120931394105_72ebf1e65b10a9cc59abe62843e2cd18-removebg-preview_wtgmod.png"
        className=""
        initial={{ y: 200, opacity: 0, filter: "blur(20px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.4, // Duração de 1 segundo
          delay: 1, // Começa com um atraso de 0.5 segundos
          type: "spring",
          stiffness: 20,
        }}
      />
    </div>
  );
}