// RTK API
import { postApi } from '@/features/post/postService';

const rtkReducer = {
  [postApi.reducerPath]: postApi.reducer,
};

export const apiMiddlewares = [].concat(postApi.middleware);

export default rtkReducer;
