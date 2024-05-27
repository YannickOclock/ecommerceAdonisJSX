import { inject } from '@adonisjs/core'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import imageThumbnail from 'image-thumbnail'
import fs from 'node:fs'

@inject()
export class CategoryImagesService {
  constructor() {}
  async create(image: MultipartFile | undefined): Promise<string | undefined> {
    if (image) {
      const publicPath = app.makePath('public/images/categories')
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
      return imageMinPath
    }
  }
}
