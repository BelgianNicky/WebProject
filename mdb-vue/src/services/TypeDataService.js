import http from "../http-common";

class TypeDataService {
  getAll() {
    return http.get("/type");
  }

  get(id) {
    return http.get(`/type/${id}`);
  }

  create() {
    return http.get("/type");
  }

  /*update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }*/
}

export default new TypeDataService();