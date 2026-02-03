# GlobalExport - Used Car Export Analyzer

A modern web application for analyzing and managing used car exports. Built with React, TypeScript, and Vite.

## Features

- Interactive landing page with survey functionality
- Responsive design with modern UI components
- Built-in reveal animations for smooth user experience
- Information sections for export process guidance

## Tech Stack

- **Framework:** React 19.2.4
- **Language:** TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **Icons:** Lucide React 0.563.0

## Run Locally

**Prerequisites:** Node.js (v16 or higher)

1. Clone the repository:
   ```bash
   git clone https://github.com/s0613/globalexport.git
   cd globalexport
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── components/       # React components
│   ├── Hero.tsx
│   ├── Footer.tsx
│   ├── InfoSection.tsx
│   ├── Survey.tsx
│   └── Reveal.tsx
├── App.tsx          # Main application component
├── index.tsx        # Application entry point
├── types.ts         # TypeScript type definitions
└── vite.config.ts   # Vite configuration
```

## Deployment

This project can be deployed to Vercel, Netlify, or any static hosting service that supports Vite applications.

For Vercel:
1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default Vite settings

## License

Private project
