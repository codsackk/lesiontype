import Link from "next/link";
import "./globals.css";
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
//           <div>
//             <Link href="/">{children}</Link>
//           </div>
//           <div className="text-white text-center group-hover:flex group-hover:bg-opacity-80 rounded-b-xl bg-[#181818] py-6 px-4">  
//             <Link href="/bullous">
//               <h5 className="text-xl font-semibold mb-2">Bullous Diseases</h5>
//             </Link>
//           </div>
//           <div className="text-white text-center group-hover:flex group-hover:bg-opacity-80 rounded-b-xl bg-[#181818] py-6 px-4">   
//             <Link href="/vascul">
//               <h5 className="text-xl font-semibold mb-2">Vasculitis</h5>
//             </Link>
//           </div>
//           <div className="text-white text-center group-hover:flex group-hover:bg-opacity-80 rounded-b-xl bg-[#181818] py-6 px-4">   
//             <Link href="/panni">
//               <h5 className="text-xl font-semibold mb-2">Panniculitis</h5>
//             </Link>
//       </div>
//       <div className="text-white text-center group-hover:flex group-hover:bg-opacity-80 rounded-b-xl bg-[#181818] py-6 px-4">  
//         <Link href="/infect">
//         <h5 className="text-xl font-semibold mb-2">Infectious</h5>
//         </Link>
//       </div>
//       <div className="text-white text-center group-hover:flex group-hover:bg-opacity-80 rounded-b-xl bg-[#181818] py-6 px-4">  
//         <Link href="/ctd">
//         <h5 className="text-xl font-semibold mb-2">Connective Tissue Disease</h5>
//         </Link>
//       </div>
//       <div className="text-white text-center group-hover:flex group-hover:bg-opacity-80 rounded-b-xl bg-[#181818] py-6 px-4">  
//         <Link href="/porphyria">
//         <h5 className="text-xl font-semibold mb-2">Porphyria</h5>
//         </Link>
//       </div>
//       <div className="text-white text-center group-hover:flex group-hover:bg-opacity-80 rounded-b-xl bg-[#181818] py-6 px-4">  
//         <Link href="/sjs">
//         <h5 className="text-xl font-semibold mb-2">SJS/TEN</h5>
//         </Link>
//       </div>
//       <div className="text-white text-center group-hover:flex group-hover:bg-opacity-80 rounded-b-xl bg-[#181818] py-6 px-4">  
//         <Link href="/cutaneous">
//         <h5 className="text-xl font-semibold mb-2">Cutaneous Lymphoma</h5>
//         </Link>
//       </div>
//       </ul>
//       </body>
//     </html>
  );
}
