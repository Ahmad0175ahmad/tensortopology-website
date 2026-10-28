import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Workflow, TestTube, GitBranch, RefreshCw } from 'lucide-react';

export default function AutomationPage() {
  return (
    <div className="bg-white">
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Automation & Testing</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Workflow automation and QA solutions that improve efficiency and ensure quality.</p>
          </div>
        </div>
      </section>

      {/* Hero Banner Image */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/services/automation/hero.jpg"
                alt="Automation & Testing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-100 via-indigo-100/60 to-purple-100/60">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <Workflow className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Process Automation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Business process automation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Workflow orchestration</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Task scheduling and monitoring</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <TestTube className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Test Automation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">End-to-end testing frameworks</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Unit and integration testing</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Performance testing</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <GitBranch className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">CI/CD Pipelines</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Automated build and deployment</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">GitHub Actions, GitLab CI</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Jenkins and Azure DevOps</span></li>
                </ul>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                <RefreshCw className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Web Automation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Selenium and Playwright automation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Web scraping and data extraction</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" /><span className="text-gray-700">Browser-based workflow automation</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Automate Your Workflows?</h2>
            <p className="text-lg text-purple-100 mb-8">Let's streamline your processes</p>
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
