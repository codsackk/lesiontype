"use client";
import Image from 'next/image'
import React,  {useState, useRef} from 'react';
import MethodTag from '@/app/methodtag';

const listData = [
    {
      id:1,
      item1: "-Tray drape",
      item2: "-Skin marker",
      item3: "-Alcohol prep pad or chlorhexidine",
      item4: "-Local anesthetic plus syringe and needle",
      item5: "-Gauze",
      item6: "-Shave tool",
      item7: "-Aluminum chloride",
      item8: "-Cotton tipped applicator",
      item9: "-Petrolatum or antibiotic ointment",
      item10: "-Bandage",
      item11: "-Specimen bags",
      item12: "-Formalin",
      item13: "-For DIF: Saline soaked gauze and sterile urine cup or Michel medium or Zeus medium",
      tag: "SHAVE"
    },
    {
      id:2,
      item1: "-Tray drape",
      item2: "-Skin marker",
      item3: "-Alcohol prep pad or chlorhexidine",
      item4: "-Local anesthetic plus syringe and needle",
      item5: "-Gauze",
      item6: "-Punch Tool (greater than or equal to 4mm)",
      item7: "-Forceps",
      item8: "-Needle holder",
      item9: "-Iris scissors",
      item10: "-Suture (i.e. 4-0 prolene)",
      item11: "-Petrolatum or Antibiotic ointment",
      item12: "-Bandage",
      item13: "-Specimen bags",
      item14: "-For H+E: Formalin",
      item15: "-For DIF: Saline soaked gauze and sterile urine cup or Michel medium or Zeus medium",
      tag: "PUNCH"
    }
  ]



export default function porphyria() {
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
                    <h1 className="text-3xl font-semibold mb-4">PORPHYRIA</h1>
                </div>
                <br></br>
            <ul className="grid justify-items-center lg:grid-cols-1 gap-8 md:gap-12 pt-6">
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
                    <h1 className="text-2xl underline font-semibold mb-4">KEY POINTS</h1>
                        <ul className='text-xl'>
                            <li>-Porphyria is associated with hyalinization of superficial vessels and strong immunofluorescence for IgM and C3</li>
                            <li>-Diagnosis suggested clinically by scarring, milia, and hypotrichosis in photodistributed areas</li>
                        </ul>
                </div>
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
                    <h1 className="text-2xl underline font-semibold mb-4">WHERE TO BIOPSY</h1>
                        <ul className='text-xl'>
                            <li>For DIF: 
                                <ul>
                                    <li>-Nonbullous lesional or perilesional (within 1cm) skin</li>
                                </ul>    
                            </li>
                            <li>For H+E:
                                <ul>
                                    <li>-If small vesicles present, remove whole thing intact</li>
                                    <li>-If large bullae, can remove edge of bulla and intact skin edge together. Alternatively, a scooped shave biopsy of an intact bulla extending to the upper third of the dermis can also be done.</li>
                                </ul>
                            </li>
                        </ul>
                </div>
                <div className='text-center rounded-xl mx-8 py-6 px-4'>
            <Image
                src="/images/abg.jpg"
                width={500}
                height={500}
                alt="pic of cut"
            />
        </div>
                <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 my-8 py-6 px-4">
                    <h1 className="text-2xl underline font-semibold mb-4">WHAT YOU WILL NEED</h1>
                    <div className="text-white text-center rounded-xl w-auto p-8">
          <MethodTag
                    onClick={handleTagChange}
                    name="SHAVE"
                    isSelected={tag === "SHAVE"}
                />
      
          <MethodTag
                onClick={handleTagChange}
                name="PUNCH"
                isSelected={tag === "PUNCH"}
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
             </li>
           )
           )}
         </ul>
       </div>
        </div>
        </ul>
    </section>
    )
}