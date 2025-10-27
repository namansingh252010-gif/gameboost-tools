
GameBoost Tools - Render Deployment
==================================

This package is a Render-ready ZIP. Upload the ZIP to Render (New -> Web Service -> Upload ZIP).
Set these environment variables in the Render dashboard before deployment or after creating the service:

ADMIN_USER=admin
ADMIN_PASS=YourSecurePassword
JWT_SECRET=AnyLongRandomString

Upload your legal product files to server/files/ before deployment if you want them preloaded.

Notes:
- This project is intended for legal gaming assets only (overlays, configs that do not modify or automate gameplay).
- Do NOT use this to distribute cheats, hacks, or any files that violate a game's ToS.
