import { configureStore } from '@reduxjs/toolkit'
import { visualReducer } from './slices/visual'
import { filtersReducer } from './slices/filters'

export default configureStore({
  reducer: {
    visual: visualReducer,
    filters: filtersReducer,
  },
})

