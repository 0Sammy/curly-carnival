'use client'

import { useState } from 'react';
import { useConnect, useAccount } from 'wagmi';
import Image from 'next/image';

//Components
import Drawer from './Drawer';

function Account() {

    return (
        <div>
            <div className='relative bg-primaryGreen px-4 py-2 rounded-md text-deepBlack text-xs'>Connected</div>
        </div>
    )
}

function WalletOptions({ onSelect, isOpen }: { onSelect: () => void, isOpen: boolean }) {

    const { connectors, connect } = useConnect()

    const getLogo = (name: string) => {
        const logos: Record<string, string> = {
            MetaMask: 'https://res.cloudinary.com/dpmx02shl/image/upload/v1744452038/metamask_qnzgqq.svg',
            WalletConnect: 'https://res.cloudinary.com/dpmx02shl/image/upload/v1744452038/walletconnect_xfvbpo.svg',
            Safe: 'https://res.cloudinary.com/dpmx02shl/image/upload/v1744452037/safe_aorinz.svg',
            'Trust Wallet': 'https://res.cloudinary.com/dpmx02shl/image/upload/v1744452038/trustwallet_vkwqbb.svg',
        }
        return logos[name] || 'https://res.cloudinary.com/dpmx02shl/image/upload/v1744452038/wallet_a9hhus.svg'
    }

    return (
        <Drawer isOpen={isOpen} onClose={onSelect}>
            <div className=''>
                {connectors.map((connector) => (
                    <button key={connector.uid}
                        onClick={() => {
                            connect({ connector })
                            onSelect()
                        }} className="flex items-center gap-2 bg-primaryGreen hover:bg-darkGreen my-4 py-2 pl-12 rounded-md w-full text-deepBlack hover:text-white duration-300">
                        <Image src={getLogo(connector.name)} alt={connector.name} width={52} height={52} />
                        <span>{connector.name}</span>
                    </button>
                ))}
            </div>
        </Drawer>
    )
}

function ConnectButton() {

    const [showOptions, setShowOptions] = useState(false)

    return (
        <div className="inline-block relative text-left">
            <button onClick={() => setShowOptions(!showOptions)} className="bg-black hover:bg-gray-800 shadow p-2 rounded-lg text-white text-xs sm:text-sm">
                Connect Wallet
            </button>
            {showOptions && <WalletOptions onSelect={() => setShowOptions(false)} isOpen={showOptions} />}
        </div>
    )
}

export function ConnectWallet() {
    const { isConnected } = useAccount()
    return isConnected ? <Account /> : <ConnectButton />
}

export default ConnectWallet
