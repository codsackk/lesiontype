export default function infect(){
    return(
        <section className="bg-gradient-to-r from-green-500 via-white-500 to-blue-500">
            <div className="text-white text-center bg-[#006747] py-10 px-4">
                <h1 className="text-3xl font-semibold mb-4">INFECTIOUS</h1>
            </div>
            <ul className="grid justify-items-center lg:grid-cols-1 gap-8 md:gap-12 pt-6">
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4 mt-5">
                    <h1 className="text-2xl underline font-semibold mb-4">KEY POINTS</h1>
                        <ul className="text-xl">
                            <li>-Have a low threshold to biopsy any lesion, infectious-looking or not, in an immunocompromised patient.</li>
                            <li>-The culture specimen should be diced rather than ground when attempting to isolate fungal and acid fast bacillus organisms.</li>
                            <li>-If dividing a specimen for tissue culture, use a punch tool greater than 6mm.</li>
                            <li>-Prep using alcohol and allow it to evaporate.</li>
                        </ul>
                </div>
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
                    <h1 className="text-2xl underline font-semibold mb-4">WHERE TO BIOPSY</h1>
                        <ul className="text-xl">
                            <li>The edge of a necrotic focus has best yield</li>
                        </ul>
                </div>
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mb-8 mx-8 w-auto py-6 px-4">
                    <h1 className="text-2xl underline font-semibold mb-4">WHAT YOU WILL NEED</h1>
                        <ul className="text-xl">
                            <li>-Tray drape</li>
                            <li>-Skin marker</li>
                            <li>-Alcohol prep pad</li>
                            <li>-Local anesthetic (+ syringe and needle)</li>
                            <li>-Gauze</li>
                            <li>-Punch tool (6mm or greater)</li>
                            <li>-Forceps</li>
                            <li>-#15 blade scalpel</li>
                            <li>-Sterile tongue depressor</li>
                            <li>-Surgical foam</li>
                            <li>-Formalin for H+E</li>
                            <li>-Normal saline soaked sterile gauze in sterile urine cup</li>
                            <li>-Petrolatum or antibiotic ointment</li>
                            <li>-Bandage</li>
                        </ul>
                </div>
            </ul>
        </section>
    )
}