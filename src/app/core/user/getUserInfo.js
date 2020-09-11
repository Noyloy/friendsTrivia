import firebase from 'firebase/app';
import {environment as env} from '../../../environments/environment.prod';

export const getUserInfo = async userId => {
    const userInfoDoc = await firebase.firestore()
        .collection(env.constants.db.users)
        .doc(userId)
        .get();
    const userInfo = userInfoDoc.data();
    return !userInfo ? null : {id: userInfoDoc.id, ...userInfo };
}