import { Vite } from '#resources/helpers/asset'
import { Drawer } from '#viewsbackv2/components/drawer'
import { Nav } from '#viewsbackv2/partials/nav'
import { Header } from '#viewsbackv2/partials/header'
import { HttpContext } from '@adonisjs/core/http'
import { SuccessMessage } from '#viewsbackv2/components/messages/success_message'
import { MessagesManager } from '#viewsbackv2/components/messages/messages_manager'

interface AdminProps {
  children: JSX.Element
  title?: string
}

export function Admin(props: AdminProps) {
  const { children, title = 'Tableau de bord' } = props

  // -- On récupère le User
  const httpContext = HttpContext.getOrFail()
  const user = httpContext.auth.getUserOrFail()
  const darkMode = user ? user.darkMode : false
  const usedTheme: string = darkMode ? 'dark' : 'cupcake'

  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang={'fr'}>
        <head>
          <meta charset={'UTF-8'} />
          <meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
          <title>{title}</title>
          <Vite.Entrypoint
            entrypoints={[
              'resources/assets/backv2/css/app.css',
              'resources/assets/backv2/js/app.ts',
            ]}
          />
        </head>
        <body data-theme={usedTheme}>
          <Header />
          <Drawer nav={<Nav />}>
            <MessagesManager />
            {children}
          </Drawer>
        </body>
      </html>
    </>
  )
}
