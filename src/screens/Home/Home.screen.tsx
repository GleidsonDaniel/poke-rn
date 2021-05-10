import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, ListRenderItem, Text, View} from 'react-native';
import {API_URL} from 'react-native-dotenv';
import styled from 'styled-components/native';
import useSWR from 'swr';
import {PokemonPreview} from '../../components/PokemonPreview/PokemonPreview.component';
import {PokemonPreviewPlaceholder} from '../../components/PokemonPreviewPlaceholder/PokemonPreviewPlaceholder.component';

interface PokeName {
  name: string;
}

interface IPokeDetailsData {
  results: PokeName[];
}

const StyledFlatList = styled.FlatList.attrs({
  contentContainerStyle: {paddingBottom: 10},
  columnWrapperStyle: {justifyContent: 'space-around', padding: 5},
})``;

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [pokeList, setPokeList] = useState<PokeName[]>([]);
  const {data, mutate} = useSWR<IPokeDetailsData>(
    `${API_URL}?limit=10&offset=${offset}`,
  );
  const {navigate} = useNavigation();

  const onEndReachedCallback = () => {
    if (data) {
      setPokeList(data ? [...pokeList, ...data.results] : pokeList);
      setOffset(offset + 10);
    }
  };

  const pokeArray = data ? [...pokeList, ...data.results] : pokeList;

  const renderPokemonRows: ListRenderItem<PokeName> = ({item}) => (
    <PokemonPreview
      name={item?.name}
      onPress={() => navigate('PokeDetails', {name: item.name})}
    />
  );

  return (
    <View>
      <StyledFlatList<React.ElementType>
        data={pokeArray}
        numColumns={2}
        renderItem={renderPokemonRows}
        keyExtractor={(item: {name: PokeName}) => item?.name}
        onEndReached={onEndReachedCallback}
        onEndReachedThreshold={0.01}
        ListEmptyComponent={() =>
          !pokeArray.length && data ? (
            <>
              <Text>
                Não há pokemons disponíveis, tente recarregar novamente.
              </Text>
              <Button
                title="recarregar"
                onPress={() => {
                  setOffset(0);
                  mutate({results: [{name: ''}]});
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
