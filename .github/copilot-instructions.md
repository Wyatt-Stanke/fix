# GitHub Copilot Instructions for Book Writer Project

## Project Overview
This is a static website project that displays book content (such as the Bible) in a visually formatted way using popup windows. The site is deployed via GitHub Pages.

## Project Structure
- `content/` - Contains all static website files
  - `index.html` - Main entry point with book selection interface
  - `crucify.js` - Core JavaScript logic for opening and managing text popups
  - `text.html` - Template for text display windows
  - `progress.html` - Progress bar display
  - `bible.json` - Book data in JSON format
  - `robots.txt` - Search engine directives
- `.github/workflows/static.yml` - GitHub Pages deployment workflow

## Coding Standards

### HTML
- Use HTML5 doctype
- Include proper meta tags for charset (UTF-8), viewport, and compatibility
- Maintain semantic HTML structure
- Keep inline styles minimal; prefer external stylesheets where possible

### JavaScript
- Use vanilla JavaScript (no frameworks)
- Follow ES6+ syntax where supported
- Use `let` and `const` instead of `var`
- Use descriptive variable names (e.g., `progressPopup`, `isInitialized`)
- Add comments for complex logic or non-obvious behavior

### CSS
- Use modern CSS features (flexbox, grid)
- Maintain consistent color scheme (current: dark theme with black background and white text)
- Use relative units (rem, %, vh/vw) for responsive design
- Keep selectors simple and maintainable

### JSON Data Files
- Maintain valid JSON syntax
- Use consistent indentation (2 or 4 spaces)
- Keep data structures consistent within files

## Code Organization
- Keep each file focused on a single purpose
- Separate concerns: HTML structure, CSS styling, JavaScript behavior
- Maintain the existing popup-based architecture
- Prefer relative URLs over absolute URLs when possible for better portability
- When absolute URLs are necessary, use the GitHub Pages domain format: `https://username.github.io/repository-name/`

## Browser Compatibility
- Target modern browsers (Chrome, Firefox, Safari, Edge)
- Use standard Web APIs
- Test popup window functionality across browsers
- Consider popup blocker implications

## Documentation
- Add comments for complex algorithms or non-obvious code
- Document function parameters and return values for non-trivial functions
- Keep README files up to date when adding major features
- Document any new book data formats or structures

## Testing
- Manually test popup window functionality
- Verify all links and resources load correctly
- Test on different screen sizes and resolutions
- Ensure proper error handling for failed fetches

## Security
- Never commit sensitive data or credentials
- Validate and sanitize any user inputs
- Use HTTPS URLs for all external resources
- Be cautious with `window.open()` and popup windows - follow secure coding practices

## GitHub Pages Deployment
- All deployable content must be in the `content/` directory
- The workflow automatically deploys on push to `main` branch
- Test changes locally before committing
- Ensure all relative paths work correctly when deployed

## Pull Request Guidelines
- Keep PRs focused on a single feature or fix
- Test manually before submitting
- Include a clear description of changes
- Reference related issues using # notation

## Common Patterns
- Singleton pattern for progress popup window (only one instance)
- Multiple text display windows (up to 5 by default)
- Fetch-based data loading with async/await or promises
- Window centering calculations using screen dimensions

## Maintenance Notes
- The book data lookup table in `crucify.js` maps book names to JSON URLs
- Progress tracking uses window communication between popups
- Text display windows are created dynamically with calculated positions

## Updating These Instructions
- Review and update this file when making significant changes to:
  - Project architecture or technology stack
  - Coding standards or conventions
  - New features that introduce new patterns or practices
  - Dependencies or deployment processes
- Keep instructions clear, concise, and actionable
- Remove outdated guidance that no longer applies
