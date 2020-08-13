import http from "../http-common";

class PanierDataService {
  getAll() {
    return http.get("/panier");
  }

  get(id) {
    return http.get(`/panier/${id}`);
  }

  /*create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
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

export default new PanierDataService();