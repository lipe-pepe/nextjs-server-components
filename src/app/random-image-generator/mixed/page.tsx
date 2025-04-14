import ImageGenerator from "@/components/imageGenerator";
import ServerComponentWrapper from "@/components/serverComponentWrapper";
import getRandomImage from "@/services/getRandomImage";

export default async function MixedExample() {
  const imageData = await getRandomImage();

  return (
    <ServerComponentWrapper>
      <p>
        Nesse exemplo, a imagem é buscada no servidor, pelo Server Component.
        Isso faz com que, quando a página é carregada, a imagem já esteja
        renderizada. Assim, evitamos o layout shift e entregamos mais
        experiência para o usuário!
      </p>
      <p>
        Ainda assim, podemos ter interatividade ao usar um Client Component
        dentro desse Server Component. Então, o usuário ainda pode atualizar a
        imagem.
      </p>
      <ImageGenerator initialImage={imageData} />

      {/* <p>
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
      <p>Volte e veja o exemplo com Client Component.</p> */}
    </ServerComponentWrapper>
  );
}
