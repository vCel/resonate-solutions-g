const url = "https://jsonplaceholder.typicode.com";

// Grabs the JSON from the url
export const GetUsers = async () => {
  return await fetch(`${url}/users`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .catch((e) => console.log(e));
};
