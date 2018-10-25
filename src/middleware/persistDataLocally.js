import { LOCAL_STORAGE_KEY } from '../utils/const';

export const persistDataLocally = store => next => action => {
    next(action);

    let dataStore = store.getState();

    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataStore));
    } catch (e) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataStore));
    }
}
