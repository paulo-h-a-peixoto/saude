import AsyncStorage from '@react-native-community/async-storage';

const BASE_API = 'https://saude.paulopeixoto.com/api';

export default {
    checkToken: async (token) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();      
        return json;
    },
    signIn: async (cpf, password) => {
        const req = await fetch(`${BASE_API}/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({cpf, password})
        });
        const json = await req.json();        
        return json;
    },
    signUp: async (name, cpf, password, zipcode, address, birthday, tell, profissional) => {
        const req = await fetch(`${BASE_API}/user`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, cpf, password, zipcode, address, birthday, tell, profissional})
        });
        const json = await req.json();        
        return json;
    },
    logout: async () => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/auth/logout`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token})
        });
        const json = await req.json();        
        return json;
    },
    getLocalitys: async () => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/localitys?token=${token}`);
        const json = await req.json();

        return json;
    },
    getLocality: async (id) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/locality/${id}?token=${token}`);
        const json = await req.json();
        return json;
    },
    setFavorite: async (barberId) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/user/favorite`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({token, barber:barberId})
        });
        const json = await req.json();        
        return json;
    },
    setAppointment: async (userId,
        selectedYear,
        selectedMonth,
        selectedDay,
        selectedHour) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/locality/${userId}/appointment`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                year: selectedYear,
                month: selectedMonth,
                day: selectedDay,
                hour: selectedHour
            })
        });
        const json = await req.json();        
        return json;
    },
    search: async (localityName) => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/search?q=${localityName}&token=${token}`);
        const json = await req.json();
        return json;
    },
    getFavorites: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/user/favorites?token=${token}`);
        const json = await req.json();
        return json;
    },
    getAppointments: async () => {
        const token = await AsyncStorage.getItem('token');
        const req = await fetch(`${BASE_API}/user/appointments?token=${token}`);
        const json = await req.json();
        return json;
    },
    deleteAppointment: async (id) => {
        const token = await AsyncStorage.getItem('token');

        const req = await fetch(`${BASE_API}/user/delappointments/${id}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token
            })
        });
        const json = await req.json();        
        return json;
    },
    updateUser: async (body) => {
        const token = await AsyncStorage.getItem('token');
        body.token = token;

        const req = await fetch(`${BASE_API}/user`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const json = await req.json();        
        return json;
    },
};