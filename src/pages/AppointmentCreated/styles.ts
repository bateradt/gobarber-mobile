import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  margin-top: 16px;
`;

export const ButtonOK = styled(RectButton)`
  background: #ff9000;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 10px;
  margin-top: 24px;
`;

export const ButtonOKText = styled.Text`
  font-size: 18px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
`;
