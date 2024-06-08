import { Vite } from '#resources/helpers/asset'
import { categoryService } from '#resources/helpers/categories'
import { route } from '#start/view'
import { HttpContext } from '@adonisjs/core/http'

export async function Nav() {
  const { auth } = HttpContext.getOrFail()
  await auth.check()

  const categories = await categoryService.getCategories()

  return (
    <header id="header">
      <div id="header-nav">
        <div class="container">
          <nav class="left-nav">
            <a href="#">Contactez-nous</a>
          </nav>
          <nav class="right-nav">
            {auth.user ? (
              <>
                <a class="nav-link" href={route('front.logout')}>
                  <i class="material-icons">person</i>
                  <span>Me déconnecter</span>
                </a>
                <a class="nav-link" href={route('admin.dashboard')}>
                  <i class="material-icons">admin_panel_settings</i>
                  <span>Administration</span>
                </a>
              </>
            ) : (
              <a class="nav-link" href={route('front.login')}>
                <i class="material-icons">person</i>
                <span>Connexion</span>
              </a>
            )}
            <div id="cart" up-source={route('front.cart')} load-fragment></div>
          </nav>
        </div>
      </div>
      <div id="header-top">
        <a href={route('front.home')}>
          <Vite.Image
            src={'resources/assets/front/images/logo.png'}
            alt="Logo"
            width="100"
            height="28"
          />
        </a>
        <nav id="menu">
          <ul>
            {categories.map((category) => (
              <li>
                <a href="#">{category.name}</a>
                {category.subCategories.length > 0 && (
                  <ul class="submenu">
                    {category.subCategories.map((subCategory) => (
                      <li>
                        <a href="#">{subCategory.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <form id="search">
          <input type="text" placeholder="Rechercher" />
          <i class="material-icons">search</i>
        </form>
      </div>
    </header>
  )
}
