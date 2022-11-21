import {ApiResponse, ApiInstance} from '../../../core/api';

export interface IHomeApi {
  fetchPlayers: () => Promise<ApiResponse>;
}

const HomeApi = (api: ApiInstance): IHomeApi => {
  function fetchPlayers() {
    return api.get('/users?page=2');
  }

  return {fetchPlayers};
};

export default HomeApi;
