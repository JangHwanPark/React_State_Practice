import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

// rootReducer는 애플리케이션의 모든 리듀서를 하나로 결합합니다.
// 이를 통해 Redux 스토어가 생성될 때 단일 루트 리듀서로서 작동합니다.
const rootReducer = combineReducers({
    posts: postsReducer,  // posts 상태를 관리하는 리듀서를 추가
});

export default rootReducer;