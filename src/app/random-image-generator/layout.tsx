export default function RandomImageGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>Gerador de Imagem Aleatória</h1>
      {children}
    </div>
  );
}
