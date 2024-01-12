import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore } from "redux";
const reduxStore = () => {
    const store = createStore(rootReducer)// middle ware thực hiện việc bất đồng bộ giữa react và redux 
    const persistor = persistStore(store)
    return { store, persistor }
}

export default reduxStore