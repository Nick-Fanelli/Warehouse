import { useRouteError } from "react-router-dom";

const InvalidRoutePage = () => {

    const error = useRouteError();

    console.error(error);

    return (
        <>
            <h1>Appears you found an invalid route</h1>
        </>
    )

}

export default InvalidRoutePage;