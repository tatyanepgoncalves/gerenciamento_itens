import { z } from "zod/v4"

const NUMBER_USERNAME = 4
const NUMBER_PASSWORD = 8
const NUMBER_EMAIL = 1
const NUMBER_CONFIRM_PASSWORD = 1

// Inferir o tipo do TypeScript a partir do schema Zod
export type LoginFormData = z.infer<typeof loginSchema>;

export const loginSchema = z.object({
  email: z.string().min(NUMBER_EMAIL, 'O e-mail é obrigatório.').email('O email deve ser um endereço de e-mail válido.'),
  password: z.string().min(NUMBER_PASSWORD, 'A senha deve ter no mínimo 8 caracteres.')
})

export const signupSchema = z
  .object({
    username: z.string().min(2, { message: "O nome é obrigatório." }),
    email: z
      .string()
      .min(1, { message: "O e-mail é obrigatório." })
      .email("Insira um e-mail válido."),
    password: z
      .string()
      .min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
    confirmPassword: z.string().min(1, { message: "Confirmação de senha é obrigatória." }),
  })
  // Validação de Senhas Iguais (Refinamento)
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"], // Define onde o erro será exibido
  });

export type SignupFormData = z.infer<typeof signupSchema>;