import { setupServer } from "msw/node";
import { handler } from "./handleres";

export const server = setupServer(...handler);
