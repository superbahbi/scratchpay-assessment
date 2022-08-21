import { IUserProps } from "./Iterfaces";
export async function fetchDB(
  param?: string,
  method?: string,
  data?: IUserProps
): Promise<{ status: number; message: string; data: any }> {
  const api_url = process.env.REACT_APP_API_URL;
  const response = await fetch(`${api_url}${param}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  return {
    status: response.status,
    message: res.message,
    data: res.data,
  };
}
