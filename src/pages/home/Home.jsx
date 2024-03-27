import { useContext } from "react";
import { ApiContext } from "../../hook/ManageApi";

const Home = () => {
  const { data } = useContext(ApiContext);

  console.log(data);

  return (
    <main>
      <div>Home page </div>
    </main>
  );
};

export default Home;
