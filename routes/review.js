const express=require("express");
const router= express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync.js")
const { isLoggedIn,isReviewAuthor } = require("../middleware.js");
const ReviewController=require("../controllers/reviews.js");


router.post("/",isLoggedIn, wrapAsync(ReviewController.createReview));


router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(ReviewController.destroyReview));

module.exports=router;