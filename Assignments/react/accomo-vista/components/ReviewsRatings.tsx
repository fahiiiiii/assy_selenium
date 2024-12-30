import React from 'react';

const reviewsData = [
    {
        score: "10/10",
        label: "Excellent",
        reviewText: "A very cozy home for the two of us in a quiet area NW of town. Beautiful water view...",
        reviewer: "Kyle G.",
        date: "Sep 25, 2024"
    },
    {
        score: "10/10",
        label: "Excellent",
        reviewText: "The cottage was just as the pictures and description stated. Nice quiet area and great view of the cove.",
        reviewer: "Cindy B.",
        date: "Sep 23, 2024"
    },
    {
        score: "9/10",
        label: "Wonderful",
        reviewText: "Great location and very comfortable stay. Loved the outdoor activities nearby!",
        reviewer: "Jordan T.",
        date: "Aug 18, 2024"
    },
    {
        score: "9.5/10",
        label: "Amazing",
        reviewText: "Perfect getaway spot with all necessary amenities. The host was very accommodating.",
        reviewer: "Amelia R.",
        date: "Jul 20, 2024"
    },
    {
        score: "10/10",
        label: "Excellent",
        reviewText: "Beautiful views and quiet surroundings, ideal for relaxation. Would definitely visit again!",
        reviewer: "Chris P.",
        date: "Jul 5, 2024"
    }
];

const ReviewsRatings: React.FC = () => {
    return (
        <div className="flex justify-around mt-8">
            <div className="ratings max-w-xs p-5">
                <div className="score-section flex flex-col gap-1">
                    <div className="score text-5xl font-semibold text-green-700">9.8/10</div>
                    <div className="rating-label text-2xl font-semibold text-gray-800">Exceptional</div>
                    <div className="reviews-info flex items-center gap-2 mt-1">
                        <span className="review-count text-sm text-gray-800 underline">24 reviews</span>
                        <span className="info-icon w-4 h-4 flex items-center justify-center border border-gray-600 rounded-full text-gray-600 cursor-help">i</span>
                    </div>
                    <div className="verification-note text-xs text-gray-600 mt-2">Reviews are verified unless labeled otherwise.</div>
                </div>
            </div>

            <div className="view-and-slider flex flex-col w-full max-w-lg">
                <div className="reviews-slider relative overflow-hidden">
                    {reviewsData.map((review, index) => (
                        <input type="radio" name="slider" id={`review${index + 1}`} key={index} className="hidden" defaultChecked={index === 0} />
                    ))}
                    
                    {reviewsData.map((review, index) => (
                        <div className={`review p-5 border border-gray-300 rounded-lg bg-gray-900 text-white ${index === 0 ? 'block' : 'hidden'}`} id={`slide${index + 1}`} key={index}>
                            <h3 className="text-lg">{review.score} {review.label}</h3>
                            <p>{review.reviewText}</p>
                            <p><strong>{review.reviewer}</strong><br />{review.date}</p>
                        </div>
                    ))}

                    {/* Navigation controls */}
                    <div className="controls absolute bottom-0 left-0 right-0 flex justify-between p-2">
                        {reviewsData.map((_, index) => (
                            <label key={index} htmlFor={`review${index + 1}`} className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity">&#10095;</label>
                        ))}
                    </div>
                </div>

                <div className="view-all mt-4">
                    <a href="#" className="text-blue-500 font-bold">See all 24 reviews &#8594;</a>
                </div>
            </div>
        </div>
    );
};

export default ReviewsRatings;