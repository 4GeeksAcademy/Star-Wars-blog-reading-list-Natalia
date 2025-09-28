export const getAllCharactersReq = async () => {
  try {
    const response = await fetch(
      "https://starwars-databank-server.vercel.app/api/v1/characters",
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Oh No! There was a problem in getAllCharactersReq:\n", error);
    return [];
  }
};

export const getAllCreaturesReq = async () => {
  try {
    const response = await fetch(
      "https://starwars-databank-server.vercel.app/api/v1/creatures",
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Oh No! There was a problem in getAllCreaturesReq:\n", error);
    return [];
  }
};

export const getAllDroidsReq = async () => {
  try {
    const response = await fetch(
      "https://starwars-databank-server.vercel.app/api/v1/droids",
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.data;
    } else {
      return [];
    }
  } catch (error) {
    console.log("Oh No! There was a problem in getAllDroidsReq:\n", error);
    return [];
  }
};

export const getSpecieReq = async (specie, id) => {
  try {
    const response = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/${specie}/${id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Oh No! There was a problem in getSpecieReq:\n", error);
    return null;
  }
};
