# Maize Developments - Professional Construction Services

A modern, SEO-optimized website for Maize Developments, a professional construction company specializing in new builds, renovations, rezoning, and subdivisions in British Columbia, Canada.

## 🏗️ About

Maize Developments offers comprehensive construction services including:
- **New Build Construction**: Custom homes from blueprints to completion
- **Home Renovation**: Complete home transformation services
- **Property Rezoning**: Professional rezoning consultation and services
- **Land Subdivisions**: Land subdivision and development services

## 🚀 Features

### SEO & Performance Optimizations
- **Advanced SEO**: Comprehensive meta tags, structured data, and semantic markup
- **AI Crawler Friendly**: Optimized for AI model crawlers (GPTBot, Claude, etc.)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS metrics
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Sitemap & Robots**: XML sitemap and robots.txt for better crawling
- **PWA Support**: Web app manifest for mobile experience

### Technical Features
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Image optimization, code splitting, and caching

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage with AI-friendly content
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section with video background
│   ├── ServicesSection.tsx # Services showcase
│   ├── AboutSection.tsx    # Company information
│   ├── ContactSection.tsx  # Contact form and details
│   ├── Footer.tsx          # Site footer
│   ├── SEOHead.tsx         # SEO component with semantic markup
│   ├── AIFriendlyContent.tsx # Hidden content for AI crawlers
│   ├── SEOAnalytics.tsx    # SEO tracking and analytics
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── utils.ts            # Utility functions
│   └── structured-data.ts  # JSON-LD structured data
public/
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # XML sitemap
├── manifest.json           # PWA manifest
└── images/                 # Optimized images
```

## 🔧 SEO Implementation

### 1. Meta Tags & Open Graph
- Comprehensive meta descriptions and keywords
- Open Graph tags for social media sharing
- Twitter Card optimization
- Canonical URLs and alternate languages

### 2. Structured Data (JSON-LD)
- Organization schema
- LocalBusiness schema
- WebSite schema
- FAQ schema
- BreadcrumbList schema
- Service schema for each service offering

### 3. AI Crawler Optimization
- Hidden semantic content for AI models
- Comprehensive service descriptions
- FAQ sections with structured data
- Business information in machine-readable format

### 4. Performance Optimization
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Core Web Vitals monitoring
- Security headers and CSP

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/maize-nextjs.git
cd maize-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 SEO Analytics

The project includes comprehensive SEO tracking:
- Core Web Vitals monitoring
- AI crawler detection and tracking
- Structured data validation
- Meta tag analysis
- Image alt text tracking
- Heading structure analysis

## 🔍 SEO Checklist

### Technical SEO
- [x] XML Sitemap
- [x] Robots.txt
- [x] Meta tags optimization
- [x] Structured data (JSON-LD)
- [x] Canonical URLs
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Core Web Vitals optimization
- [x] Mobile responsiveness
- [x] Page speed optimization

### Content SEO
- [x] Semantic HTML structure
- [x] Heading hierarchy (H1-H6)
- [x] Alt text for images
- [x] Internal linking
- [x] FAQ content
- [x] Local business information
- [x] Service descriptions
- [x] Contact information

### AI Crawler Optimization
- [x] AI-friendly content structure
- [x] Comprehensive service data
- [x] Business schema markup
- [x] FAQ schema markup
- [x] Service schema markup
- [x] Location and contact data

## 🛠️ Customization

### Update Business Information
Edit `src/lib/structured-data.ts` to update:
- Company name and description
- Contact information
- Service offerings
- Location data

### Update SEO Metadata
Edit `src/app/layout.tsx` to modify:
- Page titles and descriptions
- Keywords
- Open Graph images
- Social media handles

### Add New Services
1. Update the services array in `src/app/page.tsx`
2. Add corresponding structured data in `src/lib/structured-data.ts`
3. Update the sitemap in `public/sitemap.xml`

## 📈 Performance Monitoring

The project includes built-in performance monitoring:
- Core Web Vitals tracking
- SEO metrics analysis
- AI crawler detection
- Page load performance

## 🔒 Security

- Security headers implementation
- Content Security Policy
- XSS protection
- Frame options
- Referrer policy

## 📱 PWA Features

- Web app manifest
- Service worker ready
- Mobile-optimized design
- Offline capability ready

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project is compatible with:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Any static hosting service

## 📞 Support

For questions about the project or SEO implementation, please contact:
- **Email**: info@maizedevelopments.com
- **Phone**: +1-604-XXX-XXXX
- **Website**: https://maizedevelopments.com

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for Maize Developments**
