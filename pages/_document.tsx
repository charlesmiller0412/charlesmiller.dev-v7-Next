import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Adobe fonts */}
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/yop8rxg.css"
                ></link>
                {/* <!-- FAVICON --> */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
                <link rel="canonical" href="https://charlesmiller.dev" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
