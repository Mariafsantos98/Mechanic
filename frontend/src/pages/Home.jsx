import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Wrench, Settings, Gauge, Shield, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';
import { mockData } from '../data/mock';

const Home = () => {
  const [language, setLanguage] = useState('pt');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const content = mockData[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    console.log('Form submitted:', formData);
    toast.success(content.form.successMessage);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900">Mecânico do Bairro</h1>
              <div className="flex items-center gap-1 text-sm">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span className="font-semibold text-zinc-700">4.9</span>
                <span className="text-zinc-500">(123)</span>
              </div>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-zinc-700 hover:text-amber-600 transition-colors">{content.nav.about}</a>
            <a href="#services" className="text-zinc-700 hover:text-amber-600 transition-colors">{content.nav.services}</a>
            <a href="#reviews" className="text-zinc-700 hover:text-amber-600 transition-colors">{content.nav.reviews}</a>
            <a href="#contact" className="text-zinc-700 hover:text-amber-600 transition-colors">{content.nav.contact}</a>
            <Button 
              variant="outline" 
              size="sm"
              onClick={toggleLanguage}
              className="border-zinc-300"
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </Button>
          </nav>

          <Button 
            className="md:hidden"
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-zinc-50 opacity-60"></div>
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              {content.hero.badge}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 leading-tight">
              {content.hero.title}
            </h2>
            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg"
              >
                {content.hero.cta}
              </Button>
              <a href="tel:+351218026896">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-zinc-300 hover:border-amber-500 px-8 py-6 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {content.hero.callButton}
                </Button>
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="border-zinc-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{content.info.hours.title}</h3>
                  <p className="text-zinc-600 text-sm">{content.info.hours.value}</p>
                </CardContent>
              </Card>

              <Card className="border-zinc-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{content.info.location.title}</h3>
                  <p className="text-zinc-600 text-sm">{content.info.location.value}</p>
                </CardContent>
              </Card>

              <Card className="border-zinc-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-zinc-900 mb-2">{content.info.experience.title}</h3>
                  <p className="text-zinc-600 text-sm">{content.info.experience.value}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-zinc-900 mb-4">{content.about.title}</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-zinc-700 leading-relaxed mb-6">
                  {content.about.description1}
                </p>
                <p className="text-lg text-zinc-700 leading-relaxed">
                  {content.about.description2}
                </p>
              </div>
              <div className="space-y-4">
                {content.about.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-zinc-50 rounded-lg">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-900 mb-1">{feature.title}</h4>
                      <p className="text-zinc-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-zinc-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">{content.services.title}</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">{content.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.services.list.map((service, index) => (
              <Card key={index} className="border-zinc-200 hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 mb-3">{service.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">{content.reviews.title}</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-2xl font-bold text-zinc-900">4.9</span>
              <span className="text-zinc-600">(123 {content.reviews.reviewsCount})</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {content.reviews.list.map((review, index) => (
              <Card key={index} className="border-zinc-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-zinc-700 leading-relaxed mb-6 italic">"{review.text}"</p>
                  <div className="border-t border-zinc-200 pt-4">
                    <p className="font-semibold text-zinc-900">{review.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">{content.contact.title}</h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
              <p className="text-lg text-zinc-400">{content.contact.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{content.contact.phone.label}</h3>
                    <a href="tel:+351218026896" className="text-zinc-300 hover:text-amber-500 transition-colors">
                      +351 21 802 6896
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{content.contact.email.label}</h3>
                    <a href="mailto:mecanicodobairro@hotmail.com" className="text-zinc-300 hover:text-amber-500 transition-colors">
                      mecanicodobairro@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{content.contact.address.label}</h3>
                    <p className="text-zinc-300">R. Damasceno Monteiro 106A</p>
                    <p className="text-zinc-300">Lisboa, Portugal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{content.contact.hours.label}</h3>
                    <p className="text-zinc-300">{content.contact.hours.value}</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-zinc-700 bg-zinc-800">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{content.form.title}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder={content.form.name}
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder={content.form.email}
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder={content.form.phone}
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder={content.form.message}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6 text-lg"
                    >
                      {content.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-lg">Mecânico do Bairro</span>
          </div>
          <p className="text-sm mb-2">© 2024 Mecânico do Bairro. {content.footer.rights}</p>
          <p className="text-sm">{content.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
