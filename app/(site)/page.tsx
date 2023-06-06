import Image from "next/image";
import Authform from "./components/Authform";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen justify-center sm:px-6 lg:px-8 bg-gray-100">
            {/* <p className='text-sky-500 text-3xl'>Hello Index Page</p> */}

            <div className="sm:mx-auto sm:w-full sm:max-w-md  -mt-28">
                <Image alt="logo" src="https://raw.githubusercontent.com/AntonioErdeljac/next13-messenger/master/public/images/logo.png"
                 height={48}
                 width={48}
                 className="mx-auto w-auto" />

                 <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <Authform/>
        </div>
    )
}
