import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "../icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, type LoginFormData } from "@/schemas/loginSchema";
import { useLogin } from "@/hooks/useLogin";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending } = useLogin();
  const onSubmit = async (data: LoginFormData) => {
    login(data);
  };
  return (
    <Box
      as="form"
      p={8}
      borderWidth="1px"
      borderRadius="lg"
      w="400px"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack gap={4}>
        <Stack gap={2} align="center">
          <Text>Company Logo</Text>
          <Heading size="lg">Login</Heading>
        </Stack>

        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
          disabled={isPending}
        />
        {errors.email && (
          <Text color="red.500" fontSize="sm">
            {errors.email.message}
          </Text>
        )}
        <InputGroup
          endElement={
            showPassword ? (
              <EyeIcon onClick={() => setShowPassword((prev) => !prev)} />
            ) : (
              <EyeOffIcon onClick={() => setShowPassword((prev) => !prev)} />
            )
          }
        >
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            {...register("password")}
            disabled={isPending}
          />
        </InputGroup>
        {errors.password && (
          <Text color="red.500" fontSize="sm">
            {errors.password.message}
          </Text>
        )}

        <Link textAlign="right" fontSize="sm">
          Forgot Password?
        </Link>

        <Button type="submit" loading={isPending}>
          Sign In
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;
