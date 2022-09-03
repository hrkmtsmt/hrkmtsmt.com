import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method.toLocaleLowerCase() !== 'get') {
    return response.status(405).end();
  }
  response.status(200).json({ message: 'Hello World!' });
};

export default handler;
