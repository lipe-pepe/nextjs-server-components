"use client";

import React, { useState } from "react";
import ClientComponentWrapper from "./clientComponentWrapper";
import getRandomImage from "@/services/getRandomImage";

interface ImageGeneratorProps {
  initialImage: string;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ initialImage }) => {
  const [imageData, setImageData] = useState(initialImage);
  const [loading, setLoading] = useState(false);

  const handleNewImage = () => {
    setLoading(true);
    getRandomImage().then((data) => {
      setLoading(false);
      setImageData(data);
    });
  };

  return (
    <ClientComponentWrapper>
      <div
        className="w-96 h-96 bg-cover bg-no-repeat bg-center rounded-lg"
        style={{ backgroundImage: `url(${imageData})` }}
      />

      <button
        className="mt-4 p-4 cursor-pointer bg-blue rounded-lg text-white font-bold"
        onClick={handleNewImage}
      >
        {loading ? "Carregando..." : "Gerar nova imagem"}
      </button>
    </ClientComponentWrapper>
  );
};

export default ImageGenerator;
