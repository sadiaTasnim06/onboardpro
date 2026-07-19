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

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Box p={8} borderWidth="1px" borderRadius="lg" width="400px">
      <Stack gap={4}>
        <Stack gap={2} align="center">
          <Text>Company Logo</Text>
          <Heading size="lg">Login</Heading>
        </Stack>

        <Input placeholder="Email" type="email" />
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
          />
        </InputGroup>

        <Link textAlign="right" fontSize="sm">
          Forgot Password?
        </Link>

        <Button>Sign In</Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;
