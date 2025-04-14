import getRandomImage from "@/services/getRandomImage";

export default async function ServerComponentExample() {
  const imageData = await getRandomImage();
  return (
    <div>
      <div
        className="w-96 h-96 bg-cover bg-no-repeat bg-center rounded-lg"
        style={{ backgroundImage: `url(${imageData})` }}
      />
      <p>
        Percebeu como a página demorou um pouco para carregar, mas assim que
        carregada, tudo foi exibido de uma vez só? Se não percebeu, recarregue a
        página e veja novamente.
      </p>
      <p>
        Isso acontece porque, com o Server Component, tudo é renderizado do lado
        do servidor. Inclusive, a busca da imagem pela API. A imagem já vem
        pronta do lado do servidor. No entanto, não conseguimos ter nenhuma
        interatividade na página. Por exemplo, e se o usuário quisesse gerar uma
        nova imagem?
      </p>
      <p>Volte e veja o exemplo com Client Component.</p>
    </div>
  );
}
