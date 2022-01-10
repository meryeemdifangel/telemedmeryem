import api from "./client";

const endpoint = "/invoices";

export const getInvoices = () => api.get(endpoint);
export const getInvoice = (id) => api.get(endpoint + "/" + id);

const addInvoice = (invoice) => {
  const formData = new FormData();

  const body = { ...invoice };
  delete body.imageSrc;
  for (let key in body) {
    formData.append(key, body[key]);
  }
  formData.append('imageSrc', {
    name: 'avatar_' + new Date(),
    type: "image/jpeg",
    uri: invoice.imageSrc,
  });
  return api.post(endpoint, formData);
};
export default {
  getInvoices,
  getInvoice,
  addInvoice,
};
