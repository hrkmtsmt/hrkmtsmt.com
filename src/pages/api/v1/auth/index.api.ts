import type { NextApiRequest, NextApiResponse } from 'next';

export const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 401;
  res.setHeader('WWW-authenticate', 'Basic realm="Secure Area"');
  res.end('Basic Auth Required');
};

export default handler;
