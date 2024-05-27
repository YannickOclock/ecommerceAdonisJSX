import { categoryImagesMinSrc, productImagesMinSrc } from '#resources/helpers/utils'

interface PublicImageInterface {
  src: string
  alt: string
  type?: string
}
export function PublicImage(props: PublicImageInterface) {
  const { src, alt, type = 'product' } = props
  let pathSrc
  switch (type) {
    case 'category':
      pathSrc = categoryImagesMinSrc(src)
      break
    case 'product':
    default:
      pathSrc = productImagesMinSrc(src)
      break
  }
  if (!pathSrc) pathSrc = 'https://fakeimg.pl/300x300?text=No+image'

  return <img src={pathSrc} alt={`${alt}`} />
}
