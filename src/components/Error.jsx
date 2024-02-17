import { useRouteError } from "react-router-dom";
const Error = () => {
    const customError = useRouteError();
    console.log(customError);
    return (
        <div>
            <h2>Oops! Something went wrong....</h2>
            <h2>{customError.status} : {customError.statusText}</h2>
        </div>
    );
}
export default Error;