

// const url = 'https://cataas.com/api'

// const checkResponse = (res) => {
//     if (!res.ok) {
//         return Promise.reject({...Error, statusCode: res.status})
//     }
//     return res.json()
// }


// export const getImage = () => {
//     return fetch (`${url}/cats`, {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//             .then(checkResponse)
//             .then((data) => {
//                 // console.log(data, 'dataaaa')
//                 return data
//             })
// }