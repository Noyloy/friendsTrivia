import { getCurrentUser } from '../auth';
import { getUserInfo } from './getUserInfo';

export const getCurrentUserInfo = async () => {
    const currentUser = getCurrentUser();
    return !currentUser ? null : await getUserInfo(currentUser.id);
}