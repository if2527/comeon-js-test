import { useEffect, useState } from 'react'
import { IGame } from '../interfaces'
import { fetchCategories } from '../store/categorySlice'
import { fetchGames } from '../store/gamesSlice'
import { logout } from '../store/userSlice'
import CategoryItem from './CategoryItem'
import GameItem from './GameItem'
import { useAppDispatch, useAppSelector } from './hooks'
import Player from './Player'

const Casino = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  const { categories } = useAppSelector((state) => state.categories)
  const { games } = useAppSelector((state) => state.games)
  const [currentCategory, setCurrentCategory] = useState(0)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchGames())
  }, [dispatch])

  return (
    <div className='casino'>
      <div className='ui grid stackable'>
        <div className='twelve wide column'>
          <div className='ui list'>
            {user && <Player user={user} />}
          </div>
          <button
            className='logout ui left floated secondary button'
            onClick={() =>
              dispatch(
                logout({
                  username: user!.username,
                })
              )
            }
          >
            <i className='left chevron icon'></i>Log Out
          </button>
        </div>
        <div className='four wide column'>
          <div className='search ui fluid icon input '>
            <input
              type='text'
              placeholder='Search Game'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className='search icon'></i>
          </div>
        </div>
      </div>
      <div className='ui grid stackable'>
        <div className='twelve wide column'>
          <h3 className='ui dividing header'>Games</h3>

          <div className='ui relaxed divided game items links'>
            {games
              .filter((i) => i.categoryIds.includes(currentCategory))
              .filter(
                (i) =>
                  i.name.toLowerCase().includes(search.toLowerCase()) ||
                  i.description.toLowerCase().includes(search.toLowerCase())
              )
              .map((game: IGame, index: number) => {
                return <GameItem key={index} game={game} />
              })}
          </div>
        </div>
        <div className='four wide column categories'>
          <h3 className='ui dividing header'>Categories</h3>

          <div className='ui selection animated list unstackable'>
            {categories.map((category) => (
              <CategoryItem
                key={category.id}
                category={category}
                currentCategory={currentCategory}
                handleClick={() => setCurrentCategory(category.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Casino
