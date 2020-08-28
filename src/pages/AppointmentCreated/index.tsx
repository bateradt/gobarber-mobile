import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import {
  Container,
  Title,
  Description,
  ButtonOK,
  ButtonOKText,
} from './styles';

interface IRouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as IRouteParams;

  const formattedDate = useMemo(() => {
    return format(
      routeParams.date,
      "EEEE', dia' dd 'de' MMMM 'de' yyyy 'às' HH:mm'h ",
      { locale: ptBr },
    );
  }, []);

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento Concluído</Title>
      <Description>{formattedDate}</Description>
      <ButtonOK onPress={handleOkPressed}>
        <ButtonOKText>OK</ButtonOKText>
      </ButtonOK>
    </Container>
  );
};

export default AppointmentCreated;
