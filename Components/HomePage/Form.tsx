"use client"

//Stores
import { useFormStore } from "@/stores/formStore";


const Form = () => {


    //States
    const { setField } = useFormStore();

    const styles = "bg-inherit px-2 xl:px-4 py-3 border border-[#716A7C] focus:border-0 rounded-lg focus:outline focus:outline-primaryGreen placeholder:text-[#A7A1AF] duration-300";

    //Functions
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setField(event.target.name as keyof Omit<FormState, 'setField'>, event.target.value);
    };


    return (
        <main className="mt-4 p-2 font-medium">
            <h1 className="mx-auto max-w-[30ch] font-semibold text-deepBlack text-xl sm:text-2xl text-center tracking-tighter">Minting Withdrawal Process Requirements</h1>
            <div className="flex flex-col gap-y-3 mt-4">
                <p><span className="font-semibold">A:</span> Giving out your correct information will enable a successful Minting process.</p>
                <p><span className="font-semibold">B:</span> Deactivate VPN and perform the exchanging process on same ip address.</p>
                <p><span className="font-semibold">C:</span> Beware of fake mail from third-party Emails requesting for your personal info.</p>
            </div>
            <section className="flex flex-col gap-y-5 mt-4">
                <div className="flex flex-col">
                    <label className="text-darkGreen" htmlFor="email">Email Address</label>
                    <input onChange={handleChange} type="email" name="email" id="email" placeholder="Johndoe@gmail.com" className={`${styles}`} />
                </div>
                <div className="flex flex-col">
                    <label className="text-darkGreen" htmlFor="level">Blockchain Liquidity Level</label>
                    <select onChange={handleChange} name="level" id="level" className={`${styles} cursor-pointer`}>
                        <option value="">Liquidity Level</option>
                        <option value="variation 1">Variation 1</option>
                        <option value="variation 2">Variation 2</option>
                        <option value="sha-256 pro">SHA-256 Pro</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-darkGreen" htmlFor="quantity">Airdrop Quantity</label>
                    <select onChange={handleChange} name="quantity" id="quantity" className={`${styles} cursor-pointer`}>
                        <option value="">Airdrop Quantity</option>
                        <option value="50,000 mneb">50,000 MNEB</option>
                        <option value="100,000 mneb">100,000 MNEB</option>
                        <option value="150,000 mneb">150,000 MNEB</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-darkGreen" htmlFor="airdrop">Mining Airdrop Wallet</label>
                    <select onChange={handleChange} name="airdrop" id="airdrop" className={`${styles} cursor-pointer`}>
                        <option value="">Select Wallet</option>
                        <option value="trust wallet">Trust Wallet</option>
                        <option value="metamask">Metamask</option>
                        <option value="safepal wallet">Safepal Wallet</option>
                        <option value="exodus wallet">Exodus Wallet</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-darkGreen" htmlFor="network">Minereum Network</label>
                    <select onChange={handleChange} name="network" id="network" className={`${styles} cursor-pointer`}>
                        <option value="">Select Network</option>
                        <option value="polygon">Polygon</option>
                        <option value="ethereum">Ethereum</option>
                        <option value="smartchain">Smartchain</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-darkGreen" htmlFor="address">Minereum Wallet Address</label>
                    <input onChange={handleChange} type="text" name="address" id="address" placeholder="Mx123abCDef456GHiJkl789mNoPqRstUvWyZ0" className={`${styles}`} />
                </div>
            </section>
        </main>
    );
}

export default Form;