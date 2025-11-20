import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  description: z.string().min(10, "Description must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <div className="bg-contact-card rounded-3xl shadow-2xl shadow-contact-shadow/20 p-8 md:p-10 backdrop-blur-sm border border-white/50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-foreground">Send us a message</h2>
        <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-semibold">First Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John" 
                      {...field} 
                      className="h-12 bg-contact-accent-light/30 border-contact-accent/20 focus:border-contact-accent focus:ring-contact-accent/20 rounded-xl transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-semibold">Last Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Doe" 
                      {...field}
                      className="h-12 bg-contact-accent-light/30 border-contact-accent/20 focus:border-contact-accent focus:ring-contact-accent/20 rounded-xl transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      {...field}
                      className="h-12 bg-contact-accent-light/30 border-contact-accent/20 focus:border-contact-accent focus:ring-contact-accent/20 rounded-xl transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-semibold">Phone</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      {...field}
                      className="h-12 bg-contact-accent-light/30 border-contact-accent/20 focus:border-contact-accent focus:ring-contact-accent/20 rounded-xl transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground font-semibold">Tell us about your project</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="I'd like to discuss..."
                    className="min-h-[180px] bg-contact-accent-light/30 border-contact-accent/20 focus:border-contact-accent focus:ring-contact-accent/20 rounded-xl transition-all resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            size="lg" 
            className="w-full h-14 bg-gradient-to-r from-contact-accent to-purple-600 hover:from-contact-accent/90 hover:to-purple-600/90 text-white font-semibold rounded-xl shadow-lg shadow-contact-accent/30 transition-all hover:shadow-xl hover:shadow-contact-accent/40 hover:-translate-y-0.5"
          >
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
