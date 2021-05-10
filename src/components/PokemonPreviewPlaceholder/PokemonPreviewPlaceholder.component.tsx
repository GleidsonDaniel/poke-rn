import React from 'react';
import {Dimensions} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const PokemonPreviewPlaceholder = () => {
  const {width} = Dimensions.get('screen');
  return (
    <SkeletonPlaceholder>
      {[...Array(3).keys()].map((x, i) => (
        <SkeletonPlaceholder.Item
          key={i.toString()}
          flexDirection="row"
          alignItems="center"
          padding={10}
          justifyContent={'space-around'}>
          <SkeletonPlaceholder.Item
            width={width / 2.4}
            height={150}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            width={width / 2.4}
            height={150}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      ))}
    </SkeletonPlaceholder>
  );
};
