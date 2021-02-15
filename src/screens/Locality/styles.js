import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #FFFFFF;

`;

export const Scroller = styled.ScrollView`
    flex:1;

`;

export const ScrollerNone = styled.View`
    flex:1;
`;

export const SwipeDot = styled.View`
    width:10px;
    height:10px;
    background-color:#FFFFFF;
    border-radius: 5px;
    margin: 3px;
`;
export const SwipeDotActive = styled.View`
    width: 10px;
    height:10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
`;
export const SwipeItem = styled.View`
    flex:1;
    background-color:#2196F3;
`;
export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;
`;

export const FakeSwiper = styled.View`
    height: 140px;
    background-color: #2196F3;
`;

export const PageBody = styled.View`
    background-color: #ffa500;
    border-top-left-radius: 50px;
    margin-top: -50px;
    flex:1;
`;
export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -30px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-left:30px;
    margin-right: 20px;
    border-width:4px;
    border-color: #FFFFFF;
`;

export const UserInfoName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserInfo = styled.View`
    flex:1;
    justify-content: flex-end;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left:0;
    top:0;
    z-index:9;
`;


export const ServiceArea = styled.View`
   flex:1;
   justify-content: space-between;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const InfoBody = styled.View`
    flex:1;
    padding: 30px;
`;
export const InfoTitle = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color: #2196F3;
    margin-bottom: 12px;
`;
export const InfoContent = styled.Text`
    font-size: 17px;
    flex-direction: row;
`;

export const InfoTb = styled.Text`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 2px;
`;
export const InfoT = styled.Text`
    font-size: 15px;
    margin-bottom: 2px;
`;

export const ServiceChooseButton = styled.TouchableOpacity`
    background-color: #2196F3;
    border-radius: 10px;
    padding: 10px 15px;
    justify-content: center;
    align-items: center;
    margin-left:25px;
    margin-right: 25px;
    margin-bottom: 30px;
    
    
`;
export const ServiceChooseBtnText = styled.Text`
    font-size: 18px;
    font-weight: bold;
   
    color: #FFFFFF;
`;