import "@testing-library/jest-dom";

import dotenv from "dotenv";
import { getEnv } from "~/env.server";
import { installGlobals } from "@remix-run/node";

installGlobals();

dotenv.config();

global.ENV = getEnv();
