"use client";
import Image from 'next/image'
import React,  {useState, useRef} from 'react';
import MethodTag from '@/app/methodtag';

const listData = [
    {
      id:1,
      item1: "-Tray drape",
      item2: "-Surgical drape",
      item3: "-Skin marker",
      item4: "-Alcohol prep pad or chlorhexidine",
      item5: "-Local anesthetic plus syringe and needle",
      item6: "-Gauze",
      item7: "-Formalin",
      item8: "-Specimen bags",
      item9: "-Petrolatum or antibiotic ointment",
      item10: "-Bandage",
      item11: "-#15 blade scapel",
      item12: "-Forceps",
      item13: "-Iris scissors",
      item14: "-Skin hooks",
      item15: "-Hyfrecator and tip or electrocautory pen",
      item16: "-Sutures (dermal & intradermal)",
      item17: "-Cotton tipped applicator",
      tag: "DEEP INCISIONAL"
    },
    {
      id:2,
      item1: "-Tray drape",
      item2: "-Surgical drape",
      item3: "-Skin marker",
      item4: "-Alcohol prep pad or chlorhexidine",
      item5: "-Local anesthetic plus syringe and needle",
      item6: "-Gauze",
      item7: "-Formalin",
      item8: "-Specimen bags",
      item9: "-Petrolatum or antibiotic ointment",
      item10: "-Bandage",
      item11: "-#15 blade scapel",
      item12: "-Forceps",
      item13: "-Iris scissors",
      item14: "-Punch tools 4mm or greater",
      item15: "-Sutures or surgical foam (will need needle holder)",
      tag: "TELESCOPIC PUNCH"
    }
  ]


export default function panni() {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
  
  
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };
  
    const filteredList = listData.filter((item) =>
          item.tag.includes(tag)
      );

    return(
        <section className="bg-gradient-to-r from-green-500 via-white-500 to-blue-500">
                <div className="text-white text-center bg-[#006747] py-10 px-4">
                    <h1 className="text-3xl font-semibold mb-4">PANNICULITIS</h1>
                </div>
                <br></br>
            <ul className="grid justify-items-center lg:grid-cols-1 gap-8 md:gap-12">
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
                    <h1 className="text-2xl underline font-semibold mb-4">KEY POINTS</h1>
                        <ul className='text-xl'>
                            <li>-Deep incisional biopsy has the best yield, but risks include scarring, infection, and poor wound healing.</li>
                            <li>-Gelfoam hemostasis is helpful.</li>
                            <li>-If concern for erythema induratum, pancreatic panniculitis, infectious panniculitis, or subcutaneous panniculitis-like T-cell lymphoma, then should push for biopsy.</li>
                            <li>-Telescopic punch biopsy also can be used.</li>
                        </ul>
                </div>
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
                    <h1 className="text-2xl underline font-semibold mb-4">WHERE TO BIOPSY</h1>
                        <ul className='text-xl'>
                            <li>Depends on disease presentation; keep in mind the risks of doing the biopsy (i.e. abdomen would heal better than leg)</li>
                        </ul>
                </div>
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 my-8 w-auto py-6 px-4">
                    <h1 className="text-2xl underline font-semibold mb-4">WHAT YOU WILL NEED</h1>
                    <MethodTag
                    onClick={handleTagChange}
                    name="DEEP INCISIONAL"
                    isSelected={tag === "DEEP INCISIONAL"}
                />
      
          <MethodTag
                onClick={handleTagChange}
                name="TELESCOPIC PUNCH"
                isSelected={tag === "TELESCOPIC PUNCH"}
            />
        
      
         <ul className='text-xl pt-6'>
           {filteredList.map((item, index) => (
             <li key={item.id}>
               <h1>{item.item1}</h1>
               <h1>{item.item2}</h1>
               <h1>{item.item3}</h1>
               <h1>{item.item4}</h1>
               <h1>{item.item5}</h1>
               <h1>{item.item6}</h1>
               <h1>{item.item7}</h1>
               <h1>{item.item8}</h1>
               <h1>{item.item9}</h1>
               <h1>{item.item10}</h1>
               <h1>{item.item11}</h1>
               <h1>{item.item12}</h1>
               <h1>{item.item13}</h1>
               <h1>{item.item14}</h1>
               <h1>{item.item15}</h1>
               <h1>{item.item16}</h1>
               <h1>{item.item17}</h1>
             </li>
           )
           )}
         </ul>
                </div>
            </ul>
        </section>
    )
}