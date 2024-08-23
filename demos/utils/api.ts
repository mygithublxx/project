const api = {
  host: "",
  mockHost: "http://192.168.221.31:4000/mock/41",
  demo: {
    prefix: "/api/docusaurus",
    index: {
      post: "/page",
      mock: true,
    },
    alternatives: {
      post: "/alternatives",
      mock: true,
    },
    create: {
      post: "/",
      mock: true,
    },
    update: {
      put: "/{id}",
      mock: true,
    },
    delete: {
      delete: "/",
      mock: true,
    },
    tree: {
      get: "/tree",
      mock: true,
    },
  },
};

export default api;
