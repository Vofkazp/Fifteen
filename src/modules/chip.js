export default class Chip {
  constructor(value, position) {
    this.value = value;
    this.position = position;
    this.element = this.createElement();
  }

  createElement() {
    const app = document.getElementById('app');
    const div = document.createElement("div");
    div.classList.add("chip");
    div.style.cssText = `--x: ${this.position.x}; --y: ${this.position.y}`;
    div.innerHTML = this.value;
    app.appendChild(div);
    return div;
  }

  changePosition(nevPosition) {
    this.position = nevPosition;
    this.moveElement();
  }

  moveElement() {
    this.element.style.cssText = `--x: ${this.position.x}; --y: ${this.position.y}`;
  }
}