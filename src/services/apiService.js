const baseUrl = import.meta.env.VITE_BASE_URL;

export const getData = async ({ endpoint, params = null }) => {
  const urlParams = new URLSearchParams(params);
  const url = new URL(endpoint, baseUrl);
  url.search = urlParams.toString();
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const postData = async ({ endpoint, data }) => {
  const url = new URL(endpoint, baseUrl);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export const putData = async ({ endpoint, data }) => {
  const url = new URL(endpoint, baseUrl);

  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    return true;
  }
  throw new Error("Could not update data");
};

export const deleteData = async ({ endpoint }) => {
  const url = new URL(endpoint, baseUrl);
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (response.ok) {
    return true;
  }
  throw new Error("Could not delete data");
};
