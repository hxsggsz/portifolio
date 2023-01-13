import Image from "next/image"

type HeaderTypes = {
  text: string,
  image: string,
  altText: string,
}

export const Header = ({ text, image, altText }: HeaderTypes) => {
  return (
    <main>
      <img src={image} alt={altText} />
      <h1>{text}</h1>
    </main>
  )
}