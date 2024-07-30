import { rest } from "msw";

export const handler = [
  rest.get("https://jsonplaceholder.typicode.com/todos", (res, req, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "ricky",
        },
        {
          title: "ricky",
        },
        {
          title: "ricky",
        },
        {
          title: "ricky",
        },
      ])
    );
  }),
];
