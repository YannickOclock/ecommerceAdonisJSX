import { categoryImagesMinSrc, productImagesMinSrc } from '#resources/helpers/utils'
import app from '@adonisjs/core/services/app'
import { existsSync } from 'node:fs'

interface PublicImageInterface {
  src: string
  alt: string
  type?: string
  classes?: string
}
export function PublicImage(props: PublicImageInterface) {
  const { src, alt, type = 'product', classes = 'h-12' } = props
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
  if (!pathSrc || (pathSrc && !existsSync(`${app.makePath('public')}/${pathSrc}`))) {
    pathSrc = 'https://fakeimg.pl/300x300?text=No+image'
  }

  return <img src={pathSrc} alt={`${alt}`} class={classes} />
}
