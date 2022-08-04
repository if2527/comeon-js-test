import { useForm, SubmitHandler } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from './hooks'
import { login } from '../store/userSlice'
import { ILoginParams } from '../interfaces'


const LoginForm = () => {
  const dispatch = useAppDispatch()
  const {isLoading, error} = useAppSelector((state) => state.user)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginParams>()

  const onSubmit: SubmitHandler<ILoginParams> = (data) => {
    dispatch(login(data))
  }

  return (
    <div className='login'>
      <div className='ui grid centered'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='fields'>
            <div className='required field'>
              <div className={`ui icon input ${errors.username ? 'error' : ''}`}>
                <input
                  type='text'
                  placeholder='Username'
                  {...register('username', { required: true })}
                />
                <i className='user icon'></i>
              </div>
            </div>
            <div className='required field'>
              <div className={`ui icon input ${errors.password ? 'error' : ''}`}>
                <input
                  type='password'
                  placeholder='Password'
                  {...register('password', { required: true })}
                />
                <i className='lock icon'></i>
              </div>
            </div>
            <div className='field'>
              <div className={`ui icon input ${isLoading ? 'loading' : ''}`}>
                <input type='submit' value='Login' style={{cursor: 'pointer'}} />
                <i className='right chevron icon'></i>
              </div>
            </div>
            {!!error && (
              <div className='error-text'>
                Error: {String(error)}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
