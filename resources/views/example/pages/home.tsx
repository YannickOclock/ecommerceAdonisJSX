import { OldApp } from '#views/example/components/layouts/oldapp'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { PostListQueryResult } from '#blog/repositories/post_repository'

interface HomeProps {
  posts: PostListQueryResult
}

export function Home(props: HomeProps) {
  const flashMessages = getFlashMessages()
  return (
    <OldApp>
      {flashMessages.has('notification') && (
        <div class={'flash-message ' + flashMessages.get('notification').type}>
          {flashMessages.get('notification').message}
        </div>
      )}
      <h1>Hello world !</h1>
      <p>Voici les derniers posts publiés sur notre site :</p>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Statut</th>
            <th>Date de création</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((post) => {
            return (
              <tr>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.status}</td>
                <td>{post.createdAt.toFormat('dd/MM/yyyy')}</td>
                <td>
                  <a href={'/post/' + post.id}>Voir</a> |{' '}
                  <a href={'/post/' + post.id + '/edit'}>Modifier</a> |{' '}
                  <a href={'/post/' + post.id + '/delete'}>Supprimer</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </OldApp>
  )
}
