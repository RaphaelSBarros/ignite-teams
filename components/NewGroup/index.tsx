import Button from "../Button";
import Header from "../Header";
import Highlight from "../Highlight";
import { Container, Content, Icon } from "./styles";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}
