import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native'

import {
  Container,
  TitleInput,
  BodyInput
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector(state => state.notes.list);

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.key != undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title)
      setBody(list[route.params.key].body)
    }
  }, [])

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