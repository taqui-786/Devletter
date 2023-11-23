import { z} from 'zod'


export const EmailSchema = z.object({
    email: z.string().nonempty('Email is required').email("invalid E-mail")
})