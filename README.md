# Fitness Yard Gym - Developer Handoff

This project is a React implementation of the Fitness Yard Gym website. It uses a modern tech stack focused on performance and design.

## Tech Stack
- **Frontend**: React 19 + TypeScript
- **Bundler**: Vite 7
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: React Helmet Async + Schema.org

## Project Structure
- `src/components/layout`: Global layout components (Navbar, Footer, MainLayout).
- `src/components/ui`: Reusable atomic UI components (Button, Badge, SectionHeading).
- `src/components/shared`: Shared cross-page components like `SEO.tsx`.
- `src/pages`: Individual page components.
- `src/data`: `mockData.ts` contains all content. For production, replace this with a CMS or API integration.
- `src/utils`: Utility functions like `cn` for class merging.

## Development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
```
The output will be in the `dist/` folder, ready to be served by any static host.

## How to Update Images & Content

To replace the placeholder images and update your gym's content:

### 1. Update Images
1. **Prepare your images**: Resize your photos for web (recommended width: 1920px for hero, 800px for galllery).
2. **Move to public folder**: Copy your images to the `public/images/` directory.
   - Example: Move your hero photo to `public/images/hero-main.jpg`.
3. **Update mockData.ts**: Open `src/data/mockData.ts` and update the `url` or `image` paths.
   - For public folder images, use the path relative to the public root:
     ```ts
     image: "/images/hero-main.jpg"
     ```

### 2. Update Text & Pricing
All website content is managed in `src/data/mockData.ts`. You can change:
- **Services**: Descriptions and icons.
- **Membership Plans**: Prices, durations, and features.
- **Trainers**: Bios, roles, and social media links.
- **Gallery**: Add or remove images and tags.

## GitHub Upload Guide

To upload this project to a new GitHub repository:

1. **Initialize Git**:
   ```bash
   git init
   git add .
   git commit -m "initial commit: fitness yard gym v1"
   ```
2. **Create a Repo**: Go to [github.com/new](https://github.com/new) and create a repository (e.g., `fitness-yard-gym`). Do NOT initialize it with a README or license.
3. **Connect & Push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/fitness-yard-gym.git
   git branch -M main
   git push -u origin main
   ```

## Deployment

This site is optimized for **Vercel** or **Netlify**. Simply connect your GitHub repo to their platform, and it will auto-deploy.

---
Built for Fitness Yard Gym, Meerut.
