import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 40px;
    flex-direction: row;
    padding-left: 3px;
    align-items: center;
    border-bottom-color: #ccc;
    border-bottom-width: 3px;

`;

const Input = styled.TextInput`
    flex:1;
    font-size: 15px;
    color: #2196F3;
    margin-left:10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password, keyboardType}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#2196F3"/>
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#2196F3"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                keyboardType={keyboardType}
            />
        </InputArea>
    );
}