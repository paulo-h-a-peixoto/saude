import React, {useState, useEffect} from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIcon from '../../assets/back.svg';
import {
    Container,
    Header,
    Body,
    Text,
    TextBold,
    TextBr,
    TextRed,
    BackButton
} from './styled';

export default () => {
    const navigation = useNavigation();
    const handleBackButton = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <Image source={require('../../assets/val-p.png')} style={{width: 300, height:120}} />
            </Header>
            <Body>
            <Text>De acordo com a Nota Informativo <TextBold>Nº 4/2021 - GI-03815</TextBold></Text>
            <TextBr></TextBr>
            <Text>Cronograma de vacinação para a população idosa por faixa etária:</Text>
            <TextBr></TextBr>
            <Text>Será nescessário levar no momento da vacinação:</Text>
            <TextBr></TextBr>
            <Text>Documento com foto CPF bem como, data de nascimento e comprovante de endereço.</Text>
            <TextBr></TextBr>
            <Text><TextBold>1° 15/02/2021 a 21/02/2021</TextBold> - Pessoas acima de 90 anos.</Text>
            <Text><TextBold>2° 21/02/2021 a 28/02/2021</TextBold> - Pessoas de 89 a 85 anos.</Text>
            <Text><TextBold>3° 01/03/2021 a 07/03/2021</TextBold> - Pessoas de 84 a 80 anos.</Text>
            <Text><TextBold>4° 08/03/2021 a 14/03/2021</TextBold> - Pessoas de 79 a 75 anos.</Text>
            <Text><TextBold>5° 15/03/2021 a 21/03/2021</TextBold> - Pessoas de 74 a 70 anos.</Text>
            <Text><TextBold>6° 22/03/2021 a 28/03/2021</TextBold> - Pessoas de 69 a 65 anos.</Text>
            <Text><TextBold>7° 29/03/2021 a 04/03/2021</TextBold> - Pessoas de 64 a 60 anos.</Text>
            <TextBr></TextBr>
            <TextBold>Os idosos se perderem a data do agendamento, poderá realizar a vacinação nos finais de semana, sem a necessidade do agendamento.</TextBold>
            <TextBr></TextBr>
            <Text><TextRed>Importante: O cronograma poderá ser alterado de acordo com o andamento.</TextRed></Text>
            <TextBr></TextBr>
            <TextRed>OBS: As demais fases aguardamos orientações do Ministério da Saúde e Estado de Goiás. Conforme divulgação, o plano será atualizado.</TextRed>
            </Body>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill="#000000" />
            </BackButton>
        </Container>
    );
}