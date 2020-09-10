import { newSpecPage } from '@stencil/core/testing';
import { SamveraTodoList } from '../samvera-todo-list';

describe('samvera-todo-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SamveraTodoList],
      html: `<samvera-todo-list></samvera-todo-list>`,
    });
    expect(page.root).toEqualHtml(`
      <samvera-todo-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </samvera-todo-list>
    `);
  });
});
