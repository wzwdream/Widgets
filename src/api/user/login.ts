import Http from '@/utils/request'
export interface UserInfo {
  id: number
  avatar?: string
  userName: string
  name: string
  phone?: string
  password: string
  email: string
  sex: number
  status: number
  roles: number[]
  token: string
}
export const getCaptcha = () => {
  return Http.get<string>('/captcha')
}
export const login = (params: Record<string, string>) => {
  return Http.post('/api/login', params)
}
export const getUserInfo = () => {
  return Http.get<UserInfo>('/user/info')
}
export const logout = () => {
  return Http.post('/logout')
}