"use client";

import axios from "axios";
import { useState } from "react";
export const dynamic = "force-dynamic";
const MyEmails = () => {
  const [click, setClick] = useState("Get email quantity");
  const getEmails = async () => {
    try {
      setClick('🔅Loading...')
      const data = await axios.get("/api/emails",{ headers:{'Cache-Control': 'no-store'} });
      const emails = data.data.data;
      setClick(`Total emails: ${emails.length}`);
    } catch (error) {
      setClick('Error Occured!')
      console.log(error);
    }
  };

  return (
    <button
      onClick={getEmails}
      className=" border rounded-md text-white font-poppins text-4xl p-4 max-sm:text-2xl hover:bg-white hover:text-[#030712]"
    >
      {click}
    </button>
  );
};
export default MyEmails;
