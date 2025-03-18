"use client";
import React,  {useState, useRef} from 'react';
import Image from 'next/image'
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
    item11: "-Petrolatum or antibiotic ointment",
    item12: "-Bandage",
    item13: "-Specimen bags",
    tag: "PUNCH"
  }
]


export default function auto(){
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
            <h1 className="text-3xl font-semibold mb-4">AUTOIMMUNE BULLOUS DISEASES</h1>
        </div>
        <ul className="grid justify-items-center lg:grid-cols-1 gap-8 md:gap-12 pt-6">
            <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4 mt-5">
                <h1 className="text-2xl font-semibold underline mb-4">KEY POINTS</h1>
                    <ul className="text-xl">
                        <li>-For BP, DIF is better than IIF or ELISA in terms of sensitivity.</li>
                        <li>-Specimens for light microscopy should show an intact vesicle or bulla.</li>
                        <li>-Biopsy site can have an effect on yield.</li>
                        <li>-SSSS differential includes pemphigus foliaceous, but DIF can differentiate them.</li>
                    </ul>
            </div>
        <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mx-8 py-6 px-4">
        <h1 className="text-2xl font-semibold underline mb-4">WHERE TO BIOPSY</h1>
        <ul className='text-xl'>
            <li>For DIF: 
                <ul>
                    <li>-Non bullous lesional or perilesional (within 1cm) skin</li>
                    <li>-Take from above the waist if possible. Trunk or upper extremity is better than lower extremity (risk of false negative, delayed healing)</li>
                </ul>
            </li>
            <li>For H<span>&#38;</span>E:
                <ul>
                    <li>-If small vesicles present, remove whole thing intact.</li>
                    <li>-If large bullae, can remove edge of bulla and intact skin edge together or a scooped shave biopsy extending into reticular dermis.</li>     
                </ul>
            </li>
        </ul>
        </div>
        <div>
            <Image
                src="/images/abg.jpg"
                width={500}
                height={500}
                alt="pic of cut"
            />
        </div>
      


        <div className="shadow-2xl text-white text-center rounded-xl bg-[#006747] mb-8 mx-8 w-auto py-6 px-4">
        <h1 className="text-2xl font-semibold underline mb-4">WHAT YOU WILL NEED</h1>
      {/* highlight when clicked shave or Punch
      spacing between tags */}

      {/* general spacing between words and lines maybe use a different font */}

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