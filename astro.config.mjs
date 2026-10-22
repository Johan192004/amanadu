// @ts-check
import { defineConfig } from 'astro/config';

// Cuando tenga el dominio definitivo, descomente `site` para generar URLs canónicas.
export default defineConfig({
  // site: 'https://www.amanadu.com',
  trailingSlash: 'ignore',
});
