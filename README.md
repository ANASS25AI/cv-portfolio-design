# Anass Nassiri - AI Engineer Portfolio

A cinematic, matrix-inspired React portfolio built with Vite, Sass, and Framer Motion. The interface blends cyan and graphite gradients, animated matrix rain, and neon glass panels to highlight projects, experience, and contact options.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Create a production build:
   ```bash
   npm run build
   ```

## Contact Form

- The contact form now relays submissions through FormSubmit and forwards them to nassirri115@gmail.com.
- The first submission from a new domain triggers a short verification email from FormSubmit. Approve it once to unlock delivery.
- If you want to use a different provider, adjust the `FORM_ENDPOINT` constant in `src/sections/ContactSection.jsx`.

## Deploying to Azure Static Web Apps

1. Push the project to a GitHub repository.
2. In the Azure Portal, create a Static Web App and connect it to the repository and branch.
3. Use the following build settings when prompted:
   - Build preset: Vite
   - App location: /
   - Api location: *(leave empty)*
   - Output location: dist
4. Commit the generated GitHub Actions workflow. Azure will build and deploy automatically on each push.

Tip: If you prefer Azure App Service, run `npm run build`, then deploy the `dist` folder using the Azure CLI or the VS Code Azure extension.

## Customization Notes

- All resume data lives in `src/data/profile.js`. Update this file to modify content across the site.
- Colors and global styling are defined in `src/styles/global.scss`. Adjust the CSS custom properties at the top to tweak the cyan and gray palette or glow effects.
- The animated matrix background is controlled by `src/components/MatrixBackground.jsx`.
- Drop a production-ready resume PDF into the `public` directory if you want to link to it from the hero section.

## Tech Stack

- React 18 with Vite
- Framer Motion for entrance animations
- Sass (SCSS) modules for theming and glassmorphism panels
- FormSubmit for contact form delivery
- React Icons for consistent iconography

## Running Tests

The project does not include automated tests yet. After customizing the content, run `npm run build` to ensure production assets generate without errors.