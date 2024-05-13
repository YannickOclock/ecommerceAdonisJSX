import { Vite } from '#resources/helpers/asset'

export function Slider() {
  return (
    <div class="carousel-container">
      <div class="hidden__slider__left"></div>
      <div id="carousel">
        <Vite.Image
          src={'resources/assets/front/images/sample-1.jpg'}
          alt="Sample 1"
          class="slider__img active"
        />
        <Vite.Image
          src={'resources/assets/front/images/sample-2.jpg'}
          alt="Sample 2"
          class="slider__img"
        />
        <Vite.Image
          src={'resources/assets/front/images/sample-3.jpg'}
          alt="Sample 2"
          class="slider__img"
        />
        <a href="" class="slider__btn left">
          <i class="material-icons">keyboard_arrow_left</i>
        </a>
        <a href="" class="slider__btn right">
          <i class="material-icons">keyboard_arrow_right</i>
        </a>
      </div>
      <div class="hidden__slider__right"></div>
    </div>
  )
}
