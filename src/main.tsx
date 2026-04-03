import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { 
  phantomWallet, 
  backpackWallet, 
  okxWallet, 
  metaMaskWallet, 
  walletConnectWallet,
  rainbowWallet,
  coinbaseWallet
} from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const config = getDefaultConfig({
  appName: 'ZERO.DAY Web3 App',
  projectId: '0f5aa61fcefffab6be9da3880ffdfd54', // default project ID for demo
  chains: [mainnet, polygon, optimism, arbitrum, base],
  wallets: [
    {
      groupName: 'Recommended',
      wallets: [
        phantomWallet, 
        backpackWallet, 
        okxWallet, 
        rainbowWallet,
        coinbaseWallet,
        metaMaskWallet, 
        walletConnectWallet
      ],
    },
  ],
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({
          accentColor: '#2cc923',
          accentColorForeground: 'white',
          borderRadius: 'medium',
        })}>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
