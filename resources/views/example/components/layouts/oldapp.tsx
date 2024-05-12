import type { Children } from '@kitajs/html'
import { route } from '#start/view'
import { Vite } from '#resources/helpers/asset'

interface AppProps {
  children: Children
}

export function OldApp(props: AppProps) {
  const { children } = props
  return (
    <html>
      <head>
        <title>Ma super app</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
        <Vite.Entrypoint
          entrypoints={[
            'resources/assets/example/css/app.css',
            'resources/assets/example/js/app.js',
          ]}
        />
      </head>
      <body>
        <main class="container">
          <nav>
            <ul>
              <li>
                <a href={route('example.home')}>Liste des posts</a>
              </li>
              <li>
                <a href={route('example.posts.add')}>Ajouter un post</a>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
