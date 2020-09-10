import { newE2EPage } from '@stencil/core/testing';

describe('samvera-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<samvera-card></samvera-card>');

    const element = await page.find('samvera-card');
    expect(element).toHaveClass('hydrated');
  });
});
