import { newE2EPage } from '@stencil/core/testing';

describe('samvera-todo-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<samvera-todo-list></samvera-todo-list>');

    const element = await page.find('samvera-todo-list');
    expect(element).toHaveClass('hydrated');
  });
});
