import Head from "next/head";

interface LayoutProps {
    children: React.ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Student Sorter</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <main className="bg-slate-50 text-slate-900">
                {children}
            </main>
        </>
    )
}

export default Layout;