import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #ffa500;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    background-color: #ffa500;
    padding:10px;
    width: 95%;
    margin-top:80px;
    border-radius:5px;
    padding-left: 40px;
    padding-right: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    background-color: #2196F3;
    margin-top:15px;
    padding-top:13px;
    padding-bottom:13px;
    
`;
export const CustomButtonText = styled.Text`

    color:#FFFFFF;
    font-size:15px;
`;

export const SignMessageButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top:20px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    
`;
export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
`;

/**
 * 
 * InputArea,
    SignInput,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 */