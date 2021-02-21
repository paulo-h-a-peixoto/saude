import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
    Container,
    HeaderArea,
    HeaderTitle,
    Scroller,
    LoadingIcon,
    ListArea,
    EmptyWarning
} from './styles';

import AppointmentItem from '../../components/AppointmentItem';
import Api from '../../Api';

export default () => {

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    useEffect(()=>{
       
    }, []);

    

    const getAppointments = async () => {
        setLoading(true);
        setList([]);

        let res = await Api.getAppointments();
        
        if(res.error == '') {
            setList(res.list);
        } else {
            alert("Erro: "+res.error);
        }

        setLoading(false);
    }

    useFocusEffect(
        React.useCallback(() => {
            getAppointments();
            
        }, [])
    );

    return (
        <Container>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Meus Agendamentos</HeaderTitle>
                </HeaderArea>
            
                <Scroller refreshControl={
                <RefreshControl refreshing={loading} onRefresh={getAppointments} />
            }>

                {!loading && list.length === 0 &&
                    <EmptyWarning>Não há agendamentos.</EmptyWarning>
                }

                <ListArea>
                    {list.map((item, k)=>(
                        <AppointmentItem key={k} data={item} onPressDelete={()=>{getAppointments()}} />
                    ))}
                </ListArea>
            </Scroller>

        </Container>
    );
}