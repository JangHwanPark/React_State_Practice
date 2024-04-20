import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers';

const store = configureStore({
    reducer: rootReducer,
    // 추가적으로 미들웨어 설정이 필요하면 여기서 구성
});

export default store;