import React, { useState } from 'react';

import {
  Container,
  TitleInput,
  BodyInput
} from './styles';

export default () => {

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={e => setTitle(e)}
        placeholder="Título da anotação"
        placeholderTextColor="#CCC"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={e => setBody(e)}
        placeholder="O que deseja anotar?"
        placeholderTextColor="#CCC"
        multiline={true}
        textAlignVertical="top"
      />
    </Container>
  )
}