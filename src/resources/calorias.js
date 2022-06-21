import client from './config';

const caloriasRoute = '/calorias';

const CaloriasClient = {
  async createCalorias(data) {
    try {
      const response = await client.post(`${caloriasRoute}/create`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },

  async listCalorias(data) {
    try {
      const response = await client.patch(`${caloriasRoute}/list`, data);
      return response;
    } catch (err) {
      const resp = {};
      resp.error = err;
      return resp;
    }
  },
};

export default CaloriasClient;