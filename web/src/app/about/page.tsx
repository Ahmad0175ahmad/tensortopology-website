import { Code, Network, Server, Cloud, Users, Target, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const expertise = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'AI & Automation',
      description: 'Building intelligent systems with machine learning and advanced automation',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Networking',
      description: 'Designing and implementing secure, scalable network infrastructures',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'IT Infrastructure',
      description: 'Complete infrastructure setup, management, and optimization',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud & DevOps',
      description: 'Modern cloud solutions and automated deployment pipelines',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Client-Focused',
      description: 'Your success is our priority. We tailor solutions to your specific needs.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality First',
      description: 'We deliver excellence in every project, no compromises.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Innovation Driven',
      description: 'Staying ahead with the latest technologies and best practices.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaborative',
      description: 'We work closely with you throughout the entire journey.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About TensorTopology
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              We are a dedicated team of technology experts specializing in AI & Automation 
              and Network Infrastructure solutions. Our mission is to empower businesses 
              with cutting-edge technology that drives growth and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-purple-100 leading-relaxed">
                To deliver innovative, reliable, and scalable IT solutions that transform businesses 
                and create lasting value. We combine deep technical expertise with a commitment to 
                excellence, helping our clients navigate the complexities of modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '10+', label: 'Team Members', gradient: 'from-blue-500 to-cyan-500' },
              { value: '20+', label: 'Projects Delivered', gradient: 'from-purple-500 to-pink-500' },
              { value: '1+', label: 'Years Experience', gradient: 'from-orange-500 to-red-500' },
              { value: '100%', label: 'Client Satisfaction', gradient: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss how we can help transform your business with our expertise.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
