const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Calipso0\\.gemini\\antigravity-ide\\brain\\4bc61c74-3d92-4c67-b3a4-9ec39786fa32';
const destDir = 'e:\\ali-portfolio\\public';

const files = {
  'mern_booking_screenshot_1782946541870.png': 'project-mern-booking.png',
  'gym_management_screenshot_1782946552482.png': 'project-gym.png',
  'student_attendance_screenshot_1782946575153.png': 'project-student.png',
  'cinema_management_screenshot_1782946588258.png': 'project-cinema.png'
};

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

Object.entries(files).forEach(([srcFile, destFile]) => {
  const srcPath = path.join(srcDir, srcFile);
  const destPath = path.join(destDir, destFile);

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied: ${srcFile} -> ${destFile}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});

console.log('Finished copying project screenshots!');
