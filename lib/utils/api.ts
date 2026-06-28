const BASE_URL = "https://swapi.info/api";

export const fetchPeople = async () => {
  const response = await fetch(`${BASE_URL}/people`);

  if (!response.ok) {
    throw new Error("Unable to fetch people.");
  }

  return response.json();
};
