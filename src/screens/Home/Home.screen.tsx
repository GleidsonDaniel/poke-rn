import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {API_URL} from 'react-native-dotenv';
import styled from 'styled-components/native';
import useSWR from 'swr';
import {PokemonPreview} from '../../components/PokemonPreview/PokemonPreview.component';
import {PokemonPreviewPlaceholder} from '../../components/PokemonPreviewPlaceholder/PokemonPreviewPlaceholder.component';

const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {paddingBottom: 10},
  columnWrapperStyle: {justifyContent: 'space-around', padding: 5},
})``;

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [pokeList, setPokeList] = useState([] as any);
  const {data, mutate} = useSWR(`${API_URL}?limit=10&offset=${offset}`);

  const onEndReachedCallback = () => {
    if (data) {
      setPokeList(data ? [...pokeList, ...data.results] : pokeList);
      setOffset(offset + 10);
    }
  };

  const pokeArray = data ? [...pokeList, ...data.results] : pokeList;

  return (
    <View>
      <StyledFlatList
        data={pokeArray}
        numColumns={2}
        renderItem={({item}) => (
          <PokemonPreview name={item?.name} onPress={() => {}} />
        )}
        keyExtractor={poke => poke?.name}
        onEndReached={onEndReachedCallback}
        onEndReachedThreshold={0.01}
        ListEmptyComponent={() =>
          !pokeArray.length ? (
            <>
              <Text>
                Não há pokemons disponíveis, tente recarregar novamente.
              </Text>
              <Button
                title="recarregar"
                onPress={() => {
                  setOffset(0);
                  mutate(0);
                }}
              />
            </>
          ) : null
        }
        ListFooterComponent={() =>
          !data ? <PokemonPreviewPlaceholder /> : null
        }
      />
    </View>
  );
}
