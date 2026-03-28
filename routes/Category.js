import { Router } from "express";
import { CategoryController, DeleteCategory, GetByCategory, GetByCategoryhome, GetByCategorylatest, GetCategories, SearchPRoducts, SearchPRoductsHome } from "../controllers/Category.Controller.js";


const CategoryRouter = Router()

CategoryRouter.post('/addCategory',CategoryController)
CategoryRouter.get('/getCategory',GetCategories)
CategoryRouter.get('/deleteCategory',DeleteCategory)

CategoryRouter.get('/getbycategory',GetByCategory)

CategoryRouter.get('/SearchItem',SearchPRoducts)

CategoryRouter.get('/SearchItemhome',GetByCategoryhome)
CategoryRouter.get('/SearchItemlatest',GetByCategorylatest)

export default CategoryRouter