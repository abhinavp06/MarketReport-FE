export const callReportHistoryApi = async (data: any): Promise<any> => {
  const requestOptions: any = {
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
