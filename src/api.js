const { REACT_APP_API_HOST } = process.env;

export async function loginApi({ email, password }) {
  if (!email || !password) return;
  try {
    const res = await fetch(`${REACT_APP_API_HOST}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    return;
  }
}

export async function signupApi({ name, email, password }) {
  try {
    const res = await fetch(`${REACT_APP_API_HOST}/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({ email, password, name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    return;
  }
}
