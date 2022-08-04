
export interface IUserState {
  user: IUser | null,
  isLoading: boolean,
  error: string | unknown,
}

export interface ICategoryState {
  categories: ICategory[]
}

export interface IGamesState {
  games: IGame[]
  open: string
}

export interface IloginResponse {
  player: IUser,
  status: string
}

export interface ILoginParams {
  username: string
  password: string
}

export interface ILogoutParams {
  username: string
}

export interface IUser {
  username: string
  name: string
  avatar: string
  event: string
}

export interface ICategory {
  id: number
  name: string
}

export interface IGame {
  name: string
  description: string
  code: string
  icon: string
  categoryIds: number[]
}