# Anass Nassiri - AI Engineer Portfolio

A cinematic, matrix-inspired React portfolio built with Vite, Sass, and Framer Motion. The interface blends cyan and graphite gradients, animated matrix rain, and neon glass panels to highlight projects, experience, and contact options.

## Getting Started

1. Install dependencies:
   `ash
   npm install
   `
2. Duplicate the environment template and add your EmailJS credentials:
   `ash
   copy .env.example .env
   `
   Populate the new .env file with:
   - VITE_EMAILJS_SERVICE_ID
   - VITE_EMAILJS_TEMPLATE_ID
   - VITE_EMAILJS_PUBLIC_KEY

   These values come from [EmailJS](https://www.emailjs.com/) and enable the contact form to send messages to 
assirri115@gmail.com.

3. Run the development server:
   `ash
   npm run dev
   `

4. Create a production build:
   `ash
   npm run build
   `

## Deploying to Azure Static Web Apps

1. Push the project to a GitHub repository.
2. In the Azure Portal, create a **Static Web App** and connect it to the repository and branch.
3. Use the following build settings when prompted:
   - Build preset: Vite
   - App location: /
   - Api location: *(leave empty)*
   - Output location: dist
4. Commit the generated GitHub Actions workflow. Azure will build and deploy automatically on each push.

> Tip: If you prefer Azure App Service, run 
pm run build, then deploy the dist folder using the Azure CLI or VS Code Azure extension.

## Customization Notes

- All resume data lives in src/data/profile.js. Update this file to modify content across the site.
- Colors and global styling are defined in src/styles/global.scss. Adjust the CSS custom properties at the top to tweak the cyan/gray palette or glow effects.
- The animated matrix background is controlled by src/components/MatrixBackground.jsx.
- Drop a production-ready resume PDF into the public directory if you want to link to it from the hero section.

## Tech Stack

- React 18 with Vite
- Framer Motion for entrance animations
- Sass (SCSS) modules for theming and glassmorphism panels
- EmailJS for contact form delivery
- React Icons for consistent iconography

## Running Tests

The project does not include automated tests yet. After customizing the content, run 
pm run build to ensure production assets generate without errors.
