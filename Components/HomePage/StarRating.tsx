
//Component
import { Star, StarHalf, StarOff } from "lucide-react";

const StarRating = () => {
    const rating = 4.9;
    const reviews = 5607;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center gap-x-2">
            <div className="flex items-center text-green-600">
                {[...Array(fullStars)].map((_, i) => (
                    <Star key={`star-full-${i}`} fill="currentColor" className="w-5 h-5" />
                ))}
                {hasHalfStar && <StarHalf className="w-5 h-5" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <StarOff key={`star-off-${i}`} className="w-5 h-5 text-gray-300" />
                ))}
            </div>
            <span className="font-medium text-gray-700 text-sm">
                {`TrustScore ${rating} | ${reviews.toLocaleString()} reviews`}
            </span>
        </div>
    );
};

export default StarRating;
