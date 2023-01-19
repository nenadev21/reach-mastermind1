//implement call to api using axios
// I'll call this function from the app component later
// base URL can be imported from a different file as well as other variables

import axios from 'axios';
import { api_URL } from './config';

const editTxtToArr = (txt) => txt.trim().replace(/\n/g, '').split('');

export const getRandomNumber = async (num = 4) => {
  try {
    const response = await axios.get(api_URL + `&num=${num}`);
    return editTxtToArr(response.data);
  } catch (error) {
    console.error(error);
  }
};
