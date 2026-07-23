import type { LoginFormData } from "@/schemas/loginSchema"

export const login = async (data: LoginFormData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login request", data)
      resolve(data)
    }, 1500)
  })
}
