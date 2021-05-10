import {useNavigation, useRoute} from '@react-navigation/core';
import {RouteProp} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {API_URL} from 'react-native-dotenv';
import useSWR from 'swr';
import {
  PokeName,
  PokeType,
} from '../../components/PokemonPreview/PokemonPreview.styles';
import {
  AbilitiesLabel,
  Container,
  PokeDetailsAvatar,
} from './PokeDetails.styles';

type IPokeDetailsParams = {
  PokeDetails: {
    name: string;
  };
};
interface IPokeDetailsData {
  name: string;
  abilities: [{ability: {name: string}}];
  types: [{type: {name: string}}];
  sprites: {
    front_default: string;
  };
}

export default function PokeDetails() {
  const {
    params: {name},
  } = useRoute<RouteProp<IPokeDetailsParams, 'PokeDetails'>>();
  const routeName = name;
  const {setOptions} = useNavigation();
  const {data} = useSWR<IPokeDetailsData>(API_URL + routeName);

  useEffect(() => {
    setOptions({
      title: routeName.charAt(0).toUpperCase() + routeName.slice(1),
    });
  }, [setOptions, routeName]);

  return (
    <Container>
      <PokeDetailsAvatar source={{uri: data?.sprites.front_default}} />
      <PokeName testID={`poke_details_name_${data?.name}`}>
        {data?.name}
      </PokeName>
      <PokeType testID={`poke_details_types_${data?.name}`}>
        {data?.types.map(poke => poke.type.name).join(', ') || ''}
      </PokeType>
      <AbilitiesLabel>Abilities</AbilitiesLabel>
      <PokeType testID={`poke_details_abilities_${data?.name}`}>
        {data?.abilities.map(poke => poke.ability.name).join(', ') || ''}
      </PokeType>
    </Container>
  );
}
