import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BaseCrudService } from '@/integrations';
import { ContactSubmissions } from '@/entities';

const AnimatedElement: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    emailAddress: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submission: ContactSubmissions = {
      _id: crypto.randomUUID(),
      customerName: formData.customerName,
      emailAddress: formData.emailAddress,
      subject: formData.subject,
      message: formData.message,
      submissionDate: new Date().toISOString()
    };

    setIsSubmitting(true);

    try {
      await BaseCrudService.create('contactsubmissions', submission);
      setSubmitSuccess(true);
      setFormData({
        customerName: '',
        emailAddress: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question or feedback? We&apos;d love to hear from you. Reach out and let&apos;s connect!
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedElement>
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        Multiple locations across New Jersey<br />
                        South Orange, Morris Plains, Old Bridge, Elmwood Park
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Call Us</h3>
                      <a 
                        href="tel:5551234567" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Email Us</h3>
                      <a 
                        href="mailto:info@omgyro.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@omgyro.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground mb-1">Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Thursday: 11am - 10pm</p>
                        <p>Friday - Saturday: 11am - 11pm</p>
                        <p>Sunday: 12pm - 9pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                    Quick Order
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Ready to order? Skip the form and place your order directly online.
                  </p>
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-accent transition-all duration-200"
                    onClick={() => window.open('https://order.omgyro.com', '_blank')}
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </AnimatedElement>

            {/* Contact Form */}
            <AnimatedElement delay={200}>
              <div className="bg-card rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-heading font-bold text-card-foreground mb-6">
                  Send Us a Message
                </h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-primary font-medium">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="customerName" className="block text-sm font-medium text-card-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="customerName"
                      name="customerName"
                      type="text"
                      required
                      value={formData.customerName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="emailAddress" className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      required
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-accent transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <AnimatedElement>
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-2 uppercase tracking-wide">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedElement>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Are all your ingredients halal?',
                answer: 'Yes! All our ingredients are 100% halal certified and prepared with integrity according to Islamic dietary guidelines.',
                delay: 0
              },
              {
                question: 'Do you offer catering services?',
                answer: 'Yes, we offer catering for events of all sizes. Contact us directly to discuss your catering needs and menu options.',
                delay: 100
              },
              {
                question: 'Can I customize my order?',
                answer: 'Absolutely! We offer various customization options for our platters. You can add or remove ingredients and choose your preferred sauce combinations.',
                delay: 200
              },
              {
                question: 'Do you have vegetarian options?',
                answer: 'Yes, we offer several vegetarian options including falafel platters and vegetable-based dishes with our signature sauces.',
                delay: 300
              }
            ].map((faq, index) => (
              <AnimatedElement key={index} delay={faq.delay}>
                <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-heading font-bold text-card-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <AnimatedElement>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience the OMG Way today with our delicious halal platters
            </p>
            <Button 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 transition-all duration-300 hover:scale-105 shadow-xl text-lg px-8 py-6"
              onClick={() => window.open('https://order.omgyro.com', '_blank')}
            >
              Order Now
            </Button>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
