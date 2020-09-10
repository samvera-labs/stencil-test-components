import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'samvera-card',
  styleUrl: 'samvera-card.css',
  shadow: true,
})
export class SamveraCard {
  /**
   * Image url
   */
  @Prop() imgUrl: string;

  /**
   * Title
   */
  @Prop() cardTitle: string;

  /**
   * Description
   */
  @Prop() description: string;

  /**
   * Action button link
   */
  @Prop() actionLink: string;

  render() {
    return (
      <Host>
        <img src={this.imgUrl} />
        <div class="card-contents">
          <h3>{this.cardTitle}</h3>
          <p>{this.description}</p>
        </div>
        <a class="button card-button" href={this.actionLink} target="_blank">View item</a>
      </Host>
    );
  }

}
