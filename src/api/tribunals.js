
const API = import.meta.env.VITE_TRIBUNAL_API;

export const getTribunals = async () => {
  try {
    const res = await fetch(`${API}tribunals`, {
      method: "GET",
    });

    const content = (await res.json()).data;

    return content;
  } catch (err) {
    console.log({ err });

    return null;
  }
};

export const getTribunal = async (id) => {
  try {
    const res = await fetch(`${API}tribunal/${id}`, {
      method: "GET",
    });

    const content = (await res.json()).data;

    return content;
  } catch (err) {
    console.log({ err });

    return null;
  }
};

export const createTribunal = async (data) => {
  try {
    const res = await fetch(`${API}tribunal`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const content = (await res.json()).data;

    return content;
  } catch (err) {
    console.log({ err });

    return null;
  }
};

export const updateTribunal = async (id, data) => {
  try {
    const res = await fetch(`${API}tribunal/${id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(data),
    });

    const content = (await res.json()).data;

    return content;
  } catch (err) {
    console.log({ err });

    return null;
  }
};
