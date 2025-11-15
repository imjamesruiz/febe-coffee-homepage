import { useState, FormEvent } from "react";
import { Mail, MapPin, Clock, CheckCircle2, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    phone: "",
    availability: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.name || formData.name.length < 2) newErrors.name = "Name must be at least 2 characters";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.message || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    
    if (formData.subject === "Job Application" && !formData.availability) {
      newErrors.availability = "Please provide your availability";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // TODO: Replace with actual API endpoint once Cloud is enabled
      // const response = await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      toast({
        title: "Message Sent!",
        description: "Thank you! We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        subject: "",
        name: "",
        email: "",
        phone: "",
        availability: "",
        message: "",
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email us directly at febecoffee@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isJobApplication = formData.subject === "Job Application";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl lg:text-5xl font-medium mb-4">
              Thank you so much for your support
            </h1>
            <p className="text-xl lg:text-2xl mb-2 opacity-90">We appreciate you!</p>
            <p className="text-lg opacity-80">Check out what people are saying about us!</p>
          </div>
        </section>

        {/* Two Column Layout */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left Column - Contact Info & Hiring */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8 lg:sticky lg:top-24">
                  {/* Get In Touch Section */}
                  <div className="mb-8">
                    <h2 className="font-display text-3xl font-medium text-primary mb-6">
                      Get In Touch
                    </h2>
                    
                    <div className="space-y-4">
                      <a 
                        href="mailto:febecoffee@gmail.com"
                        className="flex items-start gap-3 text-gray-600 hover:text-coral transition-colors group"
                      >
                        <Mail className="w-5 h-5 mt-0.5 shrink-0 group-hover:text-coral" />
                        <span className="text-[15px]">febecoffee@gmail.com</span>
                      </a>
                      
                      <div className="flex items-start gap-3 text-gray-600">
                        <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                        <span className="text-[15px]">
                          13955 Yale Ave, Unit A<br />
                          Irvine, CA 92620
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-3 text-gray-600">
                        <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                        <span className="text-[15px]">Mon-Sun • 8AM-8PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-secondary my-8" />

                  {/* We're Hiring Section */}
                  <div>
                    <h2 className="font-display text-3xl font-medium text-coral mb-4">
                      We're Hiring!
                    </h2>
                    
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-4">
                      What We're Looking For:
                    </p>
                    
                    <ul className="space-y-3 mb-4">
                      {[
                        "Long-term commitment",
                        "Must be 18+",
                        "Full-time or Part-time",
                        "Flexible schedules",
                        "Knowledge of Matcha and Coffee is a plus+",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                          <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <p className="text-sm font-medium text-coral mb-3">
                      Paid Training Provided
                    </p>
                    
                    <p className="text-[13px] italic text-gray-600">
                      Include your availability and resume in the form →
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-lg p-8 lg:p-10">
                  <h2 className="font-display text-4xl font-medium text-primary mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-gray-600 mb-8">
                    We'll get back to you within 24 hours
                  </p>

                  {isSuccess && (
                    <div className="mb-6 bg-accent/20 border-l-4 border-accent p-4 rounded">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <p className="text-sm text-primary">
                          Thank you! We've received your message and will get back to you soon.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Subject */}
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium text-primary mb-2 block">
                        What is this regarding? <span className="text-destructive">*</span>
                      </Label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => handleChange("subject", value)}
                      >
                        <SelectTrigger 
                          id="subject"
                          className="w-full border-secondary focus:border-accent focus:ring-accent"
                        >
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value="Job Application">Job Application</SelectItem>
                          <SelectItem value="Collaboration">Collaboration</SelectItem>
                          <SelectItem value="Feedback/Review">Feedback/Review</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <p className="text-destructive text-[13px] mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-primary mb-2 block">
                        Your Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="border-secondary focus:border-accent focus:ring-accent"
                      />
                      {errors.name && (
                        <p className="text-destructive text-[13px] mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-primary mb-2 block">
                        Your Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="border-secondary focus:border-accent focus:ring-accent"
                      />
                      {errors.email && (
                        <p className="text-destructive text-[13px] mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-primary mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="border-secondary focus:border-accent focus:ring-accent"
                      />
                    </div>

                    {/* Availability - Conditional */}
                    {isJobApplication && (
                      <div>
                        <Label htmlFor="availability" className="text-sm font-medium text-primary mb-2 block">
                          Your Availability <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="availability"
                          type="text"
                          placeholder="e.g., Weekdays 9AM-5PM, Weekends flexible"
                          value={formData.availability}
                          onChange={(e) => handleChange("availability", e.target.value)}
                          className="border-secondary focus:border-accent focus:ring-accent"
                        />
                        {errors.availability && (
                          <p className="text-destructive text-[13px] mt-1">{errors.availability}</p>
                        )}
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-primary mb-2 block">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="border-secondary focus:border-accent focus:ring-accent resize-y"
                      />
                      {errors.message && (
                        <p className="text-destructive text-[13px] mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Resume Upload - Conditional */}
                    {isJobApplication && (
                      <div>
                        <Label htmlFor="resume" className="text-sm font-medium text-primary mb-2 block">
                          Upload Resume (PDF or DOC)
                        </Label>
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="border-secondary focus:border-accent focus:ring-accent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-secondary file:text-primary file:font-medium hover:file:bg-secondary/80"
                        />
                        <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading || isSuccess}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base uppercase tracking-wide py-6 rounded-lg transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-60"
                    >
                      {isLoading ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
