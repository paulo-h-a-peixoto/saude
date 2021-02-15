import React from 'react';
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

const Area = styled.TouchableOpacity`
    margin-bottom: 20px;
    border-radius:20px;
    border:1px solid #2196F3;
    padding: 15px;
    flex-direction: row;
`;
const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
`;
const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;
const UserName = styled.Text`
    width: 200px;
    font-size: 17px;
    font-weight: bold;
`;

const SeeProfileButton = styled.View`
    background-color: #2196F3;
    width: 85px;
    height: 26px;
    border-radius: 10px;
    justify-content:center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #FFFFFF;
`;
export default ({data})=>{

    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Locality', {
            id: data.id,
            avatar: data.avatar,
            name: data.name,
            address: data.address 
        });
    }

    return (
        <Area onPress={handleClick}>
            <Avatar source={{uri: data.avatar}}/>
            <InfoArea>
                <UserName>{data.name}</UserName>
                <UserName numberOfLines={1}>{data.address}</UserName>
                <SeeProfileButton>
                    <SeeProfileButtonText>Ver Local</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    );
}