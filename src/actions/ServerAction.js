import axios from "axios";
// const mainURL = "https://vultik.signalwire.com/api/laml/2010-04-01/Accounts";
const apiUrl = "https://vultik.signalwire.com/api/laml/2010-04-01/Accounts";
const projectId = "5c46b95f-6635-4c38-a973-e3004fb9d2ac";
const authToken = "PT570e119c94975673ab1416ca666b3c319ed82dc0a182c541";

const spaceURL = "https://vultik.signalwire.com";

// const url =
//   "https://vultik.signalwire.com/api/laml/2010-04-01/Accounts/5c46b95f-6635-4c38-a973-e3004fb9d2ac/IncomingPhoneNumbers";

export const getAuthToken = () => {
  return axios.get(apiUrl, {
    auth: {
      username: projectId,
      password: authToken,
    },
  });
};

export const getInCommingPhoneNumbers = () => {
  return axios.get(`${apiUrl}/${projectId}/IncomingPhoneNumbers`, {
    auth: {
      username: projectId,
      password: authToken,
    },
  });
};

export const getAllCalls = () => {
  return axios.get(`${apiUrl}/${projectId}/Calls?PageSize=1000`, {
    auth: {
      username: projectId,
      password: authToken,
    },
  });
};

export const getAllCallsSeparately = (url) => {
  if (url !== null)
    return axios.get(`${spaceURL}/${url}`, {
      auth: {
        username: projectId,
        password: authToken,
      },
    });
  else return;
};
