import { Category, CATEGORY_ALL } from '@/models/category'
import { getAllCategories } from '@/services/category-service'
import { Col, Flex, Row } from 'antd'
import { useEffect, useState } from 'react'
import styles from './CategoryGrid.module.css'

interface CategoryGridProps {
  onSelect: (category: Category) => void
}

const CategoryGrid = ({ onSelect }: CategoryGridProps) => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const cates = await getAllCategories()
      cates.unshift(CATEGORY_ALL)
      setCategories(cates)
    }
    fetchCategories()
  }, [])

  return (
    <Row gutter={20}>
      {categories.map((category) => (
        <Col key={category.id} style={{ marginTop: 20 }} span={4}>
          <Flex
            justify='center'
            align='center'
            className={styles['cate_card']}
            onClick={() => onSelect(category)}
          >
            <div className={styles['cate__thumb-container']}>
              <img src={category.thumbnail} alt={category.name} className={styles['cate__thumb']} />
            </div>
            <span className={styles['cate__name']}>{category.name}</span>
          </Flex>
        </Col>
      ))}
    </Row>
  )
}

export default CategoryGrid
