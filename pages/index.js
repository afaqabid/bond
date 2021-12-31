import { useContext } from "react";
import { UserContext } from "../context";

const Home = () => {
  const [state, setState] = useContext(UserContext);
  return (
    // <div className="container">
    //   <div className="row">
    //     <div className="col">
    //       <h1
    //         class="fs-1"
    //         className=" display-4  text-center bg-default-image "
    //         class="text-center"
    //       >
    //         Bond. Social Network
    //         <p>Home Page</p>
    //       </h1>

    <div className="container-fluid ">
      <div className="row py-5  text-light bg-default-image3 ">
        <div className="col text-center">
          <h1>BOND. MAKING PEOPLE CONNECT </h1>
          {JSON.stringify(state)}
          {/* <img src="/images/default2.jpg" alt="image" /> */}
        </div>
      </div>
      {/* <img src="/images/default4.jpg" alt="image" class="imgM" /> */}
    </div>

    //       {/* <img src="/images/default2.jpg" alt="image" />
    //     </div>
    //   </div>
    // </div> */}
  );
};

export default Home;
