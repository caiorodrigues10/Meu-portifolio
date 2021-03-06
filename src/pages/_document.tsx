import Document, {Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document{
    render () {
        return(
            <Html>
                <Head>
                    <link rel="shortcut icon" href="favicon.png" type="image/png"/>

                    <link rel = "preconnect" href = "https://fonts.gstatic.com"/>
                    <link href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Comfortaa:wght@500&family=Jura&family=Orbitron&family=Quantico&family=Special+Elite&display=swap "rel =" stylesheet "/>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}