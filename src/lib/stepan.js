import StepanError from '/src/lib/stepanError.js'; 

export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    const newElement = document.createElement(element);

    if (newElement.toString() == "[object HTMLUnknownElement]")
      throw new StepanError("invalid tag name")

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      if (!parent) 
        throw new StepanError("null parent");
      
      else if (!(parent instanceof HTMLElement)) 
        throw new StepanError("parent is not DOM object")
      
      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }

}
