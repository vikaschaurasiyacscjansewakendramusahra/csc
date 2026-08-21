Vikas Chaurasiya CSC Jan Sewa Kendra — GitHub Pages package

Upload/replace ALL files and the assets folder in the GitHub Pages repository.
Important: keep index.html, style.css, script.js and services.json together.
The logo and premium banner are in assets/logo.png and assets/premium-banner.png.

Owner/Admin:
- Admin changes are saved in the current browser.
- Use “Public Services Data” to download services.json after adding/editing services.
- Replace the repository's services.json with that downloaded file to publish the changes to all visitors.
- GitHub Pages is static hosting, so true cross-device database writes require a backend/auth service.

The floating “AI पूछताछ” button opens Google Gemini. A Gemini API key is not embedded in this static site.


UPDATES: Admin password is no longer stored as plain text in script.js; the browser checks a SHA-256 hash. For true security against source inspection, move authentication to a backend/auth service.
Address map now opens the exact shop point: 27.063557,83.123799.
Services that previously pointed to csc.gov.in now use the Vikas CSC fallback search destination.
AI question button opens Gemini with the entered question.
Admin panel is vertically scrollable, service modal close button is red, and services are horizontally auto-scrolling.
