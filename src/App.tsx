import { ChakraProvider } from "@chakra-ui/react";

import Profile from "./component/Profile";

function App() {
  return (
    <ChakraProvider>
      <Profile />
    </ChakraProvider>
  );
}

export default App;
