import axios from 'axios';
const API_URL = 'https://uh4goxppjc7stkg24d6fdma4t40wxtly.lambda-url.eu-central-1.on.aws/transactions';
const API_KEY =
'b4a4552e-1eac-44ac-8fcc-91acca085b98-f94b74ce-aa17-48f5-83e2-8b8c30509c18';
const fetchDataFromAPI = async (): Promise<void> => {
  try {
      const response = await axios.get(API_URL, {
          headers: {
              'x-api-key': API_KEY
          }
      });
      return  response.data;
  } catch (error) {
      console.error("Error fetching data:", error);
  }
};

let transactionData:any;

const fetchDataFromAPIData = async () => {
  try {
       transactionData = await fetchDataFromAPI();
  } catch (error) {
      console.error("Error in processData:", error);
  }
};
fetchDataFromAPIData()

export {transactionData};