import {
  ProductImageRepository,
  StoreProductImageDTO,
} from '#admin/product/repositories/product_image_repository'
import { productImagesMinPath, productImagesPath } from '#resources/helpers/utils'
import { inject } from '@adonisjs/core'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import imageThumbnail from 'image-thumbnail'
import fs from 'node:fs'

@inject()
export class ProductImagesService {
  constructor(private productImageRepository: ProductImageRepository) {}
  async create(productId: string, images: MultipartFile[]) {
    for (const image of images) {
      const publicPath = productImagesPath()
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
      fs.writeFile(
        `${productImagesMinPath()}/${imageMinPath}`,
        Buffer.from(thumbnail, 'base64'),
        (err) => {
          console.log(err)
        }
      )
      const payloadImage: StoreProductImageDTO = {
        path: imageMinPath,
        productId: productId,
      }
      await this.productImageRepository.create(payloadImage)
    }
  }
}
