import React from 'react';
import { Box, Title } from './style';

export default ({ data, index, onPress }) => {
  return (
    <Box onPress={() => onPress(index)}>
      <Title>{data.title}</Title>
    </Box>
  );
}