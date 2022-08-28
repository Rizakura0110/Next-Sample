import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    const { message } = props

    return(
        <div>
            <Head>
                <title>SSG</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    静的サイト生成
                </p>
                <p>
                    { message }
                </p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString()
    const message = `${ timestamp } に getStaticProps が 実行 さ れ まし た `
    console.log(message)
    return {
        props: {
            message,
        }
    }
}

export default SSG