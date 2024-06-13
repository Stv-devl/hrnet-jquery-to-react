import { useContext } from "react";
import { ApiContext } from "../../context/ManageApi";
import { datas } from "../../data/datas";
import Loading from "../../components/loading/Loading";
/*import Table from "../../components/table/Table";*/
import Table from "react-simple-table-component-v1";

const EmployeeList = () => {
  const { data, loading, error } = useContext(ApiContext);
  const { legend } = datas;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main>
          <Table datas={data} legend={legend} />
        </main>
      )}
    </>
  );
};

export default EmployeeList;
