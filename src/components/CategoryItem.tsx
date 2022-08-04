import { ICategory } from '../interfaces'

const CategoryItem = ({
  category,
  handleClick,
  currentCategory,
}: {
  category: ICategory
  currentCategory: number
  handleClick: () => void
}) => {
  return (
    <div
      className={`item ${category.id === currentCategory ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className='content'>
        <div className='header'>{category.name}</div>
      </div>
    </div>
  )
}

export default CategoryItem
