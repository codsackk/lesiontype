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
      item12: "-For H+E, Formalin",
      item13: "-For DIF, saline soaked gauze (if can deliver in less than 48 hours) or Michel or Zeus medium",
      tag: "SHAVE"
    },
    {
      id:2,
      item1: "-Tray drape",
      item2: "-Skin marker",
      item3: "-Alcohol prep pad or chlorhexidine",
      item4: "-Local anesthetic plus syringe and needle",
      item5: "-Gauze",
      item6: "-Punch tool at least 4mm",
      item7: "-Forceps",
      item8: "-Needle holder",
      item9: "-Iris scissors",
      item10: "-Suture (i.e. 4-0 prolene)",
      item11: "-Petrolatum or Antibiotic ointment",
      item12: "-Bandage",
      item13: "-Specimen bags",
      item14: "-For H+E, Formalin",
      item15: "-For DIF, saline soaked gauze (if can deliver in less than 48 hours) or Michel or Zeus medium",
      tag: "PUNCH"
    }
  ]

export default function vascul(){
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
                <h1 className="text-3xl font-semibold mb-4">VASCULITIS</h1>
            </div>
                <br></br>
            <ul className="grid justify-items-center lg:grid-cols-1 gap-8 md:gap-12">
            <div className="text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
                <h1 className="text-2xl underline font-semibold mb-4">KEY POINTS</h1>
                <ul className='text-xl'>
                    <li>-Try to catch the post-capillary venule and deep plexus, especially for septic, rheumatoid, and ANCA-associated vasculitides.</li>
                    <li>-DIF for IgA vasculitis usually stays positive in older lesions.</li>
                    <li>-Fully evolved lesions are more likely to have all diagnostic features of LCV.</li>
                </ul>
            </div>
            <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
                <h1 className="text-2xl underline font-semibold mb-4">WHERE TO BIOPSY</h1>
                <ul className='text-xl'>
                    <li>-For DIF, a new lesion less than 24-hours-old will give best yield.</li>
                    <li>-For H+E, go to a well-developed pupuric lesion between 24 hrs and 1 week old, ideally ~ 72 hrs old.</li>
                    <li>-Go for the center of the purpuric lesion.</li>
                    <li>-If there is livedo racemosa, go for the pale center of the erythematous ring.</li>
                    <li>-If there is an ulcer present, go for its trailing edge.</li>
                </ul>
            </div>
            <div className='text-center rounded-xl mx-8 py-6 px-4'>
            <Image
                src="/images/vascul.jpg"
                width={500}
                height={500}
                alt="pic of cut"
            />
        </div>
        <div className="text-white text-center rounded-xl bg-[#006747] mx-8 my-8 w-auto py-6 px-4">
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
    );
}