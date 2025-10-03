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

export const getAllLocationsReq = async () => {
  try {
    const response = await fetch(
      "https://starwars-databank-server.vercel.app/api/v1/locations",
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
    console.log("Oh No! There was a problem in getAllLocationsReq:\n", error);
    return [];
  }
};

export const getAllOrganizationsReq = async () => {
  try {
    const response = await fetch(
      "https://starwars-databank-server.vercel.app/api/v1/organizations",
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
    console.log("Oh No! There was a problem in getAllOrganizationsReq:\n", error);
    return [];
  }
};

export const getAllSpeciesReq = async () => {
  try {
    const response = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/species`
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.data; 
    } else {
      return null;
    }
  } catch (error) {
    console.log("Oh No! There was a problem in getAllSpecieReq:\n", error);
    return null;
  }
};

export const getAllVehiclesReq = async () => {
  try {
    const response = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/vehicles`
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.data; 
    } else {
      return null;
    }
  } catch (error) {
    console.log("Oh No! There was a problem in getAllVehiclesReq:\n", error);
    return null;
  }
};

export const getAllDetailsReq = async (type, id) => {
  try {
    const response = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/${type}/${id}`
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson; 
    } else {
      return null;
    }
  } catch (error) {
    console.log("Oh No! There was a problem in getAllDetailsReq:\n", error);
    return null;
  }
};