const baseURL = "http://localhost:3000";

const post = (url, data) => {
  const configurationObject = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(`${baseURL}/${url}`, configurationObject).then((res) =>
    res.json()
  );
};

const patch = (url, data) => {
  const configurationObject = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch(`${baseURL}/${url}`, configurationObject).then((res) =>
    res.json()
  );
};

const get = (url) => {
  return fetch(`${baseURL}/${url}`).then((res) => res.json());
};

const getWithToken = (url, token) => {
  return fetch(`${baseURL}/${url}`, {
    headers: {
      Authorization: token,
    },
  }).then((res) => res.json());
};

const destroy = (url) => {
  return fetch(`${baseURL}/${url}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export default { patch, post, get, getWithToken, destroy };
