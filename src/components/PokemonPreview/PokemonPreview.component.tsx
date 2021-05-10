import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {API_URL} from 'react-native-dotenv';
import useSWR from 'swr';
import {
  Avatar,
  Container,
  PokeName,
  PokeType,
  StyledCard,
} from './PokemonPreview.styles';

interface IPokemonPreview extends TouchableOpacityProps {
  name: string;
}

interface IPokemonPreviewData {
  name: string;
  sprites: {
    front_default: string;
  };
  types: [{type: {name: string}}];
}

export const PokemonPreview = ({name, ...props}: IPokemonPreview) => {
  const {data, error} = useSWR<IPokemonPreviewData>(API_URL + name);

  if (error) {
    return null;
  }

  if (!data) {
    return null;
  }

  return (
    <StyledCard>
      <Container {...props} testID={`poke_preview_touchable_${data.name}`}>
        <Avatar source={{uri: data.sprites.front_default}} resizeMode="cover" />
        <PokeName testID={`poke_preview_name_${data.name}`}>
          {data?.name || ''}
        </PokeName>
        <PokeType>
          {data?.types.map(poke => poke.type.name).join(', ') || ''}
        </PokeType>
      </Container>
    </StyledCard>
  );
};
