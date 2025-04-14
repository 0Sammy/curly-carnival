import Image from "next/image";

//Images
import trustPilot from "../../public/trustPilot.jpg";

const StarRating = () => {

    const rating = 4.9;
    const reviews = 5607;

    return (
        <div className="my-4 p-2">
            <Image src={trustPilot} alt="Trust Pilot Image" />
            <p className="mt-2 font-light text-sm sm:text-base text-center">TrustScore <span className="font-semibold">{rating}</span> | <span className="font-semibold">{reviews.toLocaleString()}</span> reviews</p>
        </div>
    );
};

export default StarRating;
