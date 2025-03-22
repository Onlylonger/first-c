import { defineConfig } from 'dumi';

const atomDirsMap = ['components', 'hooks', 'icons', 'utils'];

export default defineConfig({
  outputPath: 'docs',
  resolve: {
    docDirs: ['routes'],
    atomDirs: atomDirsMap.map((v) => ({
      type: v,
      dir: `src/${v}`,
    })),
  },
  themeConfig: {
    name: 'first-c',
    logo: '/logo.png',
  },
});
