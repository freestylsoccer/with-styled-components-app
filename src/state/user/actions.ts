import { createAction } from '@reduxjs/toolkit'

export const updateUserExpertMode = createAction<{ userExpertMode: boolean }>('user/updateUserExpertMode')
