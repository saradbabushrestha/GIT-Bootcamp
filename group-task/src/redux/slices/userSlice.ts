import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/users/users';

const initialState: User = {
  id: '',
  username: '',
  email: '',
  password: '',
  rePassword: '',
  rememberMe: false,
  acceptTerm: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    updateField(state: { [key: string]: string | boolean }, action) {
        const { name, value } = action.payload;
        state[name] = value;
      },

    resetForm() {
      return initialState; 
      },
    
    toggleCheckbox(state, action: PayloadAction<'rememberMe' | 'acceptTerm'>) {
      const name = action.payload;
      state[name] = !state[name]; 
    },

    saveUserData(state, action) {
      const { id, username, email } = action.payload;
      state.id = id;
      state.username = username;
      state.email = email;
    },
  },
});

export const { updateField, resetForm, toggleCheckbox, saveUserData } = userSlice.actions;

export default userSlice.reducer;
