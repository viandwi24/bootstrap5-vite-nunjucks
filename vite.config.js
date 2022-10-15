import path from 'path'
import fs from 'fs'
import nunjucks from 'vite-plugin-nunjucks'

const mappingAllHtmlFiles = (parentDir = '') => {
  // read all files in the directory and subdirectories
  const files = fs.readdirSync(parentDir)
  const mapping = {}
  files.forEach((file) => {
    let filePath = path.join(parentDir, file)
    
    // if the file is a directory, recursively read the file
    if (fs.statSync(filePath).isDirectory()) {
      mappingAllHtmlFiles(filePath)
    } else {
      const name = file.split('.').slice(0, -1).join('.')
      mapping[name] = filePath
    }
  })
  console.log(mapping, path.resolve(__dirname, 'src/html', 'index.html'))
  return mapping
}

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
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      // input all html files from src/html
      // input: {
      //   index: path.resolve(__dirname, 'src/html', 'index.html'),
      //   about: path.resolve(__dirname, 'src/html', 'about.html'),
      // }
      input: mappingAllHtmlFiles(path.resolve(__dirname, 'src/html'))
    },
    sourcemap: true,
  },
  plugins: [
    nunjucks({
      templatesDir: path.resolve(__dirname, 'src/html'),
    })
  ]
}