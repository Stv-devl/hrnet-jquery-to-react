import React, { Suspense, lazy } from 'react';
import { useContext } from 'react';
import { ApiContext } from '../../context/ManageApi';
import { datas } from '../../data/datas';
import Loading from '../../components/loading/Loading';
import Error from '../../components/error/Error';
import Table from '../../components/table/Table';
/*const Table = lazy(() => import('react-simple-table-component-v1'));*/

/**
 * EmployeeList component
 * Renders a table of employee data fetched from an API context. Displays a loading indicator while data is being fetched.
 * @returns {JSX.Element} - The EmployeeList component.
 */

const EmployeeList = () => {
  const { data, loading, error } = useContext(ApiContext);
  const { arrayHeader } = datas;

  const isDataValid = Array.isArray(data) && data.length > 0;

  return (
    <>
      {loading ? (
        <Loading />
      ) : error && !isDataValid ? (
        <Error />
      ) : (
        <main>
          <h1>Current Employees :</h1>
          <Suspense fallback={<Loading />}>
            <Table
              datas={data}
              arrayHeader={arrayHeader}
              fontSetting={'Roboto, sans-serif'}
            />
          </Suspense>
        </main>
      )}
    </>
  );
};
export default EmployeeList;
