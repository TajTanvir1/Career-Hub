import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="mx-auto">
         <h2>Oooppppss!!!!</h2>
         <button className="btn"><Link to="/">Go back to Home</Link></button>
      </div>
   );
};

export default ErrorPage;