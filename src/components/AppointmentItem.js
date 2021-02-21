import React from 'react';
import styled from 'styled-components/native';
import Api from '../Api';
import { useNavigation } from '@react-navigation/native';

const Area = styled.View`
    background-color: #FFFFFF;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 20px;
    border:1px solid #2196F3;
`;
const UserArea = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;
const Avatar = styled.Image`
    width: 56px;
    height: 56px;
    border-radius: 20px;
    margin-right: 20px;
`;
const UserName = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000000;
`;
const SplitArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;
const ServiceText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #000000;
`;
const DateText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: #2196F3;
`;

const ButtonArea = styled.TouchableOpacity`
   
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #ff492d;
    padding: 10px;
`;

const ButtonAreaText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
`;

export default ({data}) => {
    const navigation = useNavigation();
    let d = data.datetime.split(' ');
    
    // Tempo
    let time = d[1].substring(0,5);
    
    // Data
    let date = new Date(d[0]);
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    day++;
    
    month = month < 10 ? '0'+month : month;
    day = day < 10 ? '0'+day : day;
    let dateString = `${day}/${month}/${year}`;

    const handleCheckButton = async (id) => {
    
        let res = await Api.deleteAppointment(id);
       
        if(res.error == ''){
            
          alert('Agendamento desmarcado com sucesso!');
          navigation.reset({
            routes:[{name:'Appointments'}]
        });
          
        } else {
            alert(res.error);
        }
    }

    
    return (
        <Area>
            <UserArea>
                <Avatar source={{uri: data.locality.avatar}} />
                <UserArea>
                <UserName>{data.locality.name}</UserName>
                </UserArea>
            </UserArea>

            

            <SplitArea>
                <DateText>{dateString}</DateText>
                <DateText>{time}</DateText>
                <ButtonArea onPress={()=>handleCheckButton(data.id) }>
                    <ButtonAreaText>Desmarcar</ButtonAreaText>
                </ButtonArea>
            </SplitArea>
        </Area>
    );
}