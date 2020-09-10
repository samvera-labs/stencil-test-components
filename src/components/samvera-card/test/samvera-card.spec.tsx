import { newSpecPage } from '@stencil/core/testing';
import { SamveraCard } from '../samvera-card';

describe('samvera-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SamveraCard],
      html: `<samvera-card></samvera-card>`,
    });
    expect(page.root).toEqualHtml(`
      <samvera-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </samvera-card>
    `);
  });
});
