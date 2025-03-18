import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <body className="bg-gradient-to-r from-green-500 via-white-500 to-blue-500">
        <div className="text-white text-center bg-[#006747] py-10 px-4">
          <h1 className="text-3xl font-semibold mb-4">LESION TYPES</h1>
        </div>
        <br></br>
        <ul className="grid justify-items-center lg:grid-cols-1 gap-8 md:gap-12 my-8">
        <Link href="/bullous">
          <div className="drop-shadow-2xl text-white text-center rounded-xl bg-[#006747] w-80 py-6 px-4">  
            <h5 className="text-xl font-semibold mb-2">BULLOUS DISEASES</h5>
          </div>
        </Link>
        <Link href="/vascul"> 
          <div className="text-white text-center rounded-xl bg-[#006747] w-80 py-6 px-4">   
              <h5 className="text-xl font-semibold mb-2">VASCULITIS</h5>
          </div>
        </Link>
        <Link href="/panni">
          <div className="text-white text-center rounded-xl bg-[#006747]  w-80 py-6 px-4">   
            <h5 className="text-xl font-semibold mb-2">PANNICULITIS</h5>
          </div>
       </Link>
      <Link href="/infect">
        <div className="text-white text-center rounded-xl bg-[#006747]  w-80 py-6 px-4">  
          <h5 className="text-xl font-semibold mb-2">INFECTIOUS</h5>
        </div>
      </Link>
      <Link href="/ctd">
       <div className="text-white text-center rounded-xl bg-[#006747]  w-80 py-6 px-4">  
         <h5 className="text-xl font-semibold mb-2">CONNECTIVE TISSUE DISEASE</h5> 
       </div>
       </Link>
       <Link href="/porphyria">
       <div className="text-white text-center rounded-xl bg-[#006747] w-80 py-6 px-4">
         <h5 className="text-xl font-semibold mb-2">PORPHYRIA</h5>
       </div>
       </Link>
       <Link href="/sjs">
       <div className="text-white text-center rounded-xl bg-[#006747]  w-80 py-6 px-4">  
         <h5 className="text-xl font-semibold mb-2">SJS/TEN</h5>  
      </div>
      </Link>
      <Link href="/cutaneous">
      <div className="text-white text-center rounded-xl bg-[#006747] w-80 py-6 px-4">  
         <h5 className="text-xl font-semibold mb-2">CUTANEOUS LYMPHOMA</h5>
      </div>
      </Link>
      </ul>
       </body>
    </div>
  );
}
