import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
       <h3>{error.status}</h3> 
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <Link to='/'>Back to Home</Link>
    </div>
  );
}