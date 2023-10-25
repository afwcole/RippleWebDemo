import axios from 'axios';
import { PostPayload, ResponsePayload } from '@/types/types';

const apiUrl: string= process.env.API_BASE_URL || 'http://localhost:8000/incoming-ussd-request/';

if (!apiUrl) {
  console.error('Environment variable is not defined or empty.');
} else {
  console.log('API_BASE_URL:', apiUrl);
}

export const post = async (data: PostPayload) => {
  console.log(apiUrl)
  return axios.post<ResponsePayload>(apiUrl, data, {
    headers: {
      'Content-Type': 'application/json',
      'sim': 'true',
    }
  })
};