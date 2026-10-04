const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type Profile = {
  email: string;
  fullName: string;
  phoneNumber: string | null;
  dateOfBirth: string | null; // "YYYY-MM-DD"};
};

export type UpdateProfile = {
  phoneNumber: string | null;
  dateOfBirth: string | null;
};

export type UpdatePassword = {
  currentPassword: string;
  newPassword: string;
};

export async function getProfile(): Promise<Profile> {
  const response = await fetch(`${API_URL}/api/Profile/GetUser`, {
    credentials: "include",
  });
  if (!response.ok) throw new Error("Could not load profile");
  return response.json();
}

export async function updateProfile(data: UpdateProfile) {
  const response = await fetch(`${API_URL}/api/Profile/UpdateProfile`, {
    credentials: "include", // Browser, include cookies when making this request
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Update failed");
  }
  return response.json();
}

export async function changePassword(data: UpdatePassword) {
  const response = await fetch(`${API_URL}/api/Profile/ChangePassword`, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Change password failed");
  }
  return response.json();
}
