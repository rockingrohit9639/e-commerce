import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjgzODU2ZWI0NGM0ODNkMzFlY2Q5ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njg4NzMzMiwiZXhwIjoxNjQ3MTQ2NTMyfQ.IX_WbFXb_0PlaNTH3WOV-jToPjnMu7_kGrsI-c2-g3I";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
