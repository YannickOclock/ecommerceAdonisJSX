// Le slider sur la page d'accueil

interface SliderProps {
  element: HTMLElement | null
  slidesElements: NodeListOf<Element> | null
  position: number
  slidesNumber: number

  constructor(): void
  previous(e: Event): Promise<void>
  next(e: Event): Promise<void>
  sleep(ms: number): Promise<void>
  gotoPrevOrNext(newPosition: number, direction: string): Promise<void>
}

export const Slider: SliderProps = {
  element: null,
  slidesElements: null,
  position: 0,
  slidesNumber: 0,

  constructor() {
    // on mémorise les élements qui nous intéresse
    Slider.element = document.querySelector('#carousel')
    if (Slider.element) {
      Slider.slidesElements = Slider.element.querySelectorAll('.slider__img')
      Slider.slidesNumber = Slider.slidesElements.length

      // boutons prev/next
      const buttons = Slider.element.querySelectorAll('.slider__btn')
      buttons[0].addEventListener('click', Slider.previous)
      buttons[1].addEventListener('click', Slider.next)

      // pastilles de nav
      //Slider.buildNav();
    }
  },

  async previous(e: Event): Promise<void> {
    e.preventDefault()
    let previousPosition: number
    // on détermine la position du slide précédent
    if (Slider.position - 1 >= 0) {
      previousPosition = Slider.position - 1
    } else {
      previousPosition = Slider.slidesNumber - 1
    }
    // on va à la nouvelle position
    await Slider.gotoPrevOrNext(previousPosition, 'right')
  },

  async next(e: Event): Promise<void> {
    e.preventDefault()
    let nextPosition: number
    // on détermine la position du slide suivant
    if (Slider.position + 1 < Slider.slidesNumber) {
      nextPosition = Slider.position + 1
    } else {
      nextPosition = 0
    }
    // on va à la nouvelle position
    await Slider.gotoPrevOrNext(nextPosition, 'left')
  },

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  },

  async gotoPrevOrNext(newPosition: number, direction: string = 'right'): Promise<void> {
    // déterminer la classe de l'élement HTML sur lequel rajouter la direction: right=>prev, left=>next
    const prevOrNext = direction === 'right' ? 'prev' : 'next'

    // N : active/left ou right
    // N+1 : next/left ou right
    Slider.slidesElements[Slider.position].classList.add('active', direction)
    Slider.slidesElements[newPosition].classList.add(prevOrNext, direction)

    await Slider.sleep(600)

    // N-1: on enlève active
    // N: on enlève next/right et on met active

    Slider.slidesElements[Slider.position].classList.remove('active', direction)
    Slider.position = newPosition
    Slider.slidesElements[Slider.position].classList.remove(prevOrNext, direction)
    Slider.slidesElements[Slider.position].classList.add('active')
  },
}
