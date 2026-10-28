import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function DevOpsPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-violet-100 via-purple-100 to-fuchsia-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">DevOps Solutions</h1>
            <p className="text-xl text-gray-600 leading-relaxed">CI/CD and automation pipelines to accelerate your software delivery.</p>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/devops/hero.jpg"
                alt="DevOps Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-100 via-violet-100/60 to-purple-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">CI/CD Pipelines</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">GitHub Actions automation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">GitLab CI/CD setup</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Jenkins and Azure DevOps</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Containerization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Docker containerization</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Kubernetes orchestration</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Container registry management</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Monitoring & Logging</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Prometheus and Grafana</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">ELK stack implementation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Application performance monitoring</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Ansible and Puppet</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Script development</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Workflow optimization</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need DevOps Automation?</h2>
            <p className="text-lg text-indigo-100 mb-8">Let's streamline your software delivery</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
