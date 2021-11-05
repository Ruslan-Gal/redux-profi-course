import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../models/IUser';
// slices - некая обертка над reducers,
// добавляющая доп.функционал и упрощающая работу
interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    }
  }
});

export default userSlice.reducer;
