# Nafisa Tabassum - Portfolio Website

A modern, world-class portfolio website built with React, TypeScript, and TailwindCSS, showcasing professional experience, projects, and achievements.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61dafb)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646cff)](https://vitejs.dev/)

## ✨ Features

- **Modern Design**: Clean, professional UI inspired by FAANG engineer portfolios
- **Dark/Light Mode**: Seamless theme switching with persistent preferences
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags, semantic HTML, and performance best practices
- **Accessible**: WCAG compliant with keyboard navigation and ARIA labels
- **Performance**: Code-splitting, lazy loading, and optimized bundle size
- **TypeScript**: Type-safe development with full IntelliSense support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mussabat/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

### Core
- **React 18.2** - UI library
- **TypeScript 5.2** - Type safety and developer experience
- **Vite 5.1** - Lightning-fast build tool and dev server

### Styling
- **TailwindCSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Google Fonts** - Inter & JetBrains Mono

### Animation
- **Framer Motion 11** - Production-ready animation library

### Additional
- **React Icons** - Comprehensive icon library
- **React Helmet Async** - SEO and document head management

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy

The built files in `dist/` can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop `dist` folder or use Netlify CLI
- **GitHub Pages**: Push `dist` folder to `gh-pages` branch
- **AWS S3**: Upload `dist` folder contents to S3 bucket
- **Cloudflare Pages**: Connect repository and set build command

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              # Resume file for download
├── src/
│   ├── components/             # React components
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── About.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── portfolio.ts       # Portfolio data and content
│   ├── hooks/
│   │   └── useTheme.ts        # Theme management hook
│   ├── types/
│   │   └── index.ts           # TypeScript type definitions
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # App entry point
│   └── index.css              # Global styles & Tailwind imports
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # TailwindCSS configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # This file
```

## 🎨 Customization

### Update Portfolio Content

Edit the data in `src/data/portfolio.ts`:

```typescript
export const portfolioData: PortfolioData = {
  name: 'Your Name',
  title: 'Your Title',
  // ... update with your information
};
```

### Modify Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
  },
}
```

### Add/Remove Sections

Edit `src/App.tsx` to add or remove sections as needed.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 SEO Best Practices

The portfolio includes:
- Semantic HTML5 elements
- Meta tags for social media sharing (Open Graph, Twitter Cards)
- Optimized images and lazy loading
- Sitemap and robots.txt ready
- Fast load times (< 3s on 3G)

## ♿ Accessibility

- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels and roles
- Sufficient color contrast ratios

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Nafisa Tabassum**
- Email: tnafisa18@gmail.com
- GitHub: [@Mussabat](https://github.com/Mussabat)
- LinkedIn: [Nafisa Tabassum](https://www.linkedin.com/in/nafisa-tabassum-67426621b)

---

**Built with ❤️ using React, TypeScript, and TailwindCSS**
