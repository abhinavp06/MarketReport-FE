import React, { useEffect, useState, useRef } from 'react';
import { AxiosResponse } from 'axios';
import { ReportProcessingResponse } from '../models/ReportProcessingResponse';
import { callReportHistoryApi } from '../api/ReportHistoryAPI';

export default function ReportInputComponent() {
  const [res, setRes] = useState<ReportProcessingResponse>();
  const [email, setEmail] = useState<string>('');
  const [comparisonDifference, setComparisonDifference] = useState<string>('1');
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData: FormData = new FormData();
      formData.append('comparisonDifference', comparisonDifference);
      formData.append('email', email);
      formData.append('file', file.files[0], file.files[0].name);

      console.log('form data: ', formData);
      const axiosResult: AxiosResponse<ReportProcessingResponse> =
        await callReportHistoryApi(formData);
      setRes(axiosResult.data);
    } catch (error: any) {
      console.log('ERROR: ', error);
    } finally {
      console.log('HEREEE');
      setLoading(false);
      setEmail('');
      e.target.reset();
    }
  };
  function checkDisabled() {
    const shouldBeDisabled = email.length == 0 || !fileRef.current.value;
    setLoading(shouldBeDisabled);
  }
  useEffect(() => {
    checkDisabled();
  }, [email]);

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          minLength={10}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="comparisonDifference">Comparison Difference</label>
        <input
          type="number"
          id="comparisonDifference"
          value={comparisonDifference}
          name="comparisonDifference"
          onChange={(e) => setComparisonDifference(e.target.value)}
        />
        <br />
        <label htmlFor="file">File</label>
        <input
          type="file"
          id="file"
          name="file"
          ref={fileRef}
          onChange={() => {
            checkDisabled();
          }}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          required
        />
        <br />
        <br />
        <button type="submit" disabled={loading}>
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
