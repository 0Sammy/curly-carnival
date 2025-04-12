const Chart = () => {
    return (
        <main className="flex flex-col gap-y-2 bg-black/80 p-2 text-white">
            <section className="gap-2 grid grid-cols-2">
                <div className="flex flex-col items-center p-2 border border-gray-600 rounded-lg text-center">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">PRICE USD</p>
                    <p className="font-semibold text-base sm:text-lg">$22.750942</p>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-600 rounded-lg text-center">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">PRICE</p>
                    <p className="font-semibold text-base sm:text-lg">0.033657</p>
                </div>
            </section>
            <section className="gap-2 grid grid-cols-3">
                <div className="flex flex-col items-center p-2 border border-gray-600 rounded-lg text-center">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">LIQUIDITY</p>
                    <p className="font-semibold text-base sm:text-lg">$22.750942</p>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-600 rounded-lg text-center">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">FDV</p>
                    <p className="font-semibold text-base sm:text-lg">0.033657</p>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-600 rounded-lg text-center">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">MKT CAP</p>
                    <p className="font-semibold text-base sm:text-lg">$94.48M</p>
                </div>
            </section>
            <section className="grid grid-cols-4">
                <div className="flex flex-col items-center p-2 border border-gray-600 rounded-tl-lg">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">5M</p>
                    <p className="font-semibold text-green-600 text-base sm:text-lg">0.06%</p>
                </div>
                <div className="flex flex-col items-center p-2 border-gray-600 border-y border-r">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">1H</p>
                    <p className="font-semibold text-red-600 text-base sm:text-lg">+12.90%</p>
                </div>
                <div className="flex flex-col items-center p-2 border-gray-600 border-y">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">6H</p>
                    <p className="font-semibold text-green-600 text-base sm:text-lg">7,881%</p>
                </div>
                <div className="flex flex-col items-center p-2 border border-gray-600 rounded-tr-lg">
                    <p className="font-light text-gray-400 text-xs sm:text-sm">24</p>
                    <p className="font-semibold text-green-600 text-base sm:text-lg">10,881%</p>
                </div>
            </section>
            <section className="flex -mt-2 border-gray-600 border-b rounded-bl-lg rounded-br-lg">
                <div className="flex flex-col gap-y-3 p-3 border-gray-600 border-x w-[35%]">
                    <div className="flex flex-col">
                        <p className="font-light text-gray-400 text-xs sm:text-sm">TXNS</p>
                        <p className="font-semibold text-base sm:text-lg">$579,462M</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-light text-gray-400 text-xs sm:text-sm">VOLUME</p>
                        <p className="font-semibold text-base sm:text-lg">$105,573M</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-light text-gray-400 text-xs sm:text-sm">MINTS</p>
                        <p className="font-semibold text-base sm:text-lg">$50.46M</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 p-3 border-gray-600 border-r w-[65%]">
                    <section className="flex justify-between">
                        <div className="flex flex-col w-[49%]">
                            <p className="font-light text-gray-400 text-xs sm:text-sm">AIRDROPS</p>
                            <p className="font-medium text-base sm:text-lg">$288,467M</p>
                            <div className="bg-green-600 rounded-sm w-full h-1" />
                        </div>
                        <div className="flex flex-col w-[49%] text-right">
                            <p className="font-light text-gray-400 text-xs sm:text-sm">EXCHANGES</p>
                            <p className="font-medium text-base sm:text-lg">$306,578M</p>
                            <div className="bg-red-600 rounded-sm w-full h-1" />
                        </div>
                    </section>
                    <section className="flex justify-between">
                        <div className="flex flex-col w-[49%]">
                            <p className="font-light text-gray-400 text-xs sm:text-sm">AIRDROP VOL</p>
                            <p className="font-medium text-base sm:text-lg">$50.68M</p>
                            <div className="bg-green-600 rounded-sm w-full h-1" />
                        </div>
                        <div className="flex flex-col w-[49%] text-right">
                            <p className="font-light text-gray-400 text-xs sm:text-sm">EX. VOL</p>
                            <p className="font-medium text-base sm:text-lg">$70.20M</p>
                            <div className="bg-red-600 rounded-sm w-full h-1" />
                        </div>
                    </section>
                    <section className="flex justify-between">
                        <div className="flex flex-col w-[49%]">
                            <p className="font-light text-gray-400 text-xs sm:text-sm">AIRDROPS</p>
                            <p className="font-medium text-base sm:text-lg">$579,479M</p>
                            <div className="bg-green-600 rounded-sm w-full h-1" />
                        </div>
                        <div className="flex flex-col w-[49%] text-right">
                            <p className="font-light text-gray-400 text-xs sm:text-sm">EXCHANGES</p>
                            <p className="font-medium text-base sm:text-lg">$867,475M</p>
                            <div className="bg-red-600 rounded-sm w-full h-1" />
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
}

export default Chart;