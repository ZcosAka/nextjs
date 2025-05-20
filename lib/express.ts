// lib/express-wrapper.ts
import { NextApiRequest, NextApiResponse } from "next";
import { IncomingMessage, ServerResponse } from "http";
import type { Express } from "express";

export function createRequestHandler(app: Express) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    // Express expects Node.js req/res, Next.js provides compatible versions
    app(req as unknown as IncomingMessage, res as unknown as ServerResponse);
  };
}
