import path from 'path'
import fs from 'fs'
import nunjucks from 'vite-plugin-nunjucks'

const mappingAllHtmlFiles = (parentDir = '', prefix = '') => {
  // read all files in the directory and subdirectories
  const files = fs.readdirSync(parentDir)
  let mapping = {}
  files.forEach((file) => {
    let filePath = path.join(parentDir, file)
    
    // if the file is a directory, recursively read the file
    if (fs.statSync(filePath).isDirectory()) {
      mapping = { ...mapping, ...mappingAllHtmlFiles(filePath, `${file}.`) }
    } else {
      const name = file.split('.').slice(0, -1).join('.')
      mapping[`${prefix}${name}`] = filePath
    }
  })
  return mapping
}

export default {
  root: path.resolve(__dirname, 'src'),
  publicDir: path.resolve(__dirname, 'src/public'),
  plugins: [
    nunjucks({
      templatesDir: path.resolve(__dirname, 'src/html'),
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: mappingAllHtmlFiles(path.resolve(__dirname, 'src/html')),
    },
    // lib: {
    //   entryAlias: '@/scripts/main.js',
    //   fileName: "main",
    //   entry: path.resolve(__dirname, "src/scripts/main.js"),
    //   formats: ["es"],
    // },
  }
}