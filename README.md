# Rhythm & Brews

A production-ready Next.js 14 marketing website for Rhythm & Brews open mic night. Built with App Router, TypeScript, and Tailwind CSS, optimized for deployment on Vercel.

## 🎵 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first, fully responsive layout
- **Dark Theme**: Warm, intimate aesthetic with custom color palette
- **Contact Form**: Fully functional contact form with email integration
- **Email Service**: Server-side email sending using Resend
- **Performance**: Optimized images with Next.js Image component
- **SEO Ready**: Proper meta tags and OpenGraph configuration
- **Production Ready**: Configured for Vercel deployment

## 📁 Project Structure

```
rhythmandbrews/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/
│   ├── Hero.tsx                  # Hero section with CTA
│   ├── InfoGrid.tsx              # Info cards grid
│   ├── CollageSection.tsx        # Image collage section
│   ├── InstagramGallery.tsx      # Instagram feed display
│   ├── ContactForm.tsx           # Contact form with validation
│   └── Footer.tsx                # Footer with links
├── public/
│   └── images/
│       ├── hero/                 # Hero images
│       ├── collages/             # Collage images
│       ├── illustrations/        # SVGs and illustrations
│       ├── backgrounds/          # Background textures
│       └── brand/                # Logo and brand assets
├── styles/
│   └── globals.css               # Global styles and Tailwind config
├── .env.local.example            # Environment variables template
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm
- A Resend account (for email functionality)

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd /Users/ryanbradshaw/Git\ Projects/rhythmandbrews
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```

4. **Configure Resend API**:
   - Sign up at [resend.com](https://resend.com)
   - Create an API key
   - Add your API key to `.env.local`:
     ```
     RESEND_API_KEY=re_your_actual_api_key_here
     ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Adding Images

The project is structured to easily add your own images:

1. **Hero Images**: Add images to `public/images/hero/`
   - Recommended size: 1920x1080px or larger
   - Update `Hero.tsx` to use your image

2. **Collage Images**: Add images to `public/images/collages/`
   - Update `CollageSection.tsx` with your image paths

3. **Instagram Gallery**: Add images to `public/images/instagram/`
   - Update `InstagramGallery.tsx` with your image paths

4. **Brand Assets**: Add logos to `public/images/brand/`

### Example: Adding a Hero Image

In `components/Hero.tsx`, uncomment and update the Image component:

```tsx
<Image
  src="/images/hero/your-hero-image.jpg"
  alt="Rhythm & Brews Open Mic"
  fill
  className="object-cover"
  priority
/>
```

## 📧 Email Configuration

### Resend Setup

1. Create a [Resend account](https://resend.com)
2. Verify your domain (optional but recommended for production)
3. Generate an API key
4. Add the key to your environment variables

### Using a Custom Domain

To use your own domain for emails:

1. Verify your domain in Resend dashboard
2. Update the `from` field in `app/api/contact/route.ts`:
   ```typescript
   from: 'Rhythm & Brews <contact@yourdomain.com>'
   ```

### Email Recipient

The contact form sends emails to `ryan@rhythmandbrewspr.com`. To change this, update the `to` field in `app/api/contact/route.ts`.

## 🎭 Customization

### Theme Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  background: {
    DEFAULT: '#1a1412',    // Main background
    light: '#2a2220',      // Card backgrounds
  },
  primary: {
    DEFAULT: '#d4a574',    // Primary brand color
    light: '#e8c9a0',      // Hover states
    dark: '#b8894f',
  },
  // ... more colors
}
```

### Typography

The project uses:
- **Headings**: Georgia (serif) for elegant headings
- **Body Text**: System font stack for optimal performance

To use custom fonts, add them in `app/layout.tsx` using `next/font`.

### Content

Update placeholder content in the components:
- Hero text and CTAs: `components/Hero.tsx`
- Info cards: `components/InfoGrid.tsx`
- Footer links: `components/Footer.tsx`

## 🚢 Deployment

### Deploying to Vercel

1. **Push your code to GitHub** (or GitLab, Bitbucket)

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository

3. **Configure Environment Variables**:
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `RESEND_API_KEY` with your production API key

4. **Deploy**:
   - Vercel will automatically deploy on push
   - Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Vercel handles SSL automatically

### Environment Variables in Production

Make sure to set these in Vercel:
- `RESEND_API_KEY` - Your Resend API key

## 🛠️ Development

### Build for Production

```bash
npm run build
```

### Run Production Build Locally

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Server Components for optimal performance
- Next.js Image optimization
- Tailwind CSS for minimal CSS bundle
- Static generation where possible

## 🔒 Security

- API routes are server-side only
- Environment variables are never exposed to client
- Input validation on both client and server
- HTTPS enforced on Vercel

## 📝 License

This project is created for Rhythm & Brews. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: ryan@rhythmandbrewspr.com
- Or use the contact form on the website

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Configure environment variables
3. 📸 Add your images to `public/images/`
4. ✏️ Customize content in components
5. 🎨 Adjust theme colors if needed
6. 🚀 Deploy to Vercel
7. 🌐 Set up custom domain

---

Built with ❤️ for the Rhythm & Brews community
