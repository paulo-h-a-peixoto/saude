import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #Ffb444;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputArea = styled.View`
    background-color: #Ffb444;
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

export const Information = styled.TouchableOpacity`
    background-color: #FFFFFF;
    padding:10px;
    width: 95%;
    margin-top:10px;
    border-radius:5px;
    padding-left: 20px;
    padding-right: 40px;    
    flex-direction: row;
    border:1px solid #ccc;

`;
export const InformationText = styled.Text`
    margin-left:12px;
    font-family: 'Open Sans';
`;

export const Slogan = styled.Text`
    color: #5c5c5c;
    font-weight: bold;
    font-style: italic;
    font-size: 20px;`;

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