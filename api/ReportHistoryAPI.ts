import axios, { AxiosResponse } from 'axios';
import { ReportProcessingResponse } from '../models/ReportProcessingResponse';
import { ReportInput } from '../models/RepotInput';

export const callReportHistoryApi = async (
  data: ReportInput,
): Promise<AxiosResponse<ReportProcessingResponse>> => {
  return axios({
    url: `${process.env.NEXT_PUBLIC_marketReportGeneratorBaseLink?.concat(
      `report/history`,
    )}`,
    data: data,
    method: 'post',
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};
