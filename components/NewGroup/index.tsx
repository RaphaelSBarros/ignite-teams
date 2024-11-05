import Button from "../Button";
import Header from "../Header";
import Highlight from "../Highlight";
import { Input } from "../Input";
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

        <Input />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
