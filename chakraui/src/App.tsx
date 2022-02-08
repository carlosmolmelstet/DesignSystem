import { Button, useColorMode } from "@chakra-ui/react";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
    <Button bg="red.900" onClick={toggleColorMode}>{colorMode}</Button>
    <p>

    {colorMode}
    </p>
    </>
  );
}
