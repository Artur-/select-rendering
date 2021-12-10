import '@vaadin/select';
import { html, LitElement, render } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {

  render() {
    return html`
      <vaadin-select .renderer=${this.renderSelect} label="Who are you"></vaadin-select>
    `
  }

  private renderSelect(root: HTMLElement) {
    const listbox = ` 
    <vaadin-list-box>
      <vaadin-item value="me">me</vaadin-item>
      <vaadin-item value="you">you</vaadin-item>
    </vaadin-list-box>
    `;
    root.innerHTML= listbox;
    //render(unsafeHTML(listbox), root); // This works because coincidentally Lit render is a no-op
  }
}
