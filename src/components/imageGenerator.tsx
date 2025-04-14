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
      <div className="flex flex-col items-center my-4">
        <div
          className="w-48 h-48 bg-cover bg-no-repeat bg-center rounded-lg"
          style={{ backgroundImage: `url(${imageData})` }}
        />

        <button
          className="mt-4 p-4 cursor-pointer bg-blue rounded-lg text-white font-bold"
          onClick={handleNewImage}
        >
          {loading ? "Carregando..." : "Gerar nova imagem"}
        </button>
      </div>
    </ClientComponentWrapper>
  );
};

export default ImageGenerator;
