# CareCircles - Connect Anonymously, Heal Together

A Base MiniApp for anonymous peer support groups focused on mental health, built with Next.js 15 and MiniKit.

## Features

- **Anonymous Group Matching**: Users are matched into small, anonymous peer support groups based on their disclosed struggles
- **Guided Peer Sessions**: Structured sessions with prompts and conversation starters for meaningful interactions
- **Professional Oversight**: Moderated environment with safety measures and crisis detection
- **Privacy & Anonymity**: Robust measures to ensure user anonymity and data privacy

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- MiniKit (Base wallet integration)
- OnchainKit (Coinbase components)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local` and add your OnchainKit API key
   - Get your API key from https://portal.cdp.coinbase.com/

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Main page component
│   ├── providers.tsx   # MiniKit and OnchainKit providers
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── AppShell.tsx    # Main app container
│   ├── GroupSelection.tsx # Group selection interface
│   ├── ChatRoom.tsx    # Chat interface
│   ├── ChatBubble.tsx  # Individual message component
│   ├── PromptCard.tsx  # Guided prompt display
│   └── UserStatusBadge.tsx # User status indicator
├── lib/               # Utilities and types
│   ├── types.ts       # TypeScript type definitions
│   ├── constants.ts   # App constants and data
│   └── utils.ts       # Utility functions
```

## Key Components

### Group Selection
- Browse available support groups by category (Anxiety, Depression, Trauma)
- View group member counts and activity status
- Join groups with generated anonymous pseudonyms

### Chat Room
- Real-time anonymous messaging
- Guided prompts from moderators
- Professional oversight and safety features
- Anonymous user identification

### Privacy Features
- Generated pseudonyms for anonymity
- No personal information required
- Wallet-based identity without exposure
- Moderated environment for safety

## Development

The app is built as a Base MiniApp and integrates with:
- Base wallet for identity and transactions
- Farcaster frames for social integration
- OnchainKit components for Web3 functionality

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
