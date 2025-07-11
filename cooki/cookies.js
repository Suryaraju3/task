import cookies from 'js-cookie'

cookies.set('access_token',response.data.access); //save after login
const token = cookies.get('access_token')

