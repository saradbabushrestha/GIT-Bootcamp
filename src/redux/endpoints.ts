const API_URL = import.meta.env.VITE_API_URL;

export const endpoints = {
  users: {
    getAll: () => `${API_URL}/users`,
    getById: (id: string) => `${API_URL}/users/${id}`,
    update: (id: string) => `${API_URL}/users/${id}`,
    delete: (id: string) => `${API_URL}/users/${id}`,
    create: () => `${API_URL}/users`,
  },
  feed: {
    getByUserId: (id: string) => `${API_URL}/users/${id}/feed`,
    addPost: (id: string) => `${API_URL}/users/${id}/feed/posts`,
  },
};
