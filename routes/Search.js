import Router from 'express'
import { SearchBar } from '../controllers/Search.controller.js'
const SearchRouter = Router()

SearchRouter.get('/search-elements',SearchBar)

export default SearchRouter