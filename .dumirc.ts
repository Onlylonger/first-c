import { defineConfig } from 'dumi';

const atomDirsMap = ['components', 'hooks', 'icons', 'utils'];

export default defineConfig({
  outputPath: 'docs',
  base: '/first-c/',
  publicPath: '/first-c/',
  resolve: {
    docDirs: ['routes'],
    atomDirs: atomDirsMap.map((v) => ({
      type: v,
      dir: `src/${v}`,
    })),
  },
  themeConfig: {
    name: 'first-c',
    logo: '/first-c/logo.png',
  },
});
