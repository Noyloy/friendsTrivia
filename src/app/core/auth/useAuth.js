import {useState, useEffect } from 'react';
import {getCurrentUser} from './getCurrentUser';
import {getCurrentUserInfo} from '../user/getCurrentUserInfo';
import {addAuthListener} from './addAuthListener';

export const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(()=>{
        const user = getCurrentUser();
        const isLoading = !user;
        return {isLoading, user};
    });

    useEffect(() => {
        const unsubscribe = addAuthListener(async (user) => {
            setAuthInfo({isLoading: false, user: await getCurrentUserInfo()}); 
        });
        
        return unsubscribe;
    }, []);

    return authInfo;
}