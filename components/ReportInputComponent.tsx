import React, { useState } from 'react';
import { AxiosResponse } from 'axios';
import { ReportProcessingResponse } from '../models/ReportProcessingResponse';
import { callReportHistoryApi } from '../api/ReportHistoryAPI';
import { ReportInput } from '../models/RepotInput';

export default function ReportInputComponent() {
  const [res, setRes] = useState<ReportProcessingResponse>();
  const [email, setEmail] = useState<string>('');
  const [comparisonDifference, setComparisonDifference] = useState<number>(1);
  const [file, setFile] = useState<any>();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const data: ReportInput = {
        comparisonDifference: comparisonDifference,
        email: email,
        file: undefined,
      };
      const axiosResult: AxiosResponse<ReportProcessingResponse> =
        await callReportHistoryApi(data);
      setRes(axiosResult.data);
    } catch (error: any) {
      console.log('ERROR: ', error.response.data);
      setRes(error.response.data);
    }
  };

  return (
    <div>
      <form encType="multipart/form-data">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          minLength={10}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="comparisonDifference">Comparison Difference</label>
        <input
          type="number"
          id="comparisonDifference"
          name="comparisonDifference"
          onChange={(e) => setComparisonDifference(+e.target.value)}
        />
        <br />
        <label htmlFor="file">File</label>
        <input
          type="file"
          id="file"
          name="file"
          required
          onChange={(e) => setFile(e.target.value)}
        />
        <br />
        <br />
        <button onClick={submitHandler} type="submit">
          {' '}
          TEST{' '}
        </button>
        {res && (
          <p>
            RESULT: {res.reportString} {res.additionalMessage}
          </p>
        )}
      </form>
    </div>
  );
}
