const apiRequest = async (url, authDetails) => {
    const requestOption = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(authDetails),
    };
  
    const response = await fetch(url, requestOption);

    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
    }
  
    const data = await response.json();
  
    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
      sessionStorage.setItem("cbemail", JSON.stringify(data.user.email));
    }
  
    return data;
  };
  
  export const login = (authDetails) => {
    return apiRequest(`${process.env.REACT_APP_HOST}/login`, authDetails);
  };
  
  export const register = (authDetails) => {
    return apiRequest(`${process.env.REACT_APP_HOST}/register`, authDetails);
  };

  export const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
  }
  