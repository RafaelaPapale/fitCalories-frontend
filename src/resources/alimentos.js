import client from './config';

const foodRoute = '/food';

const FoodClient = {
  async createFood(data) {
    try {
      const response = await client.post(`${foodRoute}/create`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },

  async updateFood(data) {
    try {
      const response = await client.put(`${foodRoute}/update`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },

  async listFood(data) {
    try {
      const response = await client.patch(`${foodRoute}/list`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },

  async deleteFood(data) {
    try {
      const response = await client.post(`${foodRoute}/delete`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },
};

export default FoodClient;