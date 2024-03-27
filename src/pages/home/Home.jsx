import useManageApi from "../../hook/useManageApi";

const Home = () => {
  const { data, loading, error } = useManageApi();

  console.log(data, loading);

  return (
    <main>
      <div>Home page </div>
    </main>
  );
};

export default Home;
