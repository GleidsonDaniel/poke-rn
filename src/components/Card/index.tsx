import React from 'react';
import {View, StyleSheet, Platform, ViewProps} from 'react-native';

interface ICard extends ViewProps {
  backgroundColor?: string;
  elevation?: number;
  cornerRadius?: number;
  opacity?: number;
  width?: number;
}

const Card: React.FC<ICard> = ({
  children,
  backgroundColor = '#ffffff',
  elevation = 3,
  cornerRadius = 5,
  opacity = 0.5,
  ...props
}) => {
  const cardStyle =
    Platform.OS === 'ios'
      ? StyleSheet.create({
          container: {
            shadowRadius: elevation,
            shadowOpacity: opacity,
            shadowOffset: {width: 0, height: elevation},
            borderRadius: cornerRadius,
            backgroundColor: backgroundColor,
            flex: 1,
          },
        })
      : StyleSheet.create({
          container: {
            elevation: elevation,
            borderRadius: cornerRadius,
            backgroundColor: backgroundColor,
            flex: 1,
          },
        });

  return <View style={[cardStyle.container, props.style]}>{children}</View>;
};

export default Card;
