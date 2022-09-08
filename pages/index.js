import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
    const [str, setStr] = useState('{}');

    function createCookieStandHandler(event) {
        event.preventDefault();
        stringifyContent(event.target.location.value, parseInt(event.target.min.value), parseInt(event.target.max.value), parseInt(event.target.avg.value));
        event.target.reset();
    }

    function stringifyContent(location, min, max, avg){
        setStr(JSON.stringify({location, min, max, avg}))
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header />
            <Main onSubmit={createCookieStandHandler} stringified = {str} />
            <Footer />
        </div>
    );
}

function Header() {
    return (
    <header className='p-4 text-4xl font-semibold bg-emerald-500'>
        <h1>Cookie Stand Admin</h1>
    </header>
    );
}

function Main(props) {
    return (
        <main className='flex flex-col items-center p-8 space-y-8 bg-emerald-100'>
            <CookieStandForm onSubmit={props.onSubmit}/>
            <ReportTable />
            <TableDataJSON stringified={props.stringified} />
        </main>
    );
}

function Footer() {
    return (
        <footer className='p-4 text-lg font-semibold text-gray-700 bg-emerald-500'>
            <p>&copy;2022</p>
        </footer>
    );
}

function CookieStandForm(props) {
    return (
        <form onSubmit={props.onSubmit} className='w-3/5 p-4 space-y-5 font-semibold text-center rounded-lg bg-emerald-300'>
            <legend className='text-2xl'>Create Cookie Stand</legend>
            <div className='text-center'>
                <label className='flex w-full'> Location
                    <input name='location' type='text' placeholder='Enter location name here...' className='w-full ml-2'></input>
                </label>
            </div>
            <div className='flex flex-auto space-x-5'>
                <label className='flex flex-col w-full'> Minimum Customers per Hour
                    <input name='min' type='text' placeholder='0'></input>
                </label>
                <label className='flex flex-col w-full'> Maximum Customers per Hour
                    <input name='max' type='text' placeholder='0'></input>
                </label>
                <label className='flex flex-col w-full'> Average Cookies per Sale
                    <input name='avg' type='text' placeholder='0'></input>
                </label>
                <button type='submit' className='py-4 px-23 bg-emerald-500'>Create</button>
            </div>
        </form>
    );
}

function ReportTable() {
    return <p>Report Table Coming Soon...</p>
}

function TableDataJSON(props) {
    return <p>{props.stringified}</p>
}
