import {createAction} from '@reduxjs/toolkit';

const PREFIX = 'home';

export const fetchStart = createAction(`${PREFIX}/fetchStart`);
export const fetchSuccess = createAction<{
  players: any[];
}>(`${PREFIX}/fetchSuccess`);
export const fetchFail = createAction(`${PREFIX}/fetchFail`);
export const addToMyTeam = createAction<{
  players: any;
}>(`${PREFIX}/addToMyTeam`);
export const RemoveOfMyTeam = createAction<{
  players: any;
}>(`${PREFIX}/RemoveOfMyTeam`);
