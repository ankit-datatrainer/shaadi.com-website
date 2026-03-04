import React, { useState, useEffect } from "react";

const reviews = [
    {
        id: 1,
        couple: "Anjali & Rahul",
        text: "We met on Shaadi.com and it felt like destiny! The matchmaking algorithm really understood what we were looking for. The verification process gave our families the confidence they needed.",
        image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=400&fit=crop",
        rating: 5,
        location: "Mumbai, Maharashtra"
    },
    {
        id: 2,
        couple: "Priya & Amit",
        text: "From our first chat to our wedding day, the journey was magical. The VIP service provided us with premium matches, and we found each other within just three months.",
        image: "https://images.unsplash.com/photo-1544078755-9a4d6f46a2a0?w=400&h=400&fit=crop",
        rating: 5,
        location: "Delhi, Delhi"
    },
    {
        id: 3,
        couple: "Sneha & Vikram",
        text: "Living in different cities, we would have never met if it wasn't for this app. Thank you Shaadi.com for helping me find my perfect life partner. Highly recommended!",
        image: "https://images.unsplash.com/photo-1621801306175-69f3fd4ca9bd?w=400&h=400&fit=crop",
        rating: 5,
        location: "Bangalore, Karnataka"
    },
    {
        id: 4,
        couple: "Pooja & Rohan",
        text: "The verified profiles and smart filters made our search so easy. Our families clicked instantly upon meeting. We are happily married now.",
        image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?w=400&h=400&fit=crop",
        rating: 5,
        location: "Pune, Maharashtra"
    }
];

const CoupleReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 5000); // Change review every 5 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full py-16 md:py-24 bg-pink-50 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Happy Couples
                    </h2>
                    <p className="text-gray-600 text-lg">See what our happy couples have to say</p>
                </div>
                
                <div className="relative max-w-4xl mx-auto h-[480px] sm:h-[350px]">
                    {reviews.map((review, index) => {
                        // Logic for sliding animation classes
                        let position = 'opacity-0 translate-x-32 scale-90 z-0 pointer-events-none';
                        if (index === currentIndex) {
                            position = 'opacity-100 translate-x-0 scale-100 z-20 transition-all duration-700 ease-in-out';
                        } else if (index === (currentIndex - 1 + reviews.length) % reviews.length) {
                            position = 'opacity-0 -translate-x-32 scale-90 z-0 transition-all duration-700 ease-in-out pointer-events-none';
                        }

                        return (
                            <div key={review.id} className={`absolute inset-0 flex items-center justify-center ${position}`}>
                                <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 w-full max-w-3xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10 border border-pink-100">
                                    <div className="w-32 h-32 sm:w-48 sm:h-48 shrink-0 relative">
                                        <div className="absolute inset-0 bg-pink-200 rounded-full blur-md opacity-50 transform translate-y-2"></div>
                                        <img 
                                            src={review.image} 
                                            alt={review.couple} 
                                            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10"
                                        />
                                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-sm z-20">
                                            <span className="text-pink-500 text-xl">♥</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center sm:text-left">
                                        <div className="flex justify-center sm:justify-start gap-1 mb-3">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <span key={i} className="text-yellow-400 text-xl">★</span>
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-base sm:text-lg italic mb-4 sm:mb-6 leading-relaxed">
                                            "{review.text}"
                                        </p>
                                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">{review.couple}</h4>
                                        <p className="text-pink-600 font-medium text-sm mt-1">{review.location}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Controls */}
                <div className="flex justify-center mt-6 sm:mt-10 gap-3 relative z-30">
                    {reviews.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-3 rounded-full transition-all duration-300 ${
                                idx === currentIndex ? 'bg-pink-600 w-8' : 'bg-pink-300 w-3 hover:bg-pink-400'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoupleReviews;
