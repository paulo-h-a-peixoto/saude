import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/home.svg';
import TodayIcon from '../assets/today.svg';
import AccountIcon from '../assets/account.svg';

const TabArea= styled.View`
    height: 60px;
    background-color: #2196F3;
    color: #ffffff;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content : center;
    align-items: center;
    background-color: #FFF;
    border-radius: 35px;
    border: 3px solid #2196F3;
    margin-top: -20px;
`;


export default ({state, navigation}) => {
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index===0?1 : 0.5}} width="24" height="24" fill="#ffffff" />
            </TabItem>
            <TabItemCenter onPress={()=>goTo('Appointments')}>
                <TodayIcon style={{opacity: state.index===1?1 : 0.6}} width="32" height="32" fill="#2196F3" />
            </TabItemCenter>
            <TabItem onPress={()=>goTo('Profile')}>
                <AccountIcon style={{opacity: state.index===2?1 : 0.5}} width="24" height="24" fill="#ffffff" />
            </TabItem>
        </TabArea>
    );
}