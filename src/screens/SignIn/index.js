import React, {useState, useEffect, useContext} from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';

import { mask } from 'remask';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    Information,
    InformationText,
    Slogan
} from './styled';

import SignInput from '../../components/SignInput';
import UserIcon from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';
import Info from '../../assets/info.svg';

import Api from '../../Api';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [cpfField, setCpfField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const handleInfoButton = () => {
        navigation.navigate('Informativo');
    }
    const handleSignClick = async () => {
        
        if(cpfField != '' && passwordField != '') {
            let json = await Api.signIn(cpfField, passwordField);
            if(json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

            } else {
                alert(json.error);
            }
        } else {    
            alert('Preencha os campos!');
        }
    }

    useEffect(()=>{
        if(passwordField.length >=7){
            setPasswordField(passwordField.substring(0, passwordField.length - 1));
           
        } 
    }, [passwordField]);

    const handleMessageButtonClick = () => {
        navigation.navigate('SignUp')
    }

    return (
        <Container>
            <Image source={require('../../assets/val-p.png')} style={{width: 300, height:120}} />
            <Slogan>Secretaria de Saúde</Slogan>
            <InputArea>
                <SignInput 
                    IconSvg={UserIcon}
                    placeholder="Digite seu CPF"
                    value={cpfField}
                    onChangeText={t=>setCpfField(mask(t, ['999.999.999-99']))}
                    keyboardType="numeric"
                />
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite sua SENHA"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                    keyboardType="numeric"
                />
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Entrar</CustomButtonText>
                </CustomButton>
                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                </SignMessageButton>

            </InputArea>
            <Information onPress={handleInfoButton}>
                <Info width="40" height="40"/>
                <InformationText>Cronograma de vacinação para população idosa por faixa etária.</InformationText>
            </Information>
            
        </Container>
    );
}