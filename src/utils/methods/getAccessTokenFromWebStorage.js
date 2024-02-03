export const getAccessTokenFromWebStorage = () =>{
    const accessToken = sessionStorage.getItem('accessToken');
   return accessToken;
}

