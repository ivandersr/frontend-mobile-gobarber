// src/pages/Profile/styles.ts
import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 140 : 40}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  top: 88px;
  position: relative;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 96px;
`;

export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 93px;
  align-self: center;
`;
