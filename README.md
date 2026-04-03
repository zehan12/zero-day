# ZERO.DAY Web3 Drop App

A sleek, retro-CRT styled Web3 connecting application interface powered by:
- React + TypeScript
- Vite
- RainbowKit & Wagmi (for multiple EVM wallets + Solana bridge wallets integration)
- Fully Custom Vanilla CSS Theme (Scanlines, Neon aesthetics)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the dev server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Development
- Uses `RainbowKitProvider` mapped with specific Wallet subsets to allow connections from primary chains.
- Vanilla CSS scanline integrations are in `src/index.css`.
