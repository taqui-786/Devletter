'use server'

import {z} from 'zod'
import { Resend } from 'resend'
import { EmailSchema } from './EmailValidator'
import { ThankyouEmail } from '@/app/component/EmailTemplates'
// import { EmailFormInput } from '@/app/component/InputForm'


type input = z.infer<typeof EmailSchema>


export async function addEntry(data: input){
const result = EmailSchema.safeParse(data)
if(result.success){
  return {success: true, data: result.data }
}
if(result.error){
  
  return {success: false, error: result.error.format() }
}
}


type emailFormInput = z.infer<typeof EmailSchema>

const resend = new Resend(process.env.RESEND_API_KEY)
 export async function SendEmail (data: emailFormInput){
  const result = EmailSchema.safeParse(data)
  if(result.success){
    const {email} = result.data
    try {
      const data = await resend.emails.send({
        from :"Devletter <onboarding@resend.dev>",
        to: email as string,
        subject:"Taqui from Devletter",
        react: ThankyouEmail({})

      })
      return {success:true, data}
    } catch (error) {
      return {success:false, error}
      
    }
  }
  if(result.error){
    return {success: false, error: result.error.format() }
  }

 }


