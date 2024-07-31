import { Vite } from '#resources/helpers/asset'
import { HttpContext } from '@adonisjs/core/http'

interface MasterProps {
  children: JSX.Element
}

export function Master(props: MasterProps) {
  const { children } = props

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
          <Vite.Entrypoint
            entrypoints={['resources/assets/back/css/app.css', 'resources/assets/back/js/app.ts']}
          />
        </head>
        <body data-theme={usedTheme} up-main>
          {children}
        </body>
      </html>
    </>
  )
}
