import http from "../http-common";

class CategorieDataService {
  getAll() {
    return http.get("/categorie");
  }

  get(id) {
    return http.get(`/categorie/${id}`);
  }

  create() {
    return http.get("/categorie");
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

export default new CategorieDataService();