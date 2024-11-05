import Header from "../Header";
import Highlight from "../Highlight";
import { Container } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
    </Container>
  );
}
