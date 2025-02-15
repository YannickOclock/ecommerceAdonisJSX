import {
  ProductImageRepository,
  StoreProductImageDTO,
} from '#admin/product/repositories/product_image_repository'
import { inject } from '@adonisjs/core'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import imageThumbnail from 'image-thumbnail'
import fs from 'node:fs'

@inject()
export class ProductImagesService {
  constructor(private productImageRepository: ProductImageRepository) {}
  async create(productId: string, images: MultipartFile[] | undefined): Promise<void> {
    // TODO: à voir comment optimiser (return repo.create() et Promise.all en dehors de ton scope)
    if (!images) return

    // eslint-disable-next-line"
    for (const [i, image] of images.entries()) {
      const publicPath = app.makePath('public/images/products')
      const imageName = `${cuid()}`
      const imagePath = `${imageName}.${image.extname}`
      const imageMinPath = `${imageName}-min.${image.extname}`
      await image.move(publicPath, {
        name: imagePath,
      })
      const thumbnail = await imageThumbnail(`${publicPath}/${imagePath}`, {
        width: 350,
        height: 350,
        responseType: 'base64',
      })
      fs.writeFile(`${publicPath}/${imageMinPath}`, Buffer.from(thumbnail, 'base64'), (err) => {
        console.log(err)
      })
      const payloadImage: StoreProductImageDTO = {
        path: imageMinPath,
        productId: productId,
        order: i + 1,
      }
      // TODO: idéalement le await à intégrer dans un Promise.all()
      await this.productImageRepository.create(payloadImage)
    }
  }

  async deleteFromProductImage(productImageId: string): Promise<boolean> {
    const productImage = await this.productImageRepository.find(productImageId)
    const publicPath = app.makePath('public/images/products')

    const imageMin = productImage.path

    // Supprimer l'ancienne image uniquement s'il y a en a une sur la catégorie
    if (imageMin) {
      const image = imageMin?.replace('-min', '')
      if (fs.existsSync(`${publicPath}/${imageMin}`) && fs.existsSync(`${publicPath}/${image}`)) {
        fs.unlinkSync(`${publicPath}/${imageMin}`)
        fs.unlinkSync(`${publicPath}/${image}`)
        await this.productImageRepository.delete(productImage)
        return true
      }
    }

    return false
  }
}
