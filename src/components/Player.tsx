import { IUser } from '../interfaces'

const Player = ({ user }: { user: IUser }) => {
  
  return (
    <div className='player item'>
      <img
        className='ui avatar image'
        src={require(`./../images/avatar/${user.username}.jpg`)}
        alt='avatar'
      />
      <div className='content'>
        <div className='header'>
          <b className='name'>{user.name}</b>
        </div>
        <div className='description event'>{user.event}</div>
      </div>
    </div>
  )
}

export default Player
