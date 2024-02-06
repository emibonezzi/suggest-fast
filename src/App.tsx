import { VStack } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import urlValidator from "./utils/url-validator";

const App = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  return (
    <VStack>
      <SearchBar onInputUrl={(url) => setCurrentUrl(url)}></SearchBar>
      <p>{urlValidator(currentUrl)}</p>
    </VStack>
  );
};

export default App;
