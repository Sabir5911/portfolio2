
import Wrapper from "../Shared/Wrapper";
import { data, data2 } from "./Data/Data";
import Image from "next/image";
export default function Skill() {

   return <>
      <Wrapper>

         <div className="mt-28 justify-around flex" >


            {/* for left box */}
            <div >
               <h1 className="text-3xl font-bold">Technical Skills</h1>

               <div className="flex  flex-col gap-3 mt-9 font-medium text-lg">

                  {
                     data2.map((elm, id) => (
                        <div key={id} >

                           <text>{elm.Text} </text>

                           <text className='float-right'>{elm.width}</text>



                           <div className="my-2  h-2 rounded-full bg-slate-400  w-96">
                              <div className="h-2  bg-purple-500 rounded-full " style={{ width: elm.width }}></div></div>

                        </div>


                     ))
                  }


               </div>
            </div>


            {/* for right box */}
            <div >
               <h1 className="text-3xl font-bold">Technical Skills</h1>

               <div className="flex  flex-col gap-3 mt-9 font-medium text-lg">

                  {
                     data.map((elm, id) => (
                        <div key={id} >

                           <text>{elm.Text} </text>

                           <text className='float-right'>{elm.width}</text>



                           <div className="my-2  h-2 rounded-full bg-slate-400  w-96">
                              <div className="h-2 bg-purple-500 rounded-full " style={{ width: elm.width }}></div></div>

                        </div>


                     ))
                  }


               </div>
            </div>


         </div>







      </Wrapper>

   </>

}