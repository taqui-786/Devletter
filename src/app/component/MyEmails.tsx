"use client";

import axios from "axios";
import { useEffect, useState } from "react";
const MyEmails = () => {
  const [emails, setEmails] = useState<any>([]);
  const getEmails = async () => {
    const data = await axios.get("/api/emails");
    console.log(data.data.data);
    setEmails(data.data.data);
  };
  useEffect(() => {
    getEmails();
  }, []);
  return (
    <h1 className=" border rounded-md text-white font-poppins text-4xl p-4 max-sm:text-2xl">
      Total Emails = {emails.length}
    </h1>
  );
};
export default MyEmails;
