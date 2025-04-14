const Loading = () => {
    return (
        <div className="z-[60] fixed inset-0 flex flex-col justify-center items-center bg-white p-6 text-deepBlack min-dvh">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-t-primaryGreen border-opacity-30 rounded-full animate-spin"></div>
                <div className="absolute inset-0 border-4 border-t-primaryGreen border-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-center">Processing your request...</p>
        </div>
    )
}

export default Loading;