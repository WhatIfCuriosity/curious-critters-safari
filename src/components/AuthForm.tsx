
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/AuthContext";
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
import { createUserProfile } from "@/services/databaseService";

const authSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  username: z.string().min(3, { message: "Username must be at least 3 characters" }).optional(),
});

type AuthFormValues = z.infer<typeof authSchema>;

interface AuthFormProps {
  mode: "signIn" | "signUp";
  onSuccess?: () => void;
}

const AuthForm = ({ mode, onSuccess }: AuthFormProps) => {
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = async (values: AuthFormValues) => {
    try {
      setLoading(true);
      
      if (mode === "signIn") {
        await signIn(values.email, values.password);
      } else {
        await signUp(values.email, values.password);
        // After signing up, create a user profile with the username
        if (values.username) {
          const { data } = await supabase.auth.getUser();
          if (data?.user) {
            await createUserProfile(data.user.id, values.username);
          }
        }
      }
      
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {mode === "signUp" && (
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="safari_explorer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Processing..." : mode === "signIn" ? "Sign In" : "Create Account"}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
