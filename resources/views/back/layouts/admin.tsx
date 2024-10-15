import { Vite } from '#resources/helpers/asset'
import { Drawer } from '#viewsback/components/drawer'
import { Nav } from '#viewsback/partials/nav'
import { Header } from '#viewsback/partials/header'
import { HttpContext } from '@adonisjs/core/http'
import { MessagesManager } from '#viewsback/components/messages/messages_manager'

interface AdminProps {
  children: JSX.Element
  title?: string
  classes?: string
}

export function Admin(props: AdminProps) {
  const { children, title = 'Tableau de bord', classes } = props

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
            entrypoints={['resources/assets/back/css/app.css', 'resources/assets/back/js/app.ts']}
          />
        </head>
        <body data-theme={usedTheme}>
          <Header />
          <Drawer nav={<Nav />} classes={classes}>
            <MessagesManager />
            {children}
          </Drawer>
        </body>
      </html>
    </>
  )
}
