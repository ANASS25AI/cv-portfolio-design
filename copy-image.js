const fs = require('fs');
const path = require('path');

const source = 'c:\\Users\\19991\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\copilot-cli-images\\1775421524759-nh1ycybe.png';
const dest = path.join(__dirname, 'public', 'profile.png');

try {
  fs.copyFileSync(source, dest);
  console.log('✅ Profile image copied successfully to public/profile.png');
} catch (err) {
  console.error('❌ Error copying file:', err.message);
}
