import { Router } from "express";
import { DSAFeedsGEt, Feedbacks, FeedController, FeedSearch } from "../controllers/FeedBackControllers.js";
import verifyuser from "../Middlewares/Jwt.middleware.js";

const FeedRouter = Router()

FeedRouter.post('/feedback',FeedController)


FeedRouter.get('/feeds',Feedbacks)


FeedRouter.get('/DSAFeeds',DSAFeedsGEt)

FeedRouter.get('/searchfeeds',FeedSearch)

export default FeedRouter