import path from 'path'
import nunjucks from 'vite-plugin-nunjucks'

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  plugins: [
    nunjucks()
  ]
}