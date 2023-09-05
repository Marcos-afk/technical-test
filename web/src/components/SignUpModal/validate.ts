import { z } from 'zod';

export const SignUpFormSchema = z.object({
  email: z.string().email(),
  name: z.string().nonempty(),
  password: z.string().min(8),
  cell_phone: z.string().nonempty(),
});

export type SignUpFormProps = z.infer<typeof SignUpFormSchema>;
