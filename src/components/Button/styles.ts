// src/components/Button/styles.ts
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 8px;
  flex-direction: row;

  align-items: center;
`;
export const ButtonText = styled.Text`
  flex: 1;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
  color: #312e38;
  font-size: 18px;
`;
