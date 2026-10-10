const API_URL = process.env.NEXT_PUBLIC_API_URL; //w

export type RegisterUser = {
  // should exactly mathc the back end data
  email: string;
  password: string;
  fullName: string;
};

export type ConfirmEmailResponse = {
  message: string;
};

export type LogIn = {
  email: string;
  password: string;
};

export type AuthResponse = {
  // should exactly mathc the back end data
  email: string;
  fullName: string;
  role: string;
  expiresAt: string;
};

export async function registerUser(data: RegisterUser) {
  // will returns AuthResponse
  const response = await fetch(`${API_URL}/api/Auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Registration failed");
  }

  return response.json();
}

export async function logIn(data: LogIn): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // tell data we are sending is Json
    },
    credentials: "include", // tells the browser to include cookies when making the request
    body: JSON.stringify(data), // use the data. convert the JavaScript object into a JSON string {"email":"john@gmail.com","password":"123456"}
  });
  if (!response.ok) {
    const errorText = await response.text(); // get the response
    throw new Error(errorText || "Login failed");
  }

  return response.json();
}

// get the user info, browser can read thhe httponly which has token
export async function getMe(): Promise<AuthResponse> {
  const response = await fetch(`${API_URL}/api/auth/me`, {
    credentials: "include", // will send the request with HTTP only
  });
  if (!response.ok) throw new Error("Not logged in");
  return response.json();
}

//confirm Email
export async function confirmEmail(
  email: string,
  token: string,
): Promise<ConfirmEmailResponse> {
  const response = await fetch(
    `${API_URL}/api/auth/confirm-email?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`,
    { method: "GET" }, // get from back end the response
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Email confirmation failed");
  }
  return response.json();
}

export async function logOut(): Promise<void> {
  const response = await fetch(`${API_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Logout failed");
  }
}

export async function googleLogin(idToken: string) {
  const response = await fetch(`${API_URL}/api/auth/google`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },

    body: JSON.stringify({ idToken }), // token from GG
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Google login failed");
  }
  return response.json();
}
