
export default function DesktopBlockNotice() {
    return (
        <div className="hidden md:z-50 md:fixed md:inset-0 md:flex md:justify-center md:items-center bg-white px-4 text-center">
            <div className="mx-auto max-w-md">
                <h1 className="mb-2 font-semibold text-red-600 text-2xl">Unsupported Screen Size</h1>
                <p className="text-gray-700 text-base">
                    This app is optimized for mobile devices. Please switch to a phone or resize your browser to a smaller screen.
                </p>
            </div>
        </div>
    );
}
