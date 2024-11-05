import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {};

export default function ButtonIcon({}: Props) {
  return (
    <Container>
      <Icon name="home" type="SECONDARY" />
    </Container>
  );
}
