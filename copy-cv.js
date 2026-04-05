const fs = require('fs');
const path = require('path');

const source = 'c:\\Users\\19991\\Desktop\\Anass_CV.pdf';
const dest = path.join(__dirname, 'public', 'Anass_Nassiri_CV.pdf');

try {
  fs.copyFileSync(source, dest);
  console.log('✅ CV copied successfully to public/Anass_Nassiri_CV.pdf');
} catch (err) {
  console.error('❌ Error copying file:', err.message);
}
