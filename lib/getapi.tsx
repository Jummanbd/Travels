const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://travels-ujt2.vercel.app/api/";
//  Dynamic path and Dynamic Type API
export async function getApi<T>(filePath: string): Promise<T> {
  const res = await fetch(`${BASE_URL}/${filePath}`, {
    cache: "force-cache",
    next: { revalidate: 60 }, // ISR every 60s
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${filePath} (status: ${res.status})`);
  }

  return res.json() as Promise<T>;
}
