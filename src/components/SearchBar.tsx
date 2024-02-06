import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onInputUrl: (url: string) => void;
}

const SearchBar = ({ onInputUrl }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onInputUrl(ref.current.value);
      }}
    >
      <Input ref={ref} placeholder="Paste reddit URL..." />
    </form>
  );
};

export default SearchBar;
