"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

const categories = [
  "Fanart",
  "Original character content",
  "Animals",
  "Other",
] as const;

const contactFormSchema = z.object({
  email: z.string().email(),
  category: z.enum(categories),
  message: z.string().min(1, {
    message: "Please leave a message!",
  }),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

const Page = () => {
  return (
    <main className="mx-auto w-full max-w-xl p-8 xl:p-0">
      <h1 className="text-center text-3xl font-bold">Contact Me</h1>
      <ContactForm />
    </main>
  );
};

const ContactForm = () => {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      category: categories[categories.length - 1],
      message: "",
    },
  });

  const handleSubmit = (values: ContactFormSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="you@something.com"
                type="email"
                value={field.value}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      value={category}
                      key={category}
                      onChange={() => {}}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="message"
                value={field.value}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Page;
