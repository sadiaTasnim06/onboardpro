import type { PropsWithChildren } from "react";
import { Provider } from "@/components/ui/provider";
import QueryProvider from "./QueryProvider";
import { AuthProvider } from "@/context/auth.context";

function AppProvider({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <QueryProvider>
        <Provider>{children}</Provider>
      </QueryProvider>
    </AuthProvider>
  );
}
export default AppProvider;
