import { createReducer } from '@reduxjs/toolkit'

import { updateUserExpertMode } from './actions'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  userExpertMode: boolean
  timestamp: number
}

export const initialState: UserState = {
  userExpertMode: false,
  timestamp: currentTimestamp(),
}

export default createReducer(initialState, (builder) =>
  builder.addCase(updateUserExpertMode, (state, action) => {
    state.userExpertMode = action.payload.userExpertMode
    state.timestamp = currentTimestamp()
  })
)
