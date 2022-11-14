import { ReportProcessingResponse } from '../models/ReportProcessingResponse';

export const callReportHistoryApi = async (
  data: any,
): Promise<ReportProcessingResponse> => {
  const requestOptions: any = {
    method: 'POST',
    body: data,
    redirect: 'follow',
  };

  const response: any = await fetch(
    `${process.env.NEXT_PUBLIC_marketReportGeneratorBaseLink?.concat(
      `report/history`,
    )}`,
    requestOptions,
  );

  return response.json();
};
