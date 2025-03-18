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
      tag: "SHAVE"
    },
    {
      id:2,
      item1: "-Tray drape",
      item2: "-Skin marker",
      item3: "-Alcohol prep pad or chlorhexidine",
      item4: "-Local anesthetic plus syringe and needle",
      item5: "-Gauze",
      item6: "-Punch tool",
      item7: "-Forceps",
      item8: "-Needle holder",
      item9: "-Iris scissors",
      item10: "-Suture (i.e. 4-0 prolene)",
      item11: "-Petrolatum or Antibiotic ointment",
      item12: "-Bandage",
      item13: "-Specimen bags",
      tag: "PUNCH"
    }
  ]

  export default function epi(){
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
            <h1 className="text-3xl font-semibold mb-4">EPIDERMOLYSIS BULLOSA</h1>
        </div>
        <ul className="grid justify-items-center lg:grid-cols-1 gap-8 md:gap-12 pt-6">
        <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
            <h1 className="text-2xl font-semibold underline mb-4">KEY POINTS</h1>
                <ul className='text-xl'>
                    <li>-Avoid blisters greater than 12 hours old, use of topical anesthetics and palms and soles.</li>
                    <li>-If needed, can induce a fresh blister on uninvolved skin, near a site where the patient typically blisters.</li>
                    <li>-To induce blister, apply firm downward pressure with a cotton swab and exert traction by twisting 180 degrees in each direction until you get erythema.</li>
                    <li>-After erythema appears, wait at least 5 minutes until the biopsy.</li>
                </ul>
        </div>
        <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
            <h1 className="text-2xl underline font-semibold mb-4">WHERE TO BIOPSY</h1>
                <ul className='text-xl'>
                    <li>-Saucerized removal of intact bulla if possible, or broad saucerization of periphery of bulla.</li>
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