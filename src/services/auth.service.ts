import type { LoginFormData } from "@/schemas/loginSchema"

import { api } from "@/lib/api";

export const login = async (data: LoginFormData) => {
  const response = await api.post("/auth/login", data);

  return response.data;
};