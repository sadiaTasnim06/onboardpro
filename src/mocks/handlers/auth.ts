import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post(`${import.meta.env.VITE_API_URL}/auth/login`, async ({ request }) => {
    const body = await request.json();

    console.log("MSW received:", body);

    return HttpResponse.json({
      accessToken: "fake-access-token",
      refreshToken: "fake-refresh-token",
      user: {
        id: 1,
        name: "Sadia",
        email: "sadia@example.com",
      },
    });
  }),
];