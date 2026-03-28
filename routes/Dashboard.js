import { Router } from "express";
import { Dashboard } from "../controllers/Dashboard.Controller.js";

const DashboardRouter = Router()


DashboardRouter.get('/dash',Dashboard)

export default DashboardRouter