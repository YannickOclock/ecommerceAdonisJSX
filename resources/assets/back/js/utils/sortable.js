export const Sortable = class {
  rect = null

  constructor(element, scrollable = document.body) {
    const self = this
    this.element = element
    this.scrollable = scrollable
    this.element.style.position = 'relative'
    this.items = this.element.querySelectorAll(this.element.dataset.sortable)
    console.log(this.items)
    this.setPositions()
    window.addEventListener('resize', () => {
      self.setPositions()
    })

    interact(this.element.dataset.sortable, {
      context: this.element,
    })
      .draggable({
        inertia: false,
        manualStart: false,
        autoScroll: {
          container: scrollable,
          margin: 150,
          speed: 600,
        },
        onmove: (e) => {
          self.move(e)
        },
      })
      .on('dragstart', (e) => {
        const r = e.target.getBoundingClientRect()
        e.target.classList.add('is-dragged')
        self.startPosition = e.target.dataset.position
        self.offset = {
          x: e.clientX - r.left,
          y: e.clientY - r.top,
        }
        self.scrollTopStart = self.scrollable.scrollTop
      })
      .on('dragend', (e) => {
        e.target.classList.remove('is-dragged')
        self.moveItem(e.target, e.target.dataset.position)
        self.sendResults()
      })
  }

  setPositions = () => {
    this.rect = this.items[0].getBoundingClientRect()
    this.item_width = Math.floor(this.rect.width)
    this.item_height = Math.floor(this.rect.height)
    this.cols = Math.floor(this.element.offsetWidth / this.item_width)
    this.element.style.height = `${this.item_height * Math.ceil(this.items.length / this.cols)}px`

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      item.style.position = 'absolute'
      item.style.top = '0px'
      item.style.left = '0px'
      this.moveItem(item, item.dataset.position)
    }
  }

  move = (e) => {
    // Récupération de la position dans la grille de l'élément
    const p = this.getXY(this.startPosition)

    const x = p.x + e.clientX - e.clientX0
    const y = p.y + e.clientY - e.clientY0 + this.scrollable.scrollTop - this.scrollTopStart
    e.target.style.transform = `translate3D(${x}px, ${y}px, 0)`

    const oldPosition = e.target.dataset.position
    const newPosition = this.guessPosition(x + this.offset.x, y + this.offset.y)
    if (oldPosition !== newPosition) {
      this.swap(oldPosition, newPosition)
      e.target.dataset.position = newPosition
    }
    this.guessPosition(x, y)
  }

  getXY = (position) => {
    const x = this.item_width * (position % this.cols)
    const y = this.item_height * Math.floor(position / this.cols)
    return {
      x: x,
      y: y,
    }
  }

  guessPosition = (x, y) => {
    let col = Math.floor(x / this.item_width)
    if (col >= this.cols) {
      col = this.cols - 1
    }
    if (col <= 0) {
      col = 0
    }
    let row = Math.floor(y / this.item_height)
    if (row < 0) {
      row = 0
    }
    const position = col + row * this.cols
    if (position >= this.items.length) {
      return this.items.length - 1
    }
    return position
  }

  swap = (start, end) => {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (!item.classList.contains('is-dragged')) {
        const position = Number.parseInt(item.dataset.position, 10)
        if (position >= end && position < start && end < start) {
          this.moveItem(item, position + 1)
        } else if (position <= end && position > start && end > start) {
          this.moveItem(item, position - 1)
        }
      }
    }
  }

  moveItem = (item, position) => {
    const p = this.getXY(position)
    item.style.transform = `translate3D(${p.x}px, ${p.y}px, 0)`
    item.dataset.position = position
  }

  sendResults = async () => {
    const results = []
    for (let i = 0, x = this.items.length; i < x; i++) {
      const item = this.items[i]
      results.push({
        imageId: item.dataset.id,
        imageOrder: Number.parseInt(item.dataset.position) + 1,
      })
    }

    const formElement = document.querySelector('form[data-form="order-images"]')
    const formUrl = formElement.getAttribute('action')
    const csrfTokenName = formElement.querySelector('input').getAttribute('name')
    const csrfTokenValue = formElement.querySelector('input').value

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const data = {}
    data[csrfTokenName] = csrfTokenValue
    data['data'] = results

    const response = await fetch(formUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: myHeaders,
    })
    console.log(response)
  }
}
