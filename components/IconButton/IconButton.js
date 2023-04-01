import { TouchableOpacity } from "react-native";

const IconButton = ({ children, onPress, ...allProps }) => {
  return (
    <TouchableOpacity onPress={onPress} {...allProps}>
      {children}
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  onPress: () => null,
  children: null,
};

export default IconButton;
