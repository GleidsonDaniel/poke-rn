import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
`;

export const PokeDetailsAvatar = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;

export const AbilitiesLabel = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.gray14};
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
`;
