import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignInFormProps = z.infer<typeof SignInFormSchema>;
