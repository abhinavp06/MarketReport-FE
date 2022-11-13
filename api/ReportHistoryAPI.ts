import axios, { AxiosResponse } from 'axios'
import { ReportProcessingResponse } from '../models/ReportProcessingResponse'

export const callReportHistoryApi = async (): Promise<AxiosResponse<ReportProcessingResponse>> => {
    return axios({
      url: `${process.env.NEXT_PUBLIC_marketReportGeneratorBaseLink?.concat(`report/history`)}`,
      method: 'post'
    })
}