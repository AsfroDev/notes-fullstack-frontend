export interface LoginCredentials {
  email: string
  password: string
}
export interface RegisterCredentials {
  name: string
  email: string
  password: string
  loginProvider: string
}

export interface User {
  id: string
  name: string
  email: string
  loginProvider: string
  createdAt: string
  updatedAt: string
}

export interface UserResponse {
  token: {
    user: User
    token: string
  }
}
