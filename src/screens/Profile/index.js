import React from 'react';
import { Image } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Container, CustomButton, CustomButtonText, NameLogoText } from './styles';
import Api from '../../Api';



export default () => {
    const navigation = useNavigation();
    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes:[{name:'SignIn'}]
        });
    }
    return (
        <Container>
            <Image source={require('../../assets/val-p.png')} style={{width: 300, height:120}} />
            <CustomButton onPress={handleLogoutClick}>
                <CustomButtonText >Sair</CustomButtonText>
            </CustomButton>
            <NameLogoText>Vacina Val</NameLogoText>
        </Container>
    );
}