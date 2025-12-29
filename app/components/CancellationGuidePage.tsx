
'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  ChevronRight,
  MessageSquare,
  X,
  User,
  Star,
  CheckCircle,
  TrendingUp,
  Clock,
} from 'lucide-react';
import servicesData from '../../servicesData.json';


type ServiceData = {
  name: string;
  category: string;
  price: string;
  difficulty: string;
  avgTime: string;
  answeredQuestions: number;
  headline: string;
  conversation: { type: string; text: string }[];
  answers: { expert?: string; specialty?: string; answeredCount?: string }[];
  relatedQuestions: string[];
};

const typedServicesData = servicesData as Record<string, ServiceData>;
const validSlugs = Object.keys(typedServicesData) as (keyof typeof typedServicesData)[];

// ──────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────
const CancellationGuidePage = ({ initialService = 'paramount-plus' }: { initialService?: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract slug from URL safely
  const slugFromUrl = pathname ? pathname.split('/').pop() ?? initialService : initialService;

  // Ensure we always have a valid slug
  const safeInitialSlug = validSlugs.includes(slugFromUrl as any)
    ? (slugFromUrl as keyof typeof typedServicesData)
    : validSlugs[0] ?? 'paramount-plus';

  const [serviceSlug, setServiceSlug] = useState<keyof typeof typedServicesData>(safeInitialSlug);

  const service = typedServicesData[serviceSlug];

  // Sync URL with selected service
  useEffect(() => {
    const currentSlugFromUrl = pathname?.split('/').pop();

    if (currentSlugFromUrl && currentSlugFromUrl !== serviceSlug) {
      if (validSlugs.includes(currentSlugFromUrl as any)) {
        setServiceSlug(currentSlugFromUrl as keyof typeof typedServicesData);
      }
    }

    if (currentSlugFromUrl !== serviceSlug) {
      router.push(`/${serviceSlug}`, { scroll: false });
    }

    document.title = `How to Cancel ${service.name} - Chargeback`;
  }, [serviceSlug, pathname, router, service.name]);

  const navigateToService = (key: string) => {
    if (validSlugs.includes(key as any)) {
      setServiceSlug(key as keyof typeof typedServicesData);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Fallback if somehow service is missing (should not happen with validation)
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-lg text-gray-600">The cancellation guide you're looking for doesn't exist.</p>
          <a href="/" className="mt-6 inline-block text-[#4F46E5] font-semibold hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Structured Data: BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Ask an Expert',
                item: 'https://yourdomain.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Ask a Computer Technician',
                item: 'https://yourdomain.com/tech-support',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Software Problems',
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm" role="banner">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center space-x-3" aria-label="Chargeback homepage">
                <div className="w-10 h-10 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg" aria-hidden="true">C</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Chargeback</h1>
                </div>
              </a>

              <nav className="flex items-center space-x-8" aria-label="Main navigation">
                <a href="/" className="text-base text-gray-700 hover:text-[#4F46E5] font-medium transition">Home</a>
                <a href="/how-it-works" className="text-base text-gray-700 hover:text-[#4F46E5] font-medium transition">How it Works</a>
                <a href="/contact" className="text-base text-gray-700 hover:text-[#4F46E5] font-medium transition">Contact us</a>
                <a
                  href="/login"
                  className="px-6 py-2.5 bg-[#4F46E5] text-white rounded-lg hover:bg-[#4338CA] font-semibold transition shadow-md"
                >
                  Login
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav className="bg-white border-b border-gray-100" aria-label="Breadcrumb">
          <ol
            className="max-w-[1400px] mx-auto px-6 py-3 flex items-center text-sm text-gray-600"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" className="text-[#4F46E5] hover:underline font-medium" itemProp="item">
                <span itemProp="name">Ask an Expert</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/tech-support" className="text-[#4F46E5] hover:underline font-medium" itemProp="item">
                <span itemProp="name">Ask a Computer Technician</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" aria-hidden="true" />
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-700 font-medium" itemProp="name">Software Problems</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <main className="max-w-[1400px] mx-auto px-6 py-8">
          {/* Service Switcher */}
          <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-6" aria-labelledby="service-switcher-heading">
            <h2 id="service-switcher-heading" className="font-bold text-gray-900 mb-4 text-lg">
              Browse More Cancellation Guides
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" role="tablist">
              {validSlugs.map((key) => (
                <button
                  key={key}
                  onClick={() => navigateToService(key)}
                  role="tab"
                  aria-selected={key === serviceSlug}
                  aria-controls={`${key}-panel`}
                  className={`flex-shrink-0 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                    key === serviceSlug
                      ? 'bg-[#4F46E5] text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
                  }`}
                >
                  {typedServicesData[key].name}
                </button>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8">
            {/* Main Content */}
            <article>
              <p className="text-base text-gray-600 font-medium mb-5">Found 1 result(s) for your search</p>

              {/* Chat-Style Conversation Card */}
              <section
                className="bg-white rounded-xl border border-gray-200 mb-8 shadow-md overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
              >
                <header className="p-8 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight" itemProp="name">
                    {service.headline}
                  </h2>
                  <button
                    className="text-[#4F46E5] hover:underline text-base font-semibold flex items-center space-x-2"
                    aria-label="View full Technician's Assistant chat"
                  >
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                    <span>Technician's Assistant chat</span>
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                </header>

                <div className="p-8" itemProp="suggestedAnswer" itemScope itemType="https://schema.org/Answer">
                  <div className="space-y-5">
                    {service.conversation.map((item, idx) => (
                      <div key={idx} className="flex space-x-4">
                        <div className="flex-shrink-0" aria-hidden="true">
                          {item.type === 'customer' ? (
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-gray-600" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                              A
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <strong className="font-bold text-gray-900 text-base block mb-2">
                            {item.type === 'customer' ? 'Customer:' : "Technician's Assistant:"}
                          </strong>
                          <p className="text-gray-700 text-base leading-relaxed" itemProp="text">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center space-x-8 mt-8 pt-8 border-t border-gray-100">
                    <button className="text-base text-gray-600 hover:text-[#4F46E5] font-medium transition">Helpful</button>
                    <button className="text-base text-gray-600 hover:text-[#4F46E5] font-medium transition">Share</button>
                    <button className="text-base text-gray-600 hover:text-[#4F46E5] font-medium transition">Flag</button>
                  </div>
                </div>
              </section>

              {/* How-To Guide */}
              <section
                className="bg-white rounded-xl border border-gray-200 mb-8 shadow-md overflow-hidden"
                itemScope
                itemType="https://schema.org/HowTo"
              >
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight" itemProp="name">
                    How to Cancel {service.name} Subscription via Roku
                  </h2>

                  <p className="text-base text-gray-600 italic mb-6 leading-relaxed" itemProp="description">
                    Users often face confusion about billing and subscription cancellation through Roku and {service.name} platforms.
                  </p>

                  <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                    <div itemProp="itemListElement" itemScope itemType="https://schema.org/HowToDirection">
                      <p className="text-base text-gray-700 leading-relaxed mb-4" itemProp="text">
                        To cancel a {service.name} subscription billed through Roku, access your Roku account online or via the Roku device. Navigate to 'Manage Subscriptions,' select {service.name}, and choose 'Cancel Subscription.' Canceling {service.name} does not cancel your Roku account itself. Roku acts as a platform for streaming services and handles billing if subscribed through it. Always verify cancellation confirmation to avoid unexpected charges. For direct subscriptions, cancel via the {service.name} website or app.
                      </p>
                    </div>
                  </div>

                  <aside className="mt-6 p-4 bg-gray-50 border-l-4 border-gray-300 rounded-r-lg">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <strong className="font-bold text-gray-700">Disclaimer:</strong> This information is AI-generated and intended for general guidance only. For advice specific to your situation, please consult a verified expert on JustAnswer before making decisions.
                    </p>
                  </aside>

                  <div className="mt-8">
                    <a
                      href="/ask-expert"
                      className="block w-full bg-gradient-to-r from-[#4F46E5] to-[#6366F1] hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg text-center"
                      aria-label="Ask an expert about cancelling your subscription"
                    >
                      Have a question? Ask now
                    </a>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-base font-bold text-gray-700 mb-3">Discover more</h3>
                    <ul className="flex flex-wrap gap-2">
                      {['Streaming media', 'TV', 'Television', 'Roku', 'streaming services'].map((tag) => (
                        <li key={tag}>
                          <a
                            href={`/tags/${tag.toLowerCase().replace(/ /g, '-')}`}
                            className="inline-flex items-center space-x-1.5 px-3 py-2 bg-white border-2 border-[#4F46E5] rounded-full text-sm text-[#4F46E5] hover:bg-indigo-50 transition-all font-medium"
                            aria-label={`View more guides about ${tag}`}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{tag}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Related Customer Questions */}
              <section className="mb-8" aria-labelledby="related-questions-heading">
                <h2 id="related-questions-heading" className="text-3xl font-bold text-gray-900 mb-6">
                  Related Customer Questions
                </h2>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  {[
                    { question: service.headline, specialty: service.answers[0]?.specialty, count: service.answers[0]?.answeredCount },
                    { question: service.relatedQuestions[0], specialty: service.answers[0]?.specialty, count: "3,245 satisfied customers" },
                    { question: service.relatedQuestions[1], specialty: "Tech Support Expert", count: "1,892 satisfied customers" },
                    { question: service.relatedQuestions[2], specialty: "Subscription Specialist", count: "2,567 satisfied customers" },
                  ].map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={`/questions/${idx + 1}`}
                        className="block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl hover:border-[#4F46E5] transition-all group"
                      >
                        <h3 className="font-bold text-gray-900 text-base mb-4 line-clamp-2 group-hover:text-[#4F46E5] transition leading-relaxed">
                          {item.question}
                        </h3>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-5 h-5 text-gray-600" aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-600 truncate mb-1">{item.specialty || 'Expert'}</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center space-x-0.5" aria-label="5-star rating">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-[#ffa500] text-[#ffa500]" aria-hidden="true" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 font-medium">{item.count}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>

                <a
                  href="/questions"
                  className="block w-full py-4 border-2 border-[#4F46E5] text-[#4F46E5] rounded-xl font-bold hover:bg-[#4F46E5] hover:text-white transition-all text-base shadow-md text-center"
                >
                  View More Questions
                </a>
              </section>

              {/* Getting Started Is Easy */}
              <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-10 mb-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Getting Started Is Easy</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ask for help, 24/7</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Members enjoy round-the-clock access to 12,000+ verified Experts, including doctors, lawyers, tech support, mechanics, vets, home repair pros, more.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Expert will respond in minutes</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      After you reach out, we match you with an Expert who specializes in your situation. Talk, text, chat, whichever you prefer.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Save time & money</h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      No scheduling hassles, missing time from work, or expensive consults. A JustAnswer membership can save you significant time and money each month.
                    </p>
                  </div>
                </div>
              </section>

              {/* Testimonials */}
              <section className="mb-8" aria-labelledby="testimonials-heading">
                <h2 id="testimonials-heading" className="text-3xl font-bold text-gray-900 mb-3">What Our Users Say</h2>
                <p className="text-xl text-gray-600 mb-8">Real stories from real customers</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <figure className="bg-white rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition">
                    <div className="flex items-center space-x-1 mb-4" aria-label="5-star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-[#ffa500] text-[#ffa500]" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
                      "Amazingly fast and knowledgeable! The expert solved all my questions and even ones I didn't know I had. Best online service I've used in 20 years."
                    </blockquote>
                    <figcaption className="flex items-center space-x-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Danny Richards"
                        className="w-12 h-12 rounded-full"
                        loading="lazy"
                        onError={(e: any) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-12 h-12 rounded-full bg-gray-200 hidden items-center justify-center">
                        <User className="w-6 h-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Danny Richards</p>
                        <p className="text-sm text-gray-600">USA</p>
                      </div>
                    </figcaption>
                  </figure>

                  <figure className="bg-white rounded-xl border border-gray-200 p-8 shadow-md hover:shadow-xl transition">
                    <div className="flex items-center space-x-1 mb-4" aria-label="5-star rating">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-[#ffa500] text-[#ffa500]" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
                      "Fast, reliable, and professional. I was able to cancel my subscription within minutes. The expert answered all my questions perfectly!"
                    </blockquote>
                    <figcaption className="flex items-center space-x-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        alt="Sarah Mitchell"
                        className="w-12 h-12 rounded-full"
                        loading="lazy"
                        onError={(e: any) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-12 h-12 rounded-full bg-gray-200 hidden items-center justify-center">
                        <User className="w-6 h-6 text-gray-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Sarah Mitchell</p>
                        <p className="text-sm text-gray-600">Canada</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>

              {/* Why Trust Chargeback */}
              <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl border border-gray-200 p-10 mb-8 shadow-xl" aria-labelledby="trust-heading">
                <h2 id="trust-heading" className="text-4xl font-bold text-gray-900 mb-4 text-center">Why Millions Trust Chargeback</h2>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                  Join over 10 million satisfied customers who trust our verified experts for quick, reliable solutions
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-8">
                    <div className="flex items-start space-x-5 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <CheckCircle className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">12,000+ Verified Experts</h3>
                        <p className="text-base text-gray-600 leading-relaxed">Multi-step quality process with license verification and peer reviews ensures you get the best help.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                        <TrendingUp className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">Save Money & Time</h3>
                        <p className="text-base text-gray-600 leading-relaxed">Get expert help for less than traditional consultations. No travel, no waiting rooms.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Clock className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">24/7 Availability</h3>
                        <p className="text-base text-gray-600 leading-relaxed">Round-the-clock access to specialists whenever you need help, day or night.</p>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&auto=format"
                      alt="Professional customer support team helping a client"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e: any) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 hidden items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                          <User className="w-12 h-12 text-[#4F46E5]" aria-hidden="true" />
                        </div>
                        <p className="text-lg font-semibold text-gray-700">Expert Support Team</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#4F46E5] mb-2">10M+</div>
                    <div className="text-base text-gray-600 font-medium">Happy Customers</div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-4xl font-bold text-[#4F46E5] mb-2">12K+</div>
                    <div className="text-base text-gray-600 font-medium">Verified Experts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#4F46E5] mb-2">24/7</div>
                    <div className="text-base text-gray-600 font-medium">Support Available</div>
                  </div>
                </div>
              </section>

              {/* Highly Rated Experts */}
              <section className="bg-white rounded-xl border border-gray-200 p-10 mb-8 shadow-md" aria-labelledby="experts-heading">
                <h2 id="experts-heading" className="text-3xl font-bold text-gray-900 mb-4">Highly Rated, Verified Experts</h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  We pride ourselves in our{' '}
                  <a href="#" className="text-[#4F46E5] hover:underline font-semibold">multi-step verification process</a>{' '}
                  including license and credential checks. Vetted by us and rated by customers, like you.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Verified expert"
                      className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                      loading="lazy"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Verified expert"
                      className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                      loading="lazy"
                    />
                    <div className="w-20 h-20 rounded-full bg-gray-400 border-4 border-white flex items-center justify-center relative shadow-lg">
                      <User className="w-10 h-10 text-gray-600" aria-hidden="true" />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
                    <span className="text-base font-semibold text-gray-700">All experts online now</span>
                  </div>
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start" aria-labelledby="sidebar-heading">
              <div id="sidebar-heading" className="sr-only">Expert Chat & Service Info</div>

              <div className="bg-white rounded-xl border border-gray-200 p-7 mb-6 shadow-lg">
                <div className="text-center mb-6">
                  <img
                    src="https://randomuser.me/api/portraits/men/85.jpg"
                    alt={`${service.answers[0]?.expert || 'Nathan'} - ${service.answers[0]?.specialty || 'Tech Support Specialist'}`}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-100"
                    loading="lazy"
                    onError={(e: any) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 border-4 border-indigo-100 hidden items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">
                    {service.answers[0]?.expert || 'Nathan'}
                  </h3>
                  <div className="flex items-center justify-center space-x-1 mb-3" aria-label="5-star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#ffa500] text-[#ffa500]" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{service.answers[0]?.specialty || 'Tech Support Specialist'}</p>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <p className="text-sm text-gray-600 font-medium mb-5">Pearl Chatbot, Technician's Assistant</p>

                  <div className="max-h-96 overflow-y-auto mb-5 pr-2 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#4F46E5] to-[#6366F1] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <User className="w-5 h-5 text-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 shadow-sm">
                        <p className="text-base text-gray-800 leading-relaxed">
                          Welcome! What's going on with your {service.name} subscription?
                        </p>
                      </div>
                    </div>
                  </div>

                  <form>
                    <label htmlFor="issue-description" className="sr-only">Describe your issue</label>
                    <textarea
                      id="issue-description"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-xl text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent placeholder-gray-400 shadow-sm"
                      rows={3}
                      placeholder="Describe your issue..."
                      aria-describedby="chat-help"
                    ></textarea>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#E4573D] to-[#D44D35] hover:from-[#D44D35] hover:to-[#C44229] text-white font-bold py-4 rounded-xl mt-4 transition shadow-lg hover:shadow-xl text-base"
                    >
                      Send Message
                    </button>
                  </form>

                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-2 bg-green-50 px-4 py-3 rounded-lg">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></span>
                      <p className="text-sm text-gray-700 font-semibold">5 Tech Support Specialists online now</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-7 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-5 text-lg">Service Information</h3>
                <dl className="space-y-4 text-base">
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <dt className="text-gray-600 font-medium">Monthly Price</dt>
                    <dd className="font-bold text-gray-900 text-lg">{service.price}</dd>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <dt className="text-gray-600 font-medium">Difficulty</dt>
                    <dd className="font-bold text-green-600">{service.difficulty}</dd>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <dt className="text-gray-600 font-medium">Avg. Time</dt>
                    <dd className="font-bold text-gray-900">{service.avgTime}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600 font-medium">Questions Answered</dt>
                    <dd className="font-bold text-gray-900">{service.answeredQuestions.toLocaleString()}</dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        </main>

        {/* Trust Badges Section */}
        <section className="bg-[#003d5c] py-12" aria-label="Supported subscription services">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg className="w-14 h-14" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#fff"/>
                  <circle cx="12" cy="12" r="5" fill="#4285f4"/>
                  <path d="M12 2a10 10 0 0 0-8.66 5h8.66l-4.33 7.5A10 10 0 0 0 12 2z" fill="#ea4335"/>
                  <path d="M20.66 7A10 10 0 0 0 12 2v10l4.33 7.5A10 10 0 0 0 20.66 7z" fill="#34a853"/>
                  <path d="M7.67 14.5L12 7H3.34a10 10 0 0 0 0 10h8.66z" fill="#fbbc04"/>
                </svg>
              </div>

              <div className="w-28 h-28 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <span className="text-[#113ccf] font-bold text-base">Disney+</span>
                </div>
              </div>

              <div className="w-28 h-28 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#1ce783] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-base">hulu</span>
                </div>
              </div>

              <div className="w-28 h-28 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#1db954] flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-label="Spotify">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
              </div>

              <div className="w-28 h-28 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#0015ff] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-base">max</span>
                </div>
              </div>

              <div className="w-28 h-28 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#107c10] flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-label="Xbox">
                    <path d="M4.102 21.033A11.947 11.947 0 0012 24a11.96 11.96 0 007.902-2.967c1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912A11.942 11.942 0 0024 12.004a11.95 11.95 0 00-3.57-8.536 3.595 3.595 0 00-.11-.126c-.916.736-2.667 2.907-5.058 5.285zM12 3.296c-1.038 0-2.047.118-3.009.343 1.375 1.125 3.028 2.626 4.084 3.722.914-.914 2.465-2.459 3.813-3.676A11.905 11.905 0 0012 3.296zm-8.77.234a11.91 11.91 0 00-3.115 8.478 11.954 11.954 0 002.657 7.535c-1.362-2.599 3.652-9.99 6.134-12.934-2.393-2.378-4.144-4.549-5.06-5.285-.04.037-.077.075-.116.113v.093z"/>
                  </svg>
                </div>
              </div>

              <div className="w-16 h-16 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg">
                  <span className="text-red-600 font-black text-2xl">N</span>
                </div>
              </div>

              <div className="w-16 h-16 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-label="YouTube">
                    <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-gray-100 py-8 border-b border-gray-200" aria-label="Trust and ratings">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <div className="flex items-center space-x-2">
                <div className="w-16 h-16 bg-white rounded border border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#003d5c] font-black text-sm">BBB</div>
                    <div className="text-xs text-gray-600">A+</div>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="font-bold text-gray-900">Accredited Business</div>
                  <a href="#" className="text-[#4F46E5] text-xs hover:underline">Click for Profile</a>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">Google</div>
                <div className="flex items-center justify-center space-x-1 mb-1" aria-label="4.8 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ffa500] text-[#ffa500]" aria-hidden="true" />
                  ))}
                </div>
                <div className="text-sm font-bold text-gray-700">4.8</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Star className="w-5 h-5 fill-[#00b67a] text-[#00b67a]" aria-hidden="true" />
                  <span className="text-lg font-bold text-gray-900 ml-1">Trustpilot</span>
                </div>
                <div className="flex items-center justify-center space-x-1 mb-1" aria-label="4.6 TrustScore">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" aria-hidden="true" />
                  ))}
                </div>
                <div className="text-sm font-bold text-gray-700">TrustScore 4.6</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 text-gray-700 py-12" role="contentinfo">
          <div className="max-w-[1400px] mx-auto px-6">
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10" aria-label="Footer navigation">
              {/* Footer links unchanged */}
            </nav>

            <div className="border-t border-gray-300 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  {/* Social icons unchanged */}
                  <div className="flex items-center space-x-2 ml-4">
                    <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">DMCA</div>
                    <div className="bg-black text-white px-3 py-1 rounded text-sm font-bold">PROTECTED</div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <p className="mb-2">© 2003-2025 JustAnswer LLC. All rights reserved.</p>
                  <nav className="flex flex-wrap gap-4" aria-label="Legal links">
                    <a href="/privacy" className="hover:text-[#4F46E5] transition">Privacy Policy</a>
                    <a href="/terms" className="hover:text-[#4F46E5] transition">Terms of services</a>
                    <a href="/contact" className="hover:text-[#4F46E5] transition">Contact us</a>
                    <a href="/sitemap" className="hover:text-[#4F46E5] transition">Sitemap</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </>
  );
};

export default CancellationGuidePage;

