class Component {
  constructor(template, style, modifiers, text, events) {
    this.template = template
    this.style = style
    this.modifiers = modifiers
    this.text = text
    this.events = events
    this.element = document.createElement("div")
  }

  render() {
    this.element.innerHTML = this.template
    this.element.classList.add(this.style)
    this.addModifiers()
    this.addText()
    this.addEvents()
    return this.element
  }

  addModifiers() {
    for (let modifier of this.modifiers) {
      this.element.classList.add(modifier)
    }
  }

  addText() {
    for (let key in this.text) {
      if (this.text.hasOwnProperty(key)) {
        this.element.querySelector(`.${key}`).textContent = this.text[key]
      }
    }
  }

  addEvents() {
    for (let key in this.events) {
      if (this.events.hasOwnProperty(key)) {
        this.element.addEventListener(key, this.events[key])
      }
    }
  }
}

const template = `
  <button class="button">
    <span class="button__text"></span>
  </button>
`
const style = "button--primary"
const modifiers = ["button--large"]
const text = { button__text: "Нажми!" }
const events = { click: () => alert("Нажал!") }

const button = new Component(template, style, modifiers, text, events)
document.body.appendChild(button.render())
