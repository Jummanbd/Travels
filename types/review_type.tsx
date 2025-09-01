// types/review.ts
export interface Comment {
  comment_details: string;
  review_star: number; // ⭐ 1–5 rating
}

export interface Review {
  id: number;
  user_name: string;
  user_img: string;
  founders: string;
  tourId: number; // which tour this review belongs to
  comment: Comment;
}
