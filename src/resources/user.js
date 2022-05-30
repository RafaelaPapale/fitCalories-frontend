import client from './config';

const userRoute = '/user';

const UserClient = {
  async createUser(data) {
    try {
      const response = await client.post(`${userRoute}/create`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },

  async updateUser(data) {
    try {
      const response = await client.put(`${userRoute}/update`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },

  async login(data) {
    try {
      const response = await client.post(`${userRoute}/login`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },
};

export default UserClient;