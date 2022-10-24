const Api = {
  getWithAuthToken: async (endPoint, key) => {
    let result = await fetch(endPoint, {
      method: "GET",

      headers: {
        Authorization: "Bearer " + key,

        "Content-Type": "application/json",
      },
    });
    // if (result.statusCode!==200){
    //     console.log(await result.text());
    // }
    let jsonResult = await result.json();

    return {
      data: jsonResult,

      statusCode: result.status,
    };
  },
};

export default Api;
