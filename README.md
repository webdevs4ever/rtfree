# RT Freeman Blog - Setup Guide

## Quick Start

1. **Copy files to your React project:**
   - `RTBlog.jsx` → `src/pages/` or `src/components/`
   - `public/assets/RTF_CV_close.pdf` → `public/assets/`

2. **Install dependencies (if not already):**
   ```bash
   npm install react
   ```

3. **Add Tailwind CSS** (if not already configured):
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Import and use the component:**
   ```jsx
   import RTBlog from './pages/RTBlog';
   
   function App() {
     return <RTBlog />;
   }
   ```

## Replacing Placeholder PDFs

The essays currently link to your resume as a placeholder. To add real articles:

1. Add your PDF files to `public/assets/`
2. Update the `essays` array in `RTBlog.jsx`:

```jsx
const essays = [
  {
    id: 1,
    title: "Your Real Article Title",
    category: "Sales",
    date: "March 18, 2026",
    excerpt: "Your article description...",
    pdf: "/assets/your-real-article.pdf"  // ← Update this
  },
  // ... more essays
];
```

## Customization

- **Colors:** Edit the Tailwind classes (amber-500, stone-900, etc.)
- **Fonts:** Change the Google Fonts import in the `<style>` block
- **Photo:** Replace the Unsplash URL with your actual headshot
- **Content:** Update the hero text, bio, and footer info

## File Structure
```
rt-blog/
├── RTBlog.jsx           # Main React component
├── public/
│   └── assets/
│       └── RTF_CV_close.pdf   # Placeholder PDF (your resume)
└── README.md
```
