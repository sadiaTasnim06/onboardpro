import { useMutation } from "@tanstack/react-query";
import { login as loginService } from "@/services/auth.service";
import { useAuth } from "@/context/auth.context";

export function useLogin() {
  const { login } = useAuth();
  return useMutation({
    mutationFn: loginService,

    onSuccess: (data) => {
      login(data.user, data.accessToken);
    },

    onError: (error) => {
      console.error("Login failed", error);
    },
  });
}
