import Image from 'next/image';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <>
      <div className="bg-image-wrapper">
        <Image
          src="/images/galaxy.jpg"
          alt="Outerspace"
          quality="100"
          fill
        />
      </div>
      
      <div className='relative z-10 flex flex-col gap-5 justify-center items-center mb-10 md:mb-0 sm:pb-2 pt-global-header md:pb-8 z-10 h-screen mx-auto overflow-hidden bg-cover'>

        <h1 className="richtext text-white text-3xl sm:text-4xl md:text-6xl animate-title mb-3">
          404 | Not found
          <hr className="animate-fade-in border-white mt-6" />
        </h1>

        <div className='flex items-center justify-center mt-3 gap-2'>
          <Image src="/images/search_earth.svg" alt="Search earth" width={24  } height={24  } />
          <h1 className="richtext text-white text-3xl">lost in space</h1>
        </div>

        <Link href="/" className="animate-fade-in mt-4 rounded-md bg-violet-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
         go home
        </Link>
      
      </div>
      
      
    </>
  )
}