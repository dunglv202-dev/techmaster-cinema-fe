import { Category } from '@/models/category'
import axios from 'axios'

export const getAllCategories = async () => {
  return (await axios.get<Category[]>('/api/categories')).data
}
