import api from "./client";

const endpoint = "/clinicsolo";

export const getClinics = () => api.get(endpoint);

export const getClinic = (id) => api.get(`${endpoint}/${id}`);

export const postClinic = (data) => api.post(endpoint, data);

export const updateClinic = (id, data) => api.patch(`${endpoint}/${id}`, data);

export const deleteClinic = (id) => api.delete(`${endpoint}/${id}`);

const addClinic = (data) => api.post(endpoint, data);

const saveClinic = (data) => {
  const formData = new FormData();
  const body = { ...data };
  const image = "" + body?.imageSrc;
  if (!image.startsWith("data:image")) {
    delete body.imageSrc;
    formData.append("imageSrc", {
      name: "avatar_" + new Date(),
      type: "image/jpeg",
      uri: data.imageSrc,
    });
  }

  //update
  if (data._id) {
    delete body._id;
    for (let key in body) {
      formData.append(key, body[key]);
    }
    return updateClinic(data._id, formData);
  }

  for (let key in body) {
    formData.append(key, body[key]);
  }
  return addClinic(formData);
};

export default {
  addClinic,
  saveClinic,
};
