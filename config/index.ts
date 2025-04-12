import { http, createConfig } from 'wagmi';
import { base, mainnet } from 'wagmi/chains';
import { metaMask, safe, walletConnect } from 'wagmi/connectors';

const projectId = 'ba6dcd79854273f0530e04a332ea4211'

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})