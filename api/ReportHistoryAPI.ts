import axios, { AxiosResponse } from 'axios';
import { ReportProcessingResponse } from '../models/ReportProcessingResponse';
import { ReportInput } from '../models/RepotInput';

export const callReportHistoryApi = async (data: any): Promise<any> => {
  // return axios({
  //   url: `${process.env.NEXT_PUBLIC_marketReportGeneratorBaseLink?.concat(
  //     `report/history`,
  //   )}`,
  //   data: data,
  //   method: 'post',
  //   headers: {
  //     'content-type': 'multipart/form-data',
  //   },
  // });

  const requestOptions = {
    method: 'POST',
    body: data,
    redirect: 'follow',
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_marketReportGeneratorBaseLink?.concat(
      `report/history`,
    )}`,
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};
