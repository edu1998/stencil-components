import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hola-mundo',
  styleUrl: 'mundo.css',
  shadow: true
})
export class Mundo {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
