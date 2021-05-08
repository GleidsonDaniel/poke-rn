import styled from 'styled-components/native';
import Card from '../Card';

export const Container = styled.TouchableOpacity`
  padding: 5px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 75px;
  height: 75px;
`;

export const Name = styled.Text`
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
  color: ${({theme}) => theme.colors.gray14};
`;

export const Type = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.colors.mediumGray};
`;

export const StyledCard = styled(Card)`
  margin: 0px 5px;
`;
