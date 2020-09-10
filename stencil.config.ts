import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-test-components',
  globalStyle: 'src/global/milligram.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  copy: [
    {
      src: 'node_modules/milligram/dist/milligram.css',
      dest: 'assets/css/milligram.css',
    },
  ],
};
