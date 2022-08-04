import { useAppSelector } from './components/hooks'
import Casino from './components/Casino'
import Ingame from './components/Ingame'
import LoginForm from './components/LoginForm'
import logo from './images/logo.svg'

function App() {
  const { user } = useAppSelector((state) => state.user)

  return (
    <div>
      <div className='ui one column center aligned page grid'>
        <div className='column twelve wide'>
          <img src={logo} alt='logo' />
        </div>
      </div>
      <div className='main container'>
        {!user ? (
          <LoginForm />
        ) : (
          <>
            <Casino user={user} />
            <Ingame />
          </>
        )}
      </div>
    </div>
  )
}

export default App
