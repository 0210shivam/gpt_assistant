import React, { useState } from 'react';
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from '../setups/firebase';
import { openai } from '../setups/openai';
import Header from '../components/header';

export default function Chat() {

   const [data, setData] = useState("");
   const [res, setRes] = useState("");
   const [keywords, setKeywords] = useState("");
   const [Qus, setQus] = useState('');

   async function callApi(e) {

      e.preventDefault();
      const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: `${data}`,
         max_tokens: 200,
         temperature: 0,
      });
      setRes(response.data.choices[0].text);
      setDataToFirebase(response.data.choices[0].text);
      setData("");
   }


   const setDataToFirebase = async (res) => {
      try {
         const docRef = await addDoc(collection(db, "users"), {
            question: data,
            answer: res,
         });
         getDataFromFirebase(docRef.id);
      } catch (e) {
         console.error("Error adding document: ", e);
      }
   }


   const getDataFromFirebase = async (resid) => {
      try {
         const docRef = doc(db, "users", `${resid}`);
         const docSnap = await getDoc(docRef);
         setQus(docSnap.data().question);
         _callApi(docSnap.data().answer);

      } catch (e) {
         console.error("Error getting document: ", e);
      }
   }

   const _callApi = async (params) => {
      const keyword_response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: `Extract keywords from ${params}`,
         max_tokens: 200,
         temperature: 0,
      });
      setKeywords(keyword_response.data.choices[0].text);
   }
   return (
      <>
         <Header />
         <div id='maindiv' className='flex'>

            <div id='leftdiv' className='w-72 border-r border-solid h-full'>
               <div className='border border-solid h-[85vh]'>

                  {keywords}

               </div>

            </div>

            <div id='rightdiv'>

               <div id='TopBar' className='relative top-0 flex'>
                  <div className='p-6 w-16 border border-solid'>
                     1
                  </div>
                  <div className='p-6 border border-solid w-48 md:w-96'>
                     Chat Title
                  </div>
               </div>

               <div className='border border-solid rounded-xl p-2 mb-3 mt-3 ml-2 mr-2 break-words w-[80vw]'>

                  {`Question : ${Qus}`}

               </div>


               <div className='border border-solid rounded-xl p-2 mb-3 mt-3 ml-2 break-words w-[80vw]'>

                  {`Answer : ${res}`}

               </div>

               <div className='border border-solid rounded-xl p-2 ml-2 break-words w-[80vw]'>

                  {`Keywords : ${keywords}`}

               </div>

               <div id='BottomBar' className='absolute bottom-0 border flex gap-6 p-4'>

                  <div id="EnhancedChat" className='p-3 border border-solid rounded-lg'>
                     Enhanced
                  </div>

                  <textarea rows='2' value={data}
                     onChange={(e) => setData(e.target.value)} placeholder='Ask Something' id='InputChat' className='p-3 w-20 md:w-[820px] border border-solid'>

                  </textarea>

                  <button onClick={callApi} id='SubmitChat' className='p-2 border border-solid rounded-lg'>
                     Submit
                  </button>

               </div>
            </div>
         </div>
      </>
   )
}


// ?
// TODO : Design the overflow

// TODO : resize input ui , can use flex-1 flex-3 etc.. or strech properties or gird properties...