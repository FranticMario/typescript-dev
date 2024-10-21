type Components = {
    tag: keyof HTMLElementTagNameMap; 
    classNames: string[];
    textContent: string;
    callback?: (event: Event) => void;
    type?: string;
    attributes?: { [key: string]: string },
};

export default class Component {
    element: HTMLElement; 
    #node: HTMLElement | null = null; 

    constructor(params: Components) {
        this.element = document.createElement(params.tag);
        this.#node = this.element; 
        this.createElement(params);
    }

    createElement(params: Components) {
        this.setCssClass(params.classNames);
        this.setTextContent(params.textContent);
        if (params.callback && this.element instanceof HTMLButtonElement) { 
            this.setCallback(params.callback);
        }
        if (params.type) {
            this.setType(params.type);
        }

        if(params.attributes) {
            this.setAttributes(params.attributes)
        }
    }

    getElement() {
        return this.element;
    }

    setCssClass(classArr: string[]) {
        classArr.forEach((className) => {
            this.element.classList.add(className);
        });
    }

    setTextContent(text: string = "") {
        this.element.textContent = text;
    }

    setCallback(callback: (event: Event) => void) {
        this.element.addEventListener("click", (event) => callback(event));
    }

    setType(type: string) {
        if (this.element instanceof HTMLInputElement || this.element instanceof HTMLButtonElement) {
            this.element.setAttribute("type", type);
        }
    }

    setAttributes(attributes: { [key: string]: string }) {
        for (const key in attributes) {
            this.element.setAttribute(key, attributes[key]); 
        }
    }
}