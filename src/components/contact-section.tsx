"use client";

import React from 'react';
import { Twitter, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const { formState: { isSubmitting } } = form;

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: result.message,
      });
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-headline">Let's Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            Have a project in mind, a question, or just want to say hi? I’d love to hear from you.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Full Name" {...field} className="bg-background border-border rounded-lg px-4 py-3 h-12 text-base" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Email Address" {...field} className="bg-background border-border rounded-lg px-4 py-3 h-12 text-base" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormControl>
                      <Textarea placeholder="Tell me about your project..." {...field} className="bg-background border-border rounded-lg px-4 py-3 h-32 text-base" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="sm:col-span-2 text-center">
                <Button type="submit" disabled={isSubmitting} size="lg" className="bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all text-base h-12 px-8">
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </form>
          </Form>

          <div className="mt-16">
            <p className="text-muted-foreground mb-4">Or find me on</p>
            <div className="flex justify-center space-x-4">
              {[Twitter, Github, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all border border-border">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
