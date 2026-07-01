const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./components', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace text-white that is NOT prefixed by hover:, focus:, etc.
    content = content.replace(/(?<![:\w])text-white\b/g, 'text-slate-900 dark:text-white');
    
    // Replace text-gray-300
    content = content.replace(/(?<![:\w])text-gray-300\b/g, 'text-slate-700 dark:text-gray-300');
    
    // Replace text-gray-400
    content = content.replace(/(?<![:\w])text-gray-400\b/g, 'text-slate-600 dark:text-gray-400');
    
    // Replace text-gray-500
    content = content.replace(/(?<![:\w])text-gray-500\b/g, 'text-slate-500 dark:text-gray-500');

    // Fix buttons that need to stay white
    content = content.replace(/bg-blue-600.*?text-slate-900 dark:text-white/g, (match) => {
      return match.replace('text-slate-900 dark:text-white', 'text-white');
    });

    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Fixed colors across all components!');
