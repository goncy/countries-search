import {Input, InputProps} from "@chakra-ui/react";
import React from "react";

interface Props extends Omit<InputProps, "value" | "onChange"> {
  value?: string;
  onChange: (value: string) => void;
  timeout?: number;
}

const DebouncedInput: React.FC<Props> = ({
  onChange,
  value: defaultValue = "",
  timeout = 250,
  ...props
}) => {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    const to = setTimeout(() => onChange(value), timeout);

    return () => clearTimeout(to);
  }, [value, timeout, onChange]);

  return <Input onChange={(e) => setValue(e.target.value)} {...props} />;
};

export default DebouncedInput;
