export const isAuthenticated = (): boolean => {
    const authToken = localStorage.getItem('authToken');
    return Boolean(authToken); 
  };
  