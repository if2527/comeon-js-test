import { useEffect } from 'react'
import { Modal } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from './hooks'
import { openGame } from '../store/gamesSlice'

const Ingame = () => {
  const dispatch = useAppDispatch()
  const { open } = useAppSelector((state) => state.games)

  useEffect(() => {
    if (open) {
      ;(window as any).comeon.game.launch(open)
    }
  }, [open]) 

  return (
    <>
      {!!open && (
        <Modal basic onClose={() => dispatch(openGame(''))} open={!!open}>
          <Modal.Content>
            <div className='ingame'>
              <div className='ui grid stackable'>
                <div className='three wide column'>
                  <button
                    className='ui right floated secondary button'
                    onClick={() => {
                      dispatch(openGame(''))
                      ;(window as any).comeon.game.stop()
                    }}
                  >
                    <i className='left chevron icon'></i>Back
                  </button>
                </div>
                <div className='thirteen wide column'>
                  <div id='game-launch'></div>
                </div>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      )}
    </>
  )
}

export default Ingame
