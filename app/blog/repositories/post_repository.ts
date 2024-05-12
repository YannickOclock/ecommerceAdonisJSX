import Post from '#blog/models/post'
import { ResultOf } from '#types/common'

interface StorePostDTO {
  title: string
  author: string
  content: string
  status: string
}

export type PostListQueryResult = ResultOf<PostRepository, 'all'>

export class PostRepository {
  async all() {
    return await Post.query().where('status', 'published').orderBy('created_at', 'desc').limit(5)
  }

  async create(payload: StorePostDTO) {
    const post = new Post()
    post.title = payload.title
    post.author = payload.author
    post.content = payload.content
    post.status = payload.status
    await post.save()
  }
}
