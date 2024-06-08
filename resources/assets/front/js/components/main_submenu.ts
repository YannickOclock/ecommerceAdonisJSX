// Gérer les sous-menus dans la navigation générale du site

const menuElements = document.querySelectorAll('#menu > ul > li') as NodeListOf<HTMLLIElement>

// Fonction qui permet de cacher le submenu
function hideAllSubMenus(currentMenu = undefined) {
  const filteredMenus = [...menuElements]
  if (currentMenu !== undefined) {
    filteredMenus.filter((menuElement) => menuElement !== currentMenu)
  }
  for (const menuElement of menuElements) {
    const submenuElement = menuElement.querySelector('.submenu') as HTMLUListElement
    if (submenuElement !== null && submenuElement.style.display === 'flex') {
      submenuElement.style.display = 'none'
    }
  }
}

// Action sur un menu
for (const menuElement of menuElements) {
  menuElement.addEventListener('mouseover', function (e: MouseEvent) {
    e.preventDefault()
    const currentMenuElement = e.currentTarget as HTMLUListElement
    hideAllSubMenus(currentMenuElement)
    const submenuElement = currentMenuElement.querySelector('.submenu') as HTMLLIElement
    if (submenuElement !== null && submenuElement.style.display !== 'flex') {
      submenuElement.style.display = 'flex'
    }
  })
}

const headerTopElement = document.querySelector('#header-nav')
headerTopElement.addEventListener('mouseover', hideAllSubMenus)
const carouselElement = document.querySelector('.carousel-container')
if (carouselElement !== null) {
  carouselElement.addEventListener('mouseover', hideAllSubMenus)
}
const mainElement = document.querySelector('main')
mainElement.addEventListener('mouseover', hideAllSubMenus)
