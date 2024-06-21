import { useContext } from "react";
import { ApiContext } from "../../context/ManageApi";
import { datas } from "../../data/datas";
import Loading from "../../components/loading/Loading";
import Table from "../../components/table/Table";
/*import Table from "react-simple-table-component-v1";*/

/**
 * EmployeeList component
 * Renders a table of employee data fetched from an API context. Displays a loading indicator while data is being fetched.
 * @returns {JSX.Element} - The EmployeeList component.
 */

const EmployeeList = () => {
  const { data, loading, error } = useContext(ApiContext);
  const { legend } = datas;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <Table
            datas={data}
            legend={legend}
            theadColor="#72d683"
            firstFieldColor="#ffffff"
            secondFieldColor="#c2fbcc"
            pagingColor="#72d683"
            checkedBtn="#5cc36c"
          />
        </main>
      )}
    </>
  );
};

export default EmployeeList;
