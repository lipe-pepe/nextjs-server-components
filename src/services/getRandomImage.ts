export default async function getRandomImage() {
  const response = await fetch(`https://picsum.photos/200`);
  const data = await response.blob();
  const imageData = Buffer.from(await data.arrayBuffer());

  return `data:${data.type};base64,${imageData.toString("base64")}`;
}
