import { IGame } from '../interfaces'
import { openGame } from '../store/gamesSlice'
import { useAppDispatch } from './hooks'

const GameItem = ({ game }: { game: IGame }) => {
  const dispatch = useAppDispatch()

  return (
    <div className='game item'>
      <div className='ui small image'>
        <img src={require(`./../images/game-icon/${game.code}.jpg`)} alt='game-icon' />
      </div>
      <div className='content'>
        <div className='header'>
          <b className='name'>{game.name}</b>
        </div>
        <div className='description'>{game.description}</div>
        <div className='extra'>
          <button
            className='play ui right floated secondary button'
            onClick={() => {
              dispatch(openGame(game.code))
             
              // (window as any).comeon.game.launch(game.code)
            }}
          >
            Play
            <i className='right chevron icon'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameItem
