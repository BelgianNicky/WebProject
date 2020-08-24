import http from "../http-common";

class PanierDataService {
  getAllProduitFromPanier(panierId) {
    return http.get(`/pani_prod/${panierId}`);
  }

  addProdToPanier(data) {
    return http.post(`/pani_prod`, data);
  }

  deleteProdFromPanier(panierId, produitId) {
    return http.delete(
      `/pani_prod?panierId=${panierId}&produitId=${produitId}`
    );
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

export default new PanierDataService();
