import { createStore } from "redux";

import { AsyncStorage } from "react-native";

import { persistStore, persistReducer } from "redux-persist";

import videos from "./reducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blackList: ['movie']
}

const persistedReducer = persistReducer(persistConfig,  videos)

const store = createStore(persistedReducer)
const persistor = persistStore(store)
    
export { store, persistor }
  