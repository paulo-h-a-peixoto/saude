import React from 'react';
import { Button, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Container, CustomButton, CustomButtonText } from './styles';
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
            <CustomButton onPress={handleLogoutClick}>
                <CustomButtonText >Sair</CustomButtonText>
            </CustomButton>
          
        </Container>
    );
}