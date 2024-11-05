import { useState } from "react";
import GroupCard from "../GroupCard";
import Header from "../Header";
import Highlight from "../Highlight";
import { Container } from "./styles";
import { FlatList } from "react-native";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera da Rocket"]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
