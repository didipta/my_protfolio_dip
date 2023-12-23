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
  const { req } = ctx;
  const baseUrl = req ? `${req.headers['x-forwarded-proto']}://${req.headers.host}` : '';
  const apiUrl = `${baseUrl}/api/project`;

  const res = await fetch(apiUrl);
  const data = await res.json();
  const homedata = data.data;

  return {
    props: {
      homedata,
    },
  };
};

