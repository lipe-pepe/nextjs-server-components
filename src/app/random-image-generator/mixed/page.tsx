import ImageGenerator from "@/components/imageGenerator";
import ServerComponentWrapper from "@/components/serverComponentWrapper";
import getRandomImage from "@/services/getRandomImage";

export default async function MixedExample() {
  const imageData = await getRandomImage();

  return (
    <ServerComponentWrapper>
      <ImageGenerator initialImage={imageData} />
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
    </ServerComponentWrapper>
  );
}
