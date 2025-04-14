"use client";

import getRandomImage from "@/services/getRandomImage";
import { useEffect, useState } from "react";

export default function ClientComponentExample() {
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleNewImage();
  }, []);

  const handleNewImage = () => {
    setLoading(true);
    getRandomImage().then((data) => {
      setLoading(false);
      setImageData(data);
    });
  };

  return (
    <div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div
          className="w-96 h-96 bg-cover bg-no-repeat bg-center rounded-lg"
          style={{ backgroundImage: `url(${imageData})` }}
        />
      )}
      <button
        className="mt-4 p-4 cursor-pointer bg-blue-500 rounded-lg text-white font-bold"
        onClick={handleNewImage}
      >
        Gerar nova imagem
      </button>
      <p>
        Percebeu como a página carregou na mesma hora que você clicou para
        visitá-la, mas a imagem demorou para carregar? Se não percebeu,
        recarregue a página.
      </p>
      <p>
        Isso ocorre porque no Client Component, tudo é renderizado do cliente.
        Então a busca da imagem pela API, só ocorre no navegador e enquanto não
        temos a imagem, exibimos uma mensagem de loading. Como estamos no
        cliente, conseguimos ter interatividade e o usuário pode clicar no botão
        para gerar uma nova imagem.
      </p>
      <p>
        Não é tão bom para a experiência do usuário quando a página carrega e os
        componentes ainda não estão prontos. Nesse exemplo daqui, isso é pouco
        problemático, mas imagine numa página com muitos elementos que dependem
        de dados externos... Outra coisa ruim para a experiência que ocorre aqui
        é o layout shift, quando todo o layout da página é empurrado após a
        imagem ser carregada.
      </p>
      <p>Volte e veja o exemplo misturado para uma melhor versão da página.</p>
    </div>
  );
}
