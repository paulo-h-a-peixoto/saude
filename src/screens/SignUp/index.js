import React, {useState, useEffect, useContext} from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { mask } from 'remask';
import AsyncStorage from '@react-native-community/async-storage';
import CheckBox from '@react-native-community/checkbox';
import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    CheckBoxes,
    CheckBoxText
} from './styled';

import SignInput from '../../components/SignInput';
import UserIcon from '../../assets/person.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();
    const [nameField, setNameField] = useState('');
    const [cpfField, setCpfField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [cepField, setCepField] = useState('');
    const [enderecoField, SetEnderecoField] = useState('');
    const [dateField, setDateField] = useState('');
    const [tell, setTell] = useState('');
    const [isSelected, setIsSelected] = useState(false);

    useEffect(()=>{
        if(dateField.length == 3){
            setDateField(dateField.substring(0, 2)+'/'+dateField.substring(2,3));
           
        }else if(dateField.length == 6){
            setDateField(dateField.substring(0, 5)+'/'+dateField.substring(5,6));
        }else if(dateField.length >=11){
            setDateField(dateField.substring(0, dateField.length - 1));
        }
    }, [dateField]);

    useEffect(()=>{
        if(passwordField.length >=7){
            setPasswordField(passwordField.substring(0, passwordField.length - 1));
           
        } 
    }, [passwordField]);

    useEffect(()=>{
        if(cepField.length >=9){
            setCepField(cepField.substring(0, cepField.length - 1));
           
        } 
    }, [cepField]);

    const handleSignClick = async () => {
        if(nameField != '' && cpfField != '' && passwordField != '' && cepField != '' && enderecoField != '' && dateField != '' && tell != ''){
            let profissional = '';
            if(isSelected){
                profissional = '1';
            }else{
                profissional = '0';
            }
            let res = await Api.signUp(nameField, cpfField, passwordField, cepField, enderecoField, dateField, tell, profissional);
            
            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            }else{
                print(res.error);
            }
        }else{
            alert('Preencha todos os campos!');
        }
    }   

    const handleMessageButtonClick = () => {
        navigation.navigate('SignIn');
    }

   

    return (
        <Container>
            <Image source={require('../../assets/val-p.png')} style={{width: 300, height:120}} />
            <InputArea>
                <SignInput 
                    IconSvg={UserIcon}
                    placeholder="Digite seu nome completo"
                    value={nameField}
                    onChangeText={t=>setNameField(t)}
                    keyboardType="default"
                />
                <SignInput 
                    IconSvg={UserIcon}
                    placeholder="Digite seu cpf"
                    value={cpfField}
                    onChangeText={t=>setCpfField(mask(t, ['999.999.999-99']))}
                    keyboardType="numeric"
                />
                <SignInput 
                    IconSvg={UserIcon}
                    placeholder="Digite seu telefone com DDD"
                    value={tell}
                    onChangeText={t=>setTell(t)}
                    keyboardType="numeric"
                />
                <SignInput 
                    IconSvg={UserIcon}
                    placeholder="Digite sua data de nascimento"
                    value={dateField}
                    onChangeText={t=>setDateField(t)}
                    keyboardType="numeric"
                />

                <CheckBoxes>
                    <CheckBox
                        disabled={false}
                        value={isSelected}
                        tintColors={{ true: '#2196F3' }}
                        onValueChange={() => setIsSelected(!isSelected)}
                    />
                    <CheckBoxText>Profissional da Saúde ?</CheckBoxText>
                </CheckBoxes>

                <SignInput 
                    IconSvg={UserIcon}
                    placeholder="Digite seu cep"
                    value={cepField}
                    onChangeText={t=>setCepField(t)}
                    keyboardType="numeric"
                />

                <SignInput 
                    IconSvg={UserIcon}
                    placeholder="Digite seu endereço"
                    value={enderecoField}
                    onChangeText={t=>SetEnderecoField(t)}
                    keyboardType="default"
                />
                
                <SignInput 
                    IconSvg={LockIcon}
                    placeholder="Digite uma senha de 6 digitos"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                    keyboardType="numeric"
                />
                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
                </SignMessageButton>
               
            </InputArea>
            
        </Container>
    );
}