# Febe Coffee Website

A modern, responsive website for Febe Coffee - a Korean family-owned café in Irvine, CA specializing in Asian-inspired matcha and coffee drinks.

![Febe Coffee](https://img.shields.io/badge/Status-In%20Development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-38bdf8)

## Project Overview

This website replaces Febe Coffee's basic Google Sites page with a modern, SEO-optimized, mobile-first web experience. Built with performance and user experience in mind, featuring:

- Signature einspanner drink showcase
- Instagram & social media integration
- Google Maps integration with directions
- Embedded Google & Yelp reviews
- Contact form with email functionality
- Custom color palette inspired by matcha and café aesthetics

## Live Demo

**Production URL**: [Coming Soon]  
**Lovable Project**: https://lovable.dev/projects/4fcc2e22-4a23-4bd3-8bec-49fda2c0143f

## Tech Stack

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React / FontAwesome
- **Fonts**: Cormorant Garamond, Inter (Google Fonts)

### Backend (Planned)
- **Email Service**: Resend API (recommended) or Nodemailer
- **CMS** (Optional): Sanity or Contentful for menu management
- **Database** (Optional): PostgreSQL or MongoDB for future features

### Deployment
- **Hosting**: Vercel
- **Build Tool**: Vite

## Design System

### Color Palette
```css
--cream: #F6F4D2        /* Primary background */
--sage-green: #CBDFBD   /* Secondary background */
--matcha-green: #D4E09B /* CTAs, highlights */
--peachy-coral: #F19C79 /* Warm accents */
--terracotta: #A44A3F   /* Text, borders */
```

### Typography
- **Headings**: Cormorant Garamond (500-600 weight)
- **Body**: Inter (400 weight)
- **Navigation**: Inter (500 weight)
- **Buttons**: Inter (500 weight, uppercase, letter-spacing)

## Project Structure

```
febe-coffee-website/
├── public/
│   ├── images/          # Product photos, café interior
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── page.tsx           # Homepage
│   │   ├── menu/
│   │   │   └── page.tsx       # Menu page
│   │   ├── about/
│   │   │   └── page.tsx       # About page
│   │   ├── reviews/
│   │   │   └── page.tsx       # Reviews page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact page with form
│   │   └── api/
│   │       └── send-email/    # Email API route
│   │           └── route.ts
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── Navigation.tsx     # Header/navbar
│   │   ├── Footer.tsx         # Footer
│   │   ├── DrinkCard.tsx      # Drink display cards
│   │   └── ReviewsEmbed.tsx   # Google/Yelp embeds
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   └── styles/
│       └── globals.css        # Global styles
├── .env.local                  # Environment variables (not committed)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd febe-coffee-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Email Service (choose one)
RESEND_API_KEY=your_resend_api_key_here

# Or for Gmail
EMAIL_USER=febecoffee@gmail.com
EMAIL_APP_PASSWORD=your_gmail_app_password

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📧 Email Setup

The contact form requires email service configuration. Choose one option:

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com) (100 free emails/day)
2. Create API key
3. Add to `.env.local`: `RESEND_API_KEY=re_xxxxx`

### Option 2: Gmail with Nodemailer
1. Enable 2-Step Verification in Google Account
2. Generate App Password: Google Account → Security → App Passwords
3. Add to `.env.local`:
   ```
   EMAIL_USER=febecoffee@gmail.com
   EMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
   ```

## Features

### Implemented
- [x] Modern homepage with hero section
- [x] Featured signature drinks showcase
- [x] About section with café story
- [x] Quick info section (hours, location, specialty)
- [x] Floating social media bar (Instagram, TikTok, Yelp)
- [x] Google Maps integration with directions
- [x] Responsive mobile-first design
- [x] Custom color palette and typography
- [x] Active page navigation highlighting

### In Progress
- [ ] Full menu page with all drinks
- [ ] Reviews page with Google/Yelp embeds
- [ ] Contact form with email functionality
- [ ] FAQ accordion section
- [ ] Instagram feed integration
- [ ] Footer with social links

### Planned (Phase 2)
- [ ] CMS integration for menu updates
- [ ] Online ordering (if requested)
- [ ] Email newsletter signup
- [ ] Blog/news section
- [ ] Seasonal menu items feature
- [ ] Events calendar
- [ ] Loyalty program integration

## Pages

### Homepage (`/`)
- Hero section with signature drink image
- Quick info (hours, location, specialty)
- Featured 3 signature drinks
- About snippet
- Google Maps with "Get Directions" button

### Menu (`/menu`)
- Complete drink menu organized by category
- Einspanner Signatures
- Coffee drinks
- Matcha drinks
- Pure teas, sparkling teas, milk teas
- Food menu (sandwiches, pastries)
- FAQ accordion section

### About (`/about`)
- Café story and philosophy
- Premium ingredients info
- Family-owned background
- Photo gallery

### Reviews (`/reviews`)
- Embedded Google reviews
- Embedded Yelp reviews
- Overall rating display
- "Leave a review" CTAs

### Contact (`/contact`)
- Contact form (name, email, phone, message)
- Job application fields (availability, resume upload)
- Contact information
- Hiring details
- Email functionality to febecoffee@gmail.com

## Design Philosophy

- **Minimalist Korean café aesthetic**: Clean, white space, natural tones
- **Mobile-first**: Optimized for Instagram generation (primary audience)
- **Photo-forward**: High-quality drink photography emphasized
- **Warm & inviting**: Peachy coral accents, soft shadows, rounded corners
- **Fast & accessible**: Optimized performance, WCAG AA compliant

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Code Style
- TypeScript for type safety
- ESLint + Prettier for code formatting
- Tailwind for styling (utility-first)
- Component-based architecture
- Semantic HTML for accessibility

## SEO Strategy

### Target Keywords
- Irvine coffee shop
- Irvine matcha café
- Asian coffee Irvine
- Matcha near UCI
- Korean café Irvine
- Einspanner coffee Irvine
- Ceremonial matcha Irvine

### Optimization
- Semantic HTML structure
- Meta tags and Open Graph
- Schema.org markup (Local Business, Menu)
- Sitemap.xml and robots.txt
- Optimized images (WebP, lazy loading)
- Fast page load (<3 seconds)

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on git push

### Manual Deployment
```bash
npm run build
npm run start
```

## Environment Variables

Required variables for production:

```env
# Email Service
RESEND_API_KEY=re_xxxxx
# or
EMAIL_USER=febecoffee@gmail.com
EMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyXXXXXX
```

## Content Management

Menu items, hours, and other content are currently hardcoded. For future updates:

**Option 1**: Edit files directly in `/src/app/menu/page.tsx`

**Option 2**: Integrate CMS (Sanity recommended)
- Allows café owners to update menu without code
- Real-time preview
- Image management

## Contributing

This is a client project. For contributions:
1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request
5. Await review

## Support

For issues or questions:
- **Developer**: [Your contact info]
- **Client**: febecoffee@gmail.com
- **Project URL**: https://lovable.dev/projects/4fcc2e22-4a23-4bd3-8bec-49fda2c0143f

## License

Proprietary - © 2025 Febe Coffee. All rights reserved.

## Acknowledgments

- **Client**: Febe Coffee, Irvine, CA
- **Development Platform**: Lovable.dev
- **Design Inspiration**: Korean minimalist café aesthetic
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)
- **Icons**: Lucide React

---

**Built with ❤️ for the matcha lovers of Irvine**

*Last Updated: November 2025*
