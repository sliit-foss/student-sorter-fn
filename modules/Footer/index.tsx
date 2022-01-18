import { HeartIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='border-t'>
            <div className="px-5 py-3 flex flex-col items-center" >
                <p className='flex flex-row items-center'>
                    Made with&nbsp;
                    <HeartIcon className='fill-red-700 h-5' />&nbsp;
                    from&nbsp;
                    <Link href="https://sliitfoss.org/" ><a className='text-violet-700'>SLIIT FOSS</a></Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;