const fs = require('fs');

try {
  fs.copyFileSync(
    'c:\\Users\\19991\\AppData\\Roaming\\Code\\User\\globalStorage\\github.copilot-chat\\copilot-cli-images\\1775421524759-nh1ycybe.png',
    'c:\\Users\\19991\\Desktop\\cv-portfolio-design\\public\\profile.png'
  );
  console.log('✓ File copied successfully to public/profile.png');
} catch (error) {
  console.error('✗ Error copying file:', error.message);
  process.exit(1);
}
