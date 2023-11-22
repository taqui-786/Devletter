"use client";
import { useState } from "react";
import axios from "axios";
import {  Loader2, MailCheck } from "lucide-react";
const InputForm = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const subscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await axios.post(`${process.env.DATABASE_URL}/api/subscribe`, { email: email });
      if(data.status === 200){
        setSubscribed(true)
      }

    } catch (error) {
      setLoading(true);
      setSubscribed(false)

      console.log(error);
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  return (
    <>
      <form
        className="flex h-auto flex-row w-full justify-center items-center gap-2"
        onSubmit={subscribe}
      >
        {subscribed? (
            <div className="h-fit w-fit border border-gray-700 p-4">
            <span className="text-white text-base font-poppins font-medium gap-3 flex text-center"><MailCheck className="text-green-600 h-6 w-6" />Subscribed Devletter Successfully.</span>
        </div>
        ):(
            <>
            <input
       className=" p-3 shadow-sm text-sm text-white bg-slate-900 border border-gray-700 transition-colors  min-w-[35%] font-poppins rounded-md "
       type="email"
       readOnly={loading}
       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
         setEmail(e.target.value);
       }}
       value={email}
       placeholder="Enter your e-mail address"
     />
     <button
       type="submit"
       className="p-3 shadow-sm  font-semibold text-sm text-white bg-slate-900 border border-gray-700 rounded-md hover:bg-slate-800"
     >
       {loading ? <Loader2 className="h-3 w-3 animate-spin" /> : "Join us"}
     </button>
         </>
        )}
        
      </form>
    </>
  );
};

export default InputForm;
