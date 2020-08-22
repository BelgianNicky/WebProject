import http from "../http-common";

class ProduitDataService {
  getAll() {
    return http.get("/produit");
  }

  getProduitsFromType(id) {
    return http.get(`/produit?typeId=${id}`);
  }

  get(id) {
    return http.get(`/produit/${id}`);
  }

  create() {
    return http.get("/produit");
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

export default new ProduitDataService();
