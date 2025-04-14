import Divider from "@/components/divider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="py-8 flex flex-col items-center justify-center">
        <h1>Server Components</h1>
        <p>Entendendo a feature do React</p>
      </div>
      <Divider />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Index sidebar */}
        <nav className="hidden lg:block w-1/4 sticky top-16 self-start">
          <ul className="space-y-2">
            <li>
              <a href="#secao1" className="hover:text-blue-500">
                Seção 1
              </a>
            </li>
            <li>
              <a href="#secao1" className="hover:text-blue-500">
                Seção 2
              </a>
            </li>
            <li>
              <a href="#secao1" className="hover:text-blue-500">
                Seção 3
              </a>
            </li>
            <li>
              <a href="#secao1" className="hover:text-blue-500">
                Seção 4
              </a>
            </li>
          </ul>
        </nav>
        {/* Main text area */}
        <main className="w-full lg:w-3/4">
          <h2>Uma breve história 📜</h2>
          <p>
            Antes de mergulhar do conceito de Server Components, é importante
            saber um pouco de como eles surgiram. Bem pouco, eu prometo.
          </p>
          <p>
            E para saber isso, é preciso se familiarizar com o conceito de
            Server Side Rendering (SSR) e Client Side Rendering (CSR). Essas são
            duas técnicas de renderização do websites. Ao renderizar uma
            aplicação web, o código JavaScript, com que foi escrito, é
            convertido para HTML e CSS, que o navegador usa para exibir a
            interface de usuário.
          </p>
          <p>
            Essa conversão pode ocorrer do lado do servidor ou do lado do
            cliente, o que caracteriza as duas técnicas de renderização.
          </p>
          <p>Você se lembra quem é o servidor e quem é o cliente?</p>
          <div className="flex flex-row justify-center gap-6">
            <div className="flex flex-col justify-center items-center">
              <Image
                alt="Server picture"
                src="/images/server.png"
                width={128}
                height={128}
              />
              <h3>Servidor</h3>
              <p>
                O computador em um data center que guarda o código da aplicação
                do site.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                alt="Browser picture"
                src="/images/browser.png"
                width={128}
                height={128}
              />
              <h3>Cliente</h3>
              <p>
                O navegador que está acessando um site e exibindo-o para o
                usuário.
              </p>
            </div>
          </div>
          <p>
            No SSR, a conversão é feita no servidor, que envia para o cliente o
            HTML e o CSS, ou seja, a página pronta para ser exibida. No CSR, o
            servidor envia o código JavaScript para o cliente, que então o
            converte em HTML e CSS e exibe a interface da página para o usuário.
          </p>
          {/* BOTAR IMAGEM EXEMPLIFICANDO */}
          <p>
            Por muito tempo, o React só fazia Client Side Rendering. Quando o
            Next.js surgiu, em 2016, ele trouxe o Server Side Rendering. Essa
            feature foi muito importante porque impulsiona os sites para os
            motores de busca (SEO). Ou seja, usando SSR, sua aplicação tem maior
            chance de aparecer nas buscas do Google e relativos.
          </p>
          <p>
            Mas, nem tudo são flores. O SSR só era usado em páginas, enquanto os
            componentes (que compoem as páginas) em si, eram renderizados com
            CSR. Isso porque a interação do usuário com componentes, como
            cliques em botões e submits de formulários, necessita do código
            JavaScript para funcionar. Então somente o CSR serve para esses
            casos. Eis que, no final de 2020, o React anunciou os Server
            Components, que prometiam otimizar a renderização em vários
            aspectos.
          </p>
          <h2>Server Components</h2>
          <p>
            Os Server Components são componentes que são renderizados com SSR.
            Com eles, conseguimos enviar menos código JavaScript para o cliente
            e assim obter mais performance na aplicação. E ainda conseguimos
            aliar essa performance com a interatividade do CSR.
          </p>
          <p>
            Fazemos isso separando os componentes interagíveis do nosso Server
            Component em Client Components. Os Client Components serão
            pré-renderizados no servidor, então uma preview não-interative
            desses componentes é exibida para o usuário. Após isso, eles passam
            por um processo chamado de hidratação, que é quando o HTML estático
            recebe o JavaScript necessário para a interação funcionar.
          </p>
          <h3>No Next.js</h3>
          <p>
            A partir do Next.js 13, usando o App Router, os Server Components
            são o componente padrão. Ou seja, todo componente criado vai ser
            renderizado do lado do servidor. Para usar features de interação, é
            necessário colocar uma diretiva &quot;use client&quot; no início do
            arquivo do componente.
          </p>
          <p>
            Colocando essa diretiva, você define o limite entre o que deve ser
            renderizado de cada lado. Isso porque qualquer componente utilizado
            num Client Component é tido como parte dele e também é renderizado
            com CSR. Se for necessário usar Server Components dentro de Client
            Components, isso só pode ser feito usando a propriedade children do
            componente.
          </p>
          <p>
            Ah, e se você tentar usar alguma interatividade num Server
            Component, o Next.js vai te mostrar um erro tipo esse aqui:
          </p>
          <div className="p-4 text-red-700 border-red-700 rounded-lg border-2">
            You&apos;re importing a component that needs `useEffect`. This React
            hook only works in a client component. To fix, mark the file (or its
            parent) with the `&quot;use client&quot;` directive.
          </div>
          {/* BOTAR IMAGEM */}
          <p>
            Bem auto-explicativo, né? Só colocar &quot;use client&quot; no topo
            do arquivo, e voi lá.
          </p>
          <p>
            É importante pensar em sempre ter o mínimo de JavaScript sendo
            enviado para o cliente, portanto, dividir bem o que precisa ser
            Client Component e o que não precisa, quando for criar sua árvore de
            componentes.
          </p>
          {/* MUITO MAIS CONTEÚDO, PEGAR REFERENCIAS DA PARTE RENDERING DO SITE DO NEXT */}
          <h2>Na prática</h2>
          <p>
            Veja agora um exemplo de uso de Server Components. Abaixo, há botões
            para páginas iguais. Todas mostram uma imagem aleatória buscada de
            uma API. No entanto, uma foi feita com Server Component, outra foi
            feita 100% com Client Components e a última foi feita utilizando
            ambos.
          </p>

          <div className="flex flex-row gap-8">
            <Link href={"/random-image-generator/server"}>
              <div className="p-4 bg-blue-500 font-bold">Server Component</div>
            </Link>

            <Link href={"/random-image-generator/client"}>
              <div className="p-4 bg-blue-500 font-bold">Client Component</div>
            </Link>

            <Link href={"/random-image-generator/mixed"}>
              <div className="p-4 bg-blue-500 font-bold">Ambos</div>
            </Link>
          </div>

          {/* TODO - Transformar num componente */}
          <p>
            Atenção! No Server Component podemos fazer tudo que um backend faria
            direto no corpo do componente, como chamadas a APIs e queries para
            bancos de dados. Mas isso deve ser feito com cuidado, pois pode
            prejudicar a escalabilidade e não segue o princípio da Separação de
            Responsabilidades, importante no desenvolvimento de software.
          </p>
        </main>
      </div>
    </div>
  );
}

// Colocar tecnologias clicáveis ou destacadas.
// Colocar meu nome
// DAR CRÉDITO AO FREEPIK <a href="https://www.flaticon.com/br/icones-gratis/servidor" title="servidor ícones">Servidor ícones criados por Freepik - Flaticon</a>
