"use client";
import { EmailSchema } from "@/lib/EmailValidator";
import { SendEmail } from "@/lib/SendingEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2, MailCheck } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
export type EmailFormInput = z.infer<typeof EmailSchema>;
const InputForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormInput>({
    resolver: zodResolver(EmailSchema),
  });
  const sendMail = async (val: any) => {
    const result = await SendEmail(val);
    console.log(result);
    if (result?.success === false) {
      toast.error("Email is invalid.");
    }
  };
  const processForm: SubmitHandler<EmailFormInput> = async (data) => {
    const addToDb = await axios.post("/api/subscribe", data);
    if (addToDb.status === 200) {
      sendMail(data);
      reset();
      setSubmitted(true);
    } else if (addToDb.status === 201) {
      toast.info("Member already subscribed");
      reset();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      {submitted ? (
        <div className="h-fit w-fit border border-gray-700 p-4">
          <span className="text-white text-base font-poppins font-medium gap-3 flex text-center">
            <MailCheck className="text-green-600 h-6 w-6" />
            Subscribed Devletter Successfully.
          </span>
        </div>
      ) : (
        <>
          <form
            className="flex h-auto flex-row w-full justify-center items-center gap-2"
            onSubmit={handleSubmit(processForm)}
          >
            <input
              className=" p-3 shadow-sm text-sm text-white bg-slate-900 border border-gray-700 transition-colors  min-w-[35%] font-poppins rounded-md "
              type="email"
              required
              {...register("email")}
              placeholder="Enter your e-mail address"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-3 shadow-sm  font-semibold text-sm text-white bg-slate-900 border border-gray-700 rounded-md hover:bg-slate-800 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Join us"
              )}
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default InputForm;
