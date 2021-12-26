import Head from "next/head";
import { type FunctionComponent } from "react";

const Layout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Head>
                <title>Kids tracker</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </>
    );
};

export default Layout;
