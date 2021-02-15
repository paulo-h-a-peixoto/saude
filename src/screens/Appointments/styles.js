import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffa500;
`;


export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 0 20px;
`;



export const ListArea = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const EmptyWarning = styled.Text`
    text-align: center;
    margin-top: 30px;
    color: #FFFFFF;
    font-size: 14px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffa500;
    padding: 30px 30px 0px 30px;
    
    
`;
export const HeaderTitle = styled.Text`
    font-size:24px;
    font-weight: bold;
    color: #2196F3;
    width: 300px;

`;