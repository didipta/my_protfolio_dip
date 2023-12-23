import Link from "next/link";
import { useEffect } from "react";



export default function Home({homedata}) {
  console.log(homedata)
 
  return (
    <div className="grid grid-cols-4">
    {
      homedata.map((data,index) => {
        return (
          <div key={index}>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          {/* <div className="w-fit bg-black overflow-hidden">
        <Link href={data?.link[0]?.url} target="_blank" rel="noopener noreferrer">
          <iframe id="frame" src={data?.link[0]?.url} width="100%" height="100%" allowFullScreen />
        </Link>
      </div> */}

          </div>
        )
      })
    }
    
   </div>
  )
}


export const getServerSideProps = async (ctx) => {


  const res = await fetch(`https://server-side-beta.vercel.app/portfolio-project`);
  const res1 = await fetch(`https://server-side-beta.vercel.app/portfolio`);
  const res2 = await fetch(`https://server-side-beta.vercel.app/portfolio-category`);
  const data = await res.json();
  const data1 = await res1.json();
  const data2 = await res2.json();
  const homedata = data.data;
  const portfoliodata = data1.data;
  const portfoliocategorydata = data2.data;

  return {
    props: {
      homedata,
      portfoliodata,
      portfoliocategorydata
    },
  };
};

