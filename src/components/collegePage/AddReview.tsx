"use client"

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

export const AddReview = ({ clgId }: { clgId: string }) => {
    const [isReviewed, setIsReviewed] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [review, setReview] = useState<{ comment: string, rating: number }>({
        comment: "",
        rating: 3
    });
    const [hover, setHover] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsReviewed(localStorage.getItem(`review-${clgId}`) === "true");
        }
    });
    const handleSubmit = async () => {
        if (review.comment.trim().length < 10) {
            alert("Please write a review with at least 10 characters");
            return;
        }

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/v1/review/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clgId,
                    comment: review.comment,
                    rating: review.rating,
                })
            }
            );
            if (!res.ok) {
                toast.error("Failed to submit review. Please try again.");
            }
            toast.success("Review submitted successfully!");
            localStorage.setItem(`review-${clgId}`, "true");
            setIsReviewed(true);

            setReview({ comment: "", rating: 3 });
        } catch (error) {
            console.error("Failed to submit review:", error);
            alert("Failed to submit review. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="add-review" className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg border-2 border-black dark:border-white">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Share Your Experience</h2>

            {isReviewed ? (
                <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 p-4 rounded-lg">
                    <p className="text-black dark:text-white text-center">
                        Thanks for sharing your review! Your feedback helps other students.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    <div>
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Your Review
                        </label>
                        <textarea
                            id="comment"
                            value={review.comment}
                            onChange={(e) => setReview({ ...review, comment: e.target.value })}
                            placeholder="Share your honest experience with this college..."
                            className="w-full p-3 bg-white dark:bg-gray-700 border-2 border-black dark:border-gray-600 rounded-lg shadow-sm text-black dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            rows={4}
                            disabled={isSubmitting}
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {review.comment.length < 10 ?
                                `Please write at least 10 characters (${10 - review.comment.length} more needed)` :
                                `${review.comment.length} characters`}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Your Identity will remain anonymous.
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Rating
                        </label>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <button
                                        type="button"
                                        key={index}
                                        className={`text-2xl ${ratingValue <= (hover || review.rating)
                                            ? "text-yellow-400"
                                            : "text-gray-400 dark:text-gray-600"
                                            }`}
                                        onClick={() => setReview({ ...review, rating: ratingValue })}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)}
                                        disabled={isSubmitting}
                                    >
                                        <FaStar />
                                    </button>
                                );
                            })}
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                {review.rating}/5
                            </span>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitting || review.comment.trim().length < 10}
                            className={`rounded-xl text-lg items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[4px_4px_0px_0px] hover:shadow-[2px_2px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 dark:shadow-white shadow-black bg-purple-500 px-4 py-2 ${(isSubmitting || review.comment.trim().length < 10)
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-purple-400"
                                }`}
                        >
                            {isSubmitting ? "Submitting..." : "Submit Review"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
