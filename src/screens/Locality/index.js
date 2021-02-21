import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import { 
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    ServiceArea,
    SwipeDot,
    SwipeDotActive,
    SwipeItem,
    SwipeImage,
    UserAvatar,
    UserInfo,
    UserInfoName,
    BackButton,
    LoadingIcon,
    InfoBody,
    InfoContent,
    InfoTitle,
    InfoT,
    InfoTb,
    ServiceChooseBtnText,
    ServiceChooseButton,
    ScrollerNone

} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import BackIcon from '../../assets/back.svg';
import Api from '../../Api';
import LocalityModal from '../../components/LocalityModal';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        address: route.params.address
    });
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=>{
        const getLocalityInfo = async () => {
            setLoading(true);
            let json = await Api.getLocality(userInfo.id);
            if(json.error == ''){
                
                setUserInfo(json.data);
            }else{
                alert(json.error);
            }
            setLoading(false);
        }
        getLocalityInfo();
    }, []);

    const handleBackButton = () => {
        navigation.goBack();
    }

    const handleServiceChoose = () => {
        setShowModal(true);
    }
    return (
        <Container>
            <ScrollerNone>
                {userInfo.photos && userInfo.photos.length > 0 ?
                    <Swiper
                        style={{height: 240}}
                        dot={<SwipeDot />}
                        activeDot={<SwipeDotActive />}
                        paginationStyle={{top:15, right: 15, bottom: null, left: null}}
                        autoplay={true}
                    >
                        {userInfo.photos.map((item, key)=>(
                            <SwipeItem key={key}>
                                <SwipeImage source={{uri:item.url}} resizeMode="cover"/>
                            </SwipeItem>
                        ))}
                    </Swiper>
                    :
                    <FakeSwiper>

                    </FakeSwiper>
                }
                <PageBody>
                    <UserInfoArea>
                        <UserAvatar source={{uri:userInfo.avatar}} />
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                        </UserInfo>
                    </UserInfoArea>
                    <ServiceArea>
                        {loading && 
                            <LoadingIcon size="large" color="#2196F3" />
                        }
                        <InfoBody>
                            <InfoTitle>Informações</InfoTitle>
                          
                                
                                <InfoTb> Endereço: <InfoT>{userInfo.address}</InfoT></InfoTb>
                           
                        
                        
                            
                        </InfoBody>
                        <ServiceChooseButton onPress={handleServiceChoose}>
                            <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                        </ServiceChooseButton>
                    </ServiceArea>
                </PageBody>
            </ScrollerNone>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill="#FFFFFF" />
            </BackButton>

            <LocalityModal 
                show={showModal}
                setShow={setShowModal}
                user={userInfo}
                
            />
        </Container>
    );
}