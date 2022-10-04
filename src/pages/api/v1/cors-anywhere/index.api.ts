import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { AxiosRequestConfig } from 'axios';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { endpoint } = request.query;

  try {
    if (!endpoint || typeof endpoint !== 'string') {
      const errorResponse = {
        error: 'Missing endpoint parameter!'
      };
      response.status(400).json(errorResponse);
      return;
    }
    const config: AxiosRequestConfig = {
      url: endpoint,
      method: 'get',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    };
    const endpointRequest = await axios(config);
    const endpointResponse = await endpointRequest.data;
    response.status(200).json(endpointResponse);
  } catch (error: unknown) {
    if (error instanceof Error) {
      const errorResponse = {
        error: 'Something went wrong...',
        message: error.message
      };
      response.status(500).json(errorResponse);
    }
  }
};

export default handler;
