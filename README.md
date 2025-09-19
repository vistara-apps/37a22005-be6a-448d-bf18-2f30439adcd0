# CareCircles - Connect Anonymously, Heal Together

A modern, accessible web application for anonymous peer support groups focused on mental health, built with Next.js 15 and enhanced with comprehensive UI/UX improvements.

## ✨ Recent UI/UX Improvements

### 🎨 Design System Overhaul
- **Unified Color System**: Consistent CSS variables and Tailwind configuration
- **Enhanced Typography**: Improved visual hierarchy with better font weights and spacing
- **Modern Gradients**: Beautiful gradient backgrounds and interactive elements
- **Micro-interactions**: Subtle animations and hover effects for better engagement

### ♿ Accessibility Enhancements
- **ARIA Labels**: Comprehensive screen reader support
- **Focus Management**: Visible focus rings and keyboard navigation
- **Semantic HTML**: Proper roles and landmarks for assistive technologies
- **Touch Targets**: Minimum 44px touch targets for mobile accessibility

### 📱 Mobile-First Optimizations
- **Responsive Design**: Optimized for all screen sizes
- **Touch Interactions**: Enhanced mobile gestures and feedback
- **Safe Area Support**: Proper handling of device notches and home indicators
- **iOS Optimizations**: Prevents zoom on input focus and improves Safari experience

### 🚀 Performance & UX
- **Loading States**: Beautiful loading spinners and skeleton screens
- **Error Boundaries**: Graceful error handling with recovery options
- **Auto-resize Textarea**: Dynamic input sizing for better chat experience
- **Optimized Animations**: Smooth, performant CSS animations using transform and opacity

### 🎯 Key Features

- **Anonymous Group Matching**: Join support groups based on mental health focus areas
- **Guided Peer Sessions**: Structured conversations with thoughtful prompts
- **Real-time Chat**: Smooth messaging experience with typing indicators
- **Professional Oversight**: Moderated environment ensuring safety and support
- **Privacy-First**: Complete anonymity with generated pseudonyms

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom design system
- **Performance**: Optimized builds with code splitting
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile**: PWA-ready with manifest configuration

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/vistara-apps/37a22005-be6a-448d-bf18-2f30439adcd0.git
   cd 37a22005-be6a-448d-bf18-2f30439adcd0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with error boundary
│   ├── page.tsx          # Main application page
│   ├── providers.tsx     # App providers and context
│   └── globals.css       # Global styles and CSS variables
├── components/            # React components
│   ├── AppShell.tsx      # Main app container with header
│   ├── GroupSelection.tsx # Group browsing and selection
│   ├── ChatRoom.tsx      # Chat interface with messages
│   ├── ChatBubble.tsx    # Individual message bubbles
│   ├── PromptCard.tsx    # Guided conversation prompts
│   ├── UserStatusBadge.tsx # Anonymous status indicator
│   ├── LoadingSpinner.tsx # Reusable loading component
│   └── ErrorBoundary.tsx # Error handling component
├── lib/                   # Utilities and configuration
│   ├── types.ts          # TypeScript type definitions
│   ├── constants.ts      # App constants and support groups
│   ├── utils.ts          # Helper functions
│   ├── analytics.ts      # Privacy-focused analytics
│   └── hooks/            # Custom React hooks
│       └── usePerformance.ts # Performance monitoring
└── public/               # Static assets
    └── manifest.json     # PWA manifest
```

## 🎨 Design System

### Colors
- **Primary**: Pink gradient (`#e879f9`) for main actions
- **Surface**: Clean whites and light grays
- **Text**: High contrast dark grays for readability
- **Category Colors**: Distinct colors for anxiety, depression, and trauma support

### Typography
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Optimized line heights and spacing
- **Interactive**: Clear button and link styling

### Animations
- **Micro-interactions**: Hover and focus states
- **Page Transitions**: Smooth fade and slide animations
- **Loading States**: Elegant spinners and progress indicators

## 🔒 Privacy & Security

- **Anonymous by Design**: No personal information required
- **Secure Headers**: Protection against XSS and clickjacking
- **Privacy-Focused Analytics**: Anonymous usage tracking only
- **Data Minimization**: Only essential data is processed

## 📱 Mobile Experience

- **Progressive Web App**: Installable on mobile devices
- **Touch Optimized**: Large touch targets and gesture support
- **Responsive Layout**: Adapts to all screen sizes
- **iOS Safari**: Optimized for mobile Safari quirks

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
The app is optimized for Vercel deployment with automatic builds and optimizations.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**CareCircles** - Supporting mental health through anonymous peer connections. Built with care for accessibility, privacy, and user experience.
