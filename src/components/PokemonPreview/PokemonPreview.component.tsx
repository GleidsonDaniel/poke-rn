import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {API_URL} from 'react-native-dotenv';
import useSWR from 'swr';
import {
  Avatar,
  Container,
  Name,
  StyledCard,
  Type,
} from './PokemonPreview.styles';

interface IPokemonPreview extends TouchableOpacityProps {
  name: string;
}

export const PokemonPreview = ({name, ...props}: IPokemonPreview) => {
  const {data, error} = useSWR(API_URL + name);

  if (error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return (
    <StyledCard>
      <Container {...props}>
        <Avatar source={{uri: data.sprites.front_default}} resizeMode="cover" />
        <Name>{data?.name || ''}</Name>
        <Type>{data?.types.map(poke => poke.type.name).join(', ') || ''}</Type>
      </Container>
    </StyledCard>
  );
};
