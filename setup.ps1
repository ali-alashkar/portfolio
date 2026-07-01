# Portfolio Setup Script
# Run this in PowerShell from the ali-portfolio directory

Write-Host "Setting up Ali Haitham Portfolio..." -ForegroundColor Cyan

# Create public directory
New-Item -ItemType Directory -Force -Path ".\public" | Out-Null

# Copy photos
$photosDir = "C:\Users\Calipso0\.gemini\antigravity-ide\brain\26549897-0912-43a3-aa96-d88e4a537ebe"

if (Test-Path "$photosDir\media__1782934643881.png") {
    Copy-Item "$photosDir\media__1782934643881.png" ".\public\ali-hero.png" -Force
    Write-Host "✓ Hero photo copied" -ForegroundColor Green
} else {
    Write-Host "⚠ Hero photo not found - please add ali-hero.png to public\" -ForegroundColor Yellow
}

if (Test-Path "$photosDir\media__1782934698392.jpg") {
    Copy-Item "$photosDir\media__1782934698392.jpg" ".\public\ali-about.jpg" -Force
    Write-Host "✓ About photo copied" -ForegroundColor Green
} else {
    Write-Host "⚠ About photo not found - please add ali-about.jpg to public\" -ForegroundColor Yellow
}

# Install dependencies
Write-Host "`nInstalling npm packages..." -ForegroundColor Cyan
npm install

Write-Host "`n✓ Setup complete! Run 'npm run dev' to start the portfolio." -ForegroundColor Green
Write-Host "Open http://localhost:3000 in your browser." -ForegroundColor Cyan
