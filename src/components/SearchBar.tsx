import { Input } from "@chakra-ui/react";
import { useRef } from "react";

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) console.log(ref.current.value);
      }}
    >
      <Input ref={ref} placeholder="Paste reddit URL..." />
    </form>
  );
};

export default SearchBar;
