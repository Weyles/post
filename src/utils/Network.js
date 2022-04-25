import axios from 'axios';
// export const SWAPI_COMMENTS = "https://jsonplaceholder.typicode.com/comments?_limit=10";

export const getApiResource = async (address) => {
    try {
      const res = await axios.get(address);
      return res;
    } catch(error) {
      console.error("Internet error", error);
    }
}

// getApiResource(SWAPI_COMMENTS)
//   .then(body => console.log(body))

// (async () => {
//   const body = await getApiResource(SWAPI_COMMENTS);
//   return body;
// })

//Это асинхронная самовызывающаяся функция!

// axios.get(address)
// await (response => {
//   if (response.data !== null && response.data !== undefined) {
//     if (response.data.length > 0) {
//       console.log(response.data);
//     }
//   }
// })
// .catch( error => {
//   console.error("Internet error", error )
// })

























// (response => {
//   if (response.data.users !== null && response.data.users !== undefined) {
//     if (response.data.users.length > 0) {
//       this.props.setUsers(response.data.users);
//     }
//   }
// })
// .catch( error => {
//   console.error("Internet error", error )
// })

// const api = [
//   {
//       postId: 1,
//       id: 1,
//       name: "id labore ex et quam laborum",
//       email: "Eliseo@gardner.biz",
//       body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },
//    {
//       postId: 1,
//       id: 2,
//       name: "quo vero reiciendis velit similique earum",
//       email: "Jayne_Kuhic@sydney.com",
//       body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//    },
//    {
//       postId: 1,
//       id: 3,
//       name: "odio adipisci rerum aut animi",
//       email: "Nikita@garfield.biz",
//       body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//    },
// ];