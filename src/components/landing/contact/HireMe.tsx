"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Loader2,
  CheckCircle2,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { toast } from "sonner";

enum POSITION_ENUM {
  FRONTEND = "frontend-developer",
  FULLSTACK = "fullstack-developer",
}

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters"),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(2000, "Message must be less than 2000 characters"),
  position: z.nativeEnum(POSITION_ENUM),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function HireMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      position: undefined,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setIsSuccess(true);
      toast.success("Message sent successfully!", {
        description: "Check your email for confirmation.",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message", {
        description:
          error.message || "Please try again or contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);
    form.reset();
  };

  const handleClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      setIsSuccess(false);
      form.reset();
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary" className="w-full">
          <HeartHandshake className="text-primary" size={40} />
          Hire Me
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border bg-card p-10">
        {isSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle className="sr-only">
                Message Sent Successfully
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping">
                  <CheckCircle2 className="h-20 w-20 text-primary opacity-20" />
                </div>
                <CheckCircle2 className="relative h-20 w-20 text-primary" />
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl font-bold text-white">
                  Message Sent Successfully! 🎉
                </h2>
                <p className="text-lg text-muted-foreground">
                  {`Thank you for reaching out! I've received your message and
                  will get back to you within`}{" "}
                  <strong className="text-primary">24 hours</strong>.
                </p>
              </div>

              <div className="w-full space-y-2 rounded-lg border bg-card-inner p-6">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-white">
                      Confirmation Email Sent
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Check your inbox at{" "}
                      <strong className="text-primary">
                        {form.getValues("email")}
                      </strong>{" "}
                      for a confirmation email.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full space-y-3 pt-4">
                <div className="flex items-center gap-1 text-left">
                  <div className="bg-primary/20 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-primary">
                    1.
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {`I'll review your message and/or project details`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-left">
                  <div className="bg-primary/20 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-primary">
                    2.
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {`I'll reach out to discuss your project requirements`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-left">
                  <div className="bg-primary/20 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-primary">
                    3.
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {`We'll schedule a call to get started`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 pt-4 sm:flex-row">
                <Button
                  onClick={handleSendAnother}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send New Message
                </Button>
                <Button onClick={handleClose} className="w-full" size="lg">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Close
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                {`Let's Work Together`}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {`Fill out the form below and I'll get back to you within 24
                hours.`}
              </p>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="flex gap-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input required placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              required
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position</FormLabel>
                        <Select
                          required
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value={POSITION_ENUM.FRONTEND}>
                              Frontend Developer
                            </SelectItem>
                            <SelectItem value={POSITION_ENUM.FULLSTACK}>
                              Full-Stack Developer
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            required
                            placeholder="Project inquiry, freelance work, etc."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            required
                            placeholder="Tell me about your project, timeline, budget, and what you're looking for..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
