const fs = require('fs');
const path = require('path');

const source = 'c:\\Users\\19991\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\copilot-cli-images\\1775423428222-ewbtk3qr.png';
const dest = path.join(__dirname, 'public', 'mai-logo.png');

try {
  fs.copyFileSync(source, dest);
  console.log('✅ MAI logo copied successfully to public/mai-logo.png');
} catch (err) {
  console.error('❌ Error copying file:', err.message);
}
