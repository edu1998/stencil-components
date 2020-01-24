import { newE2EPage } from '@stencil/core/testing';

describe('hola-mundo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<hola-mundo></hola-mundo>');

    const element = await page.find('hola-mundo');
    expect(element).toHaveClass('hydrated');
  });
});
