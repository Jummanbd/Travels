import { Review } from "@/types/review_type";
// Review Dynamic Count totalReviews and averageRating
export function reviewDynamicCount(reviews: Review[]) {
  const totalReviews = reviews.length;

  const averageRating =
    totalReviews === 0
      ? 0
      : reviews.reduce((sum, r) => sum + r.comment.review_star, 0) /
        totalReviews;

  return {
    totalReviews,
    averageRating: Number(averageRating.toFixed(1)),
  };
}
