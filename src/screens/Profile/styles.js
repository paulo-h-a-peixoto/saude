import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    justify-content:center;
    align-items:center;
`;

export const CustomButton = styled.TouchableOpacity`
    justify-content:center;
    align-items:center;
    background-color: #2196F3;
    margin-top:15px;
    padding-top:13px;
    padding-bottom:13px;
    width: 70%;
    border-radius:15px;
    
`;

export const CustomButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 17px;
`;