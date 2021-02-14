import React, {useState, useEffect} from 'react';
import Api from '../../Api';
import { 
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    LoadingIcon,
    ListArea

} from './styles';

import LocalityItem from '../../components/LocalityItem';

export default () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLocalitys = async () => {
        setLoading(true);
        setList([]);
        let res = await Api.getLocalitys();
        
        if(res.error == '') {
            
            setList(res.list);
        } else {
            alert(res.error);
        }
        setLoading(false);

    }

    useEffect(()=>{
       getLocalitys();
       
    }, []);
    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o posto de vacinação mais próximo</HeaderTitle>
                </HeaderArea>
                {loading && 
                    <LoadingIcon size="large" color="#2196F3" />
                }
                <ListArea>
                    {list.map((item, k)=>(
                        <LocalityItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    );
}