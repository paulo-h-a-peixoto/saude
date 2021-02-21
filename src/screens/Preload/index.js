import React, { useEffect, useContext } from 'react';
import {Image} from 'react-native';

import { Container, LoadingIcon } from './styled';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../contexts/UserContext';

import Api from '../../Api';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);

    const navigation = useNavigation();

    

    useEffect(()=>{
       
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token) {
                let res = await Api.checkToken(token);
                if(res.token) {
                    await AsyncStorage.setItem('token', res.token);
                    
                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.data.avatar
                        }
                    });
                    
                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    });
                } else {
                    
                    navigation.reset({
                        routes: [{name: 'SignIn'}]
                    });
                }
            } else {
                navigation.reset({
                    routes: [{name: 'SignIn'}]
                });
            }

        }
        checkToken();
    }, []);
    return (
        <Container>
           <Image source={require('../../assets/val-p.png')} style={{width: 300, height:120}} />
           <LoadingIcon size="large" color="#2196F3" />
        </Container>
    );
}