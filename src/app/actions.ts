'use server';

import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function submitContactForm(values: z.infer<typeof contactSchema>) {
  // Server-side validation
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    // This case might happen if client-side validation is bypassed.
    return {
      success: false,
      message: 'Invalid form data. Please check your entries.',
    };
  }
  
  // Simulate sending an email or saving to a DB
  console.log('Form submitted successfully:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  return {
    success: true,
    message: "Your message has been sent. I'll get back to you soon!",
  };
}
