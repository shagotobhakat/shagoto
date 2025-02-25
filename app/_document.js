import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=REM:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.css"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
