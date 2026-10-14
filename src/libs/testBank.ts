const API_URL = process.env.NEXT_PUBLIC_API_URL;
export type Test = {
  id: number; // needed for links and React keys
  title: string;
  durationMinutes: number; // ← number, not string: the backend sends 60, not "60"
  category: "Reading" | "Listening" | "Writing" | "Speaking";
};

export async function getTest(category?: Test["category"]): Promise<Test[]> {
  const url = category
    ? `${API_URL}/api/Test/get-test?category=${category}`
    : `${API_URL}/api/Test/get-test`;

  const response = await fetch(url, {
    credentials: "include", // because whe need to send cookies to BE, it is authorized in back end
  });

  if (!response.ok) throw new Error("Could not load tests");
  return response.json();
}
