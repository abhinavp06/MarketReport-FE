import React, { useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { ReportProcessingResponse } from '../models/ReportProcessingResponse';
import { callReportHistoryApi } from '../api/ReportHistoryAPI';

export default function MainInputComponent() {
  const [res,setRes] = useState<ReportProcessingResponse>();

  const submitHandler = async () => {
    try {
    const axiosResult: AxiosResponse<ReportProcessingResponse> = await callReportHistoryApi();
      setRes(axiosResult.data)
    } catch (error: any) {
      setRes(error.response.data)
    }
  }

  return (
    <div>
      <button onClick={submitHandler}> TEST </button>
      {res && <p>RESULT: {res.reportString} {res.additionalMessage}</p>}
    </div>

  )
}