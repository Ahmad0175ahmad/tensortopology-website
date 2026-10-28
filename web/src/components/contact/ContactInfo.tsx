import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export function ContactInfo() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'tensortopology@gmail.com',
      href: 'mailto:tensortopology@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+92 307 5298122',
      href: 'tel:+923075298122',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+92 349 5710923',
      href: 'tel:+923495710923',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with us',
      href: 'https://www.linkedin.com/in/muhammad-ahmed-375b12378',
      gradient: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Contact Information
        </h2>
        <p className="text-gray-700">
          Reach out to us through any of these channels. Our team is ready to assist you with your IT needs.
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target={method.label === 'LinkedIn' ? '_blank' : undefined}
            rel={method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0`}>
              {method.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-gray-600 mb-1">{method.label}</div>
              <div className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors break-words">
                {method.value}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700 text-sm">
              Serving clients globally with expertise in AI & Automation, Networking, and IT Infrastructure
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white shadow-lg">
        <h3 className="font-bold text-lg mb-2">Business Hours</h3>
        <div className="space-y-1 text-blue-100 text-sm">
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}
