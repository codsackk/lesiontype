import Link from "next/link"

export default function Bullous() {

    return(
    <section className="h-screen bg-gradient-to-r from-green-500 via-white-500 to-blue-500">
         <div className="text-white text-center bg-[#006747] py-10 px-4">
          <h1 className="text-3xl font-semibold mb-4">BULLOUS DISEASES</h1>
        </div>
        <br></br>
        
        <ul className="grid justify-items-center lg:grid-cols-1 gap-8 md:gap-12 pt-6">
        <Link href="/bullous/auto">
        <div className="text-white text-center rounded-xl bg-[#006747] w-80 py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">
                Autoimmune
            </h5>
        </div>
        </Link>
        <Link href="/bullous/epi">
         <div className="text-white text-center rounded-xl bg-[#006747] w-80 py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">
              Epidermolysis Bullosa
            </h5>
        </div>
        </Link>
        </ul>
    </section>
    );
}