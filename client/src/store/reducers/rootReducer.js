import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
//redux presist giúp lưu lại các thay đổi của form nếu như có load lại trang // lưu ở local 
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";
const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}
const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'token']
}
const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer
})
export default rootReducer;