@echo off
REM Rebuilds the two script bundles that index.html and conference.html load.
REM Run this after editing ANY file in js/ (except the widget scripts, which load directly).
REM Requires Node.js. The first run downloads esbuild automatically.
cd /d "%~dp0"
call npx --yes esbuild js/main.js --bundle --format=iife --alias:three=https://unpkg.com/three@0.160.0/build/three.module.js "--external:https://*" --outfile=js/main.bundle.js
call npx --yes esbuild js/conference/main.js --bundle --format=iife --alias:three=https://unpkg.com/three@0.160.0/build/three.module.js "--external:https://*" --outfile=js/conference/main.bundle.js
echo.
echo Done. js/main.bundle.js and js/conference/main.bundle.js were rebuilt.
pause
