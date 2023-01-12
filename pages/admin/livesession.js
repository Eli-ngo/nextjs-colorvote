import Head from "next/head";
import Sidebar from "../../components/Sidebar";

const LiveSession = () => {
    return (
        <>
            <Head>
                <title>Colorvote ADMIN | Créer une session</title>
            </Head>
            <SessionStyle>
                <Sidebar active="session" />
            </SessionStyle>
        </>
    );
};

export default LiveSession;
