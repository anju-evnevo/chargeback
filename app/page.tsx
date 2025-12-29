// 'use client';
// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight, Star, Clock, CheckCircle, AlertCircle, Phone, MessageCircle, Mail } from 'lucide-react';

// // Services Database - Add as many as needed
// const servicesData = {
//   'paramount-plus': {
//     name: 'Paramount+',
//     category: 'Streaming Services',
//     avgTime: '5-10 minutes',
//     difficulty: 'Easy',
//     price: '$11.99/month',
//     rating: 4.2,
//     totalQuestions: 1847,
//     answeredQuestions: 1823,
//     headline: 'I want to cancel my Paramount plus subscription. I signed up for a free trial; for more than 3 days, but they want to bill me',
//     askerInfo: {
//       name: 'Customer',
//       date: 'September 15, 2024',
//       category: 'Tech Support',
//       experience: 'Streaming Services'
//     },
//     answers: [
//       {
//         expert: 'TechPro Sarah',
//         verified: true,
//         rating: 5,
//         experience: '12 years experience',
//         specialty: 'Streaming & Subscriptions',
//         answeredCount: '2,847 satisfied customers',
//         content: `I understand your frustration with being charged after the free trial. I'll help you cancel your Paramount+ subscription and potentially get a refund. Here's exactly what to do:

// **Immediate Steps to Cancel:**

// 1. Go to www.paramountplus.com and log into your account
// 2. Click on your profile icon in the top right corner
// 3. Select "Account Settings" from the dropdown menu
// 4. Navigate to the "Subscription" section
// 5. Click "Cancel Subscription"
// 6. Follow the prompts to confirm cancellation

// **About the Charge:**

// Paramount+ typically converts free trials to paid subscriptions automatically unless canceled before the trial ends. However, since you're within 3 days of being charged, you have a good chance of getting a refund.

// **To Request a Refund:**

// Contact Paramount+ customer service immediately at 1-888-274-5343. Explain that you intended to cancel before the trial ended and request a refund for the charge. They often accommodate these requests, especially for first-time subscribers.

// **Important Notes:**

// - You'll retain access until the end of your billing period
// - Your viewing history and watchlist will be saved if you resubscribe
// - If you subscribed through Apple, Google, or another platform, you must cancel through them

// Let me know if you need help with any of these steps or if you encounter any issues!`,
//         timestamp: '2 hours ago'
//       },
//       {
//         expert: 'Mike T.',
//         verified: true,
//         rating: 5,
//         experience: '8 years experience',
//         specialty: 'Billing & Subscriptions',
//         answeredCount: '1,234 satisfied customers',
//         content: `I can help! This is a common issue. The key is to act quickly since you're only 3 days into the charge.

// **Quick Cancellation Method:**

// If you're on mobile or prefer a faster route, you can also cancel through their app:
// - Open the Paramount+ app
// - Tap your profile
// - Go to Account > Subscription
// - Select Cancel

// **For the Refund:**

// Since you're within the refund window, I recommend:

// 1. Call their support line: 1-888-274-5343
// 2. Have your account email ready
// 3. Mention you canceled immediately after noticing the charge
// 4. Ask specifically for a "courtesy refund"

// Most streaming services, including Paramount+, will honor refund requests within the first week of a charge, especially for trial conversions.

// **Prevention Tip:**

// Set calendar reminders 2 days before any free trial ends. This gives you buffer time to decide whether to keep the service.`,
//         timestamp: '4 hours ago'
//       }
//     ],
//     relatedQuestions: [
//       'How do I cancel Paramount Plus if I subscribed through Amazon?',
//       'Can I get a refund from Paramount Plus after canceling?',
//       'How to cancel Paramount Plus on Roku?',
//       'Does Paramount Plus have a cancellation fee?',
//       'How long does it take to process a Paramount Plus refund?'
//     ],
//     steps: [
//       {
//         title: 'Access Your Account',
//         description: 'Visit paramountplus.com and sign in with your credentials',
//         details: 'Use the same email and password you used when signing up for the free trial. If you\'ve forgotten your password, use the "Forgot Password" link.'
//       },
//       {
//         title: 'Navigate to Account Settings',
//         description: 'Click your profile icon in the top right, then select "Account"',
//         details: 'You may be prompted to verify your password for security purposes.'
//       },
//       {
//         title: 'Find Subscription Settings',
//         description: 'Scroll to the "Subscription" or "Billing" section',
//         details: 'Here you\'ll see your current plan, next billing date, and payment method.'
//       },
//       {
//         title: 'Cancel Your Subscription',
//         description: 'Click "Cancel Subscription" and confirm',
//         details: 'Paramount+ may offer you a discount or pause option. If you want to completely cancel, continue through these offers.'
//       },
//       {
//         title: 'Verify Cancellation',
//         description: 'Check for a confirmation email',
//         details: 'You should receive an email confirming your cancellation within a few minutes. Keep this for your records.'
//       }
//     ],
//     faqs: [
//       {
//         question: 'How do I get a refund from Paramount Plus?',
//         answer: 'Call 1-888-274-5343 and request a refund. Explain you canceled immediately after being charged from the free trial. They typically honor refund requests within 7 days of the charge.'
//       },
//       {
//         question: 'Will I lose access immediately after canceling?',
//         answer: 'No, you\'ll have access until the end of your current billing period. This means you can still watch content until the date shown in your account settings.'
//       },
//       {
//         question: 'Can I cancel if I subscribed through my TV provider?',
//         answer: 'If you subscribed through a cable provider, Apple TV, Roku, or another platform, you must cancel through that platform\'s billing system, not through Paramount+ directly.'
//       },
//       {
//         question: 'What happens to my watchlist when I cancel?',
//         answer: 'Your watchlist, viewing history, and preferences are saved. If you resubscribe in the future, everything will still be there.'
//       },
//       {
//         question: 'Is there a cancellation fee?',
//         answer: 'No, Paramount+ does not charge any cancellation fees. You can cancel at any time without penalty.'
//       }
//     ],
//     alternativeExperts: [
//       { name: 'David K.', specialty: 'Streaming Tech', available: true },
//       { name: 'Jennifer M.', specialty: 'Subscription Management', available: true },
//       { name: 'Robert P.', specialty: 'Billing Issues', available: false }
//     ]
//   },
//   'netflix': {
//     name: 'Netflix',
//     category: 'Streaming Services',
//     avgTime: '3-5 minutes',
//     difficulty: 'Very Easy',
//     price: '$15.49/month',
//     rating: 4.5,
//     totalQuestions: 3241,
//     answeredQuestions: 3198,
//     headline: 'How do I cancel my Netflix subscription and will I get a refund?',
//     askerInfo: {
//       name: 'Sarah M.',
//       date: 'October 2, 2024',
//       category: 'Subscriptions',
//       experience: 'Streaming Services'
//     },
//     answers: [
//       {
//         expert: 'StreamExpert101',
//         verified: true,
//         rating: 5,
//         experience: '10 years experience',
//         specialty: 'Streaming Platforms',
//         answeredCount: '4,521 satisfied customers',
//         content: `I'll help you cancel Netflix and explain the refund policy clearly.

// **Quick Cancellation Steps:**

// 1. Go to netflix.com and sign in
// 2. Click your profile icon → Account
// 3. Under "Membership & Billing," click "Cancel Membership"
// 4. Click "Finish Cancellation" to confirm

// **About Refunds:**

// Netflix does NOT provide refunds for partial months. However, you'll keep access until the end of your current billing period. So if you paid for October but cancel today, you'll have Netflix until October 31st.

// **Important Details:**

// - Your account stays active for 10 months after canceling
// - All your profiles, preferences, and viewing history are saved
// - You can restart anytime with no reactivation fee
// - Downloaded content will remain available until your billing period ends

// If you were charged in error or experienced technical issues preventing use, contact Netflix support at 1-866-579-7172 to request an exception to their no-refund policy.`,
//         timestamp: '1 hour ago'
//       }
//     ],
//     relatedQuestions: [
//       'How to cancel Netflix on Roku?',
//       'Can I pause my Netflix subscription instead of canceling?',
//       'How to cancel Netflix through Apple?',
//       'Will Netflix delete my account after I cancel?'
//     ],
//     steps: [
//       {
//         title: 'Sign In to Netflix',
//         description: 'Visit netflix.com and log into your account',
//         details: 'You must use the website - you cannot cancel through the mobile app.'
//       },
//       {
//         title: 'Access Account Settings',
//         description: 'Click your profile icon and select "Account"',
//         details: 'This option appears in the top right corner after signing in.'
//       },
//       {
//         title: 'Cancel Membership',
//         description: 'Under "Membership & Billing," click "Cancel Membership"',
//         details: 'Netflix will show you when your access ends and may offer alternatives like downgrading plans.'
//       },
//       {
//         title: 'Confirm Cancellation',
//         description: 'Click "Finish Cancellation" to complete',
//         details: 'You\'ll receive an email confirmation immediately.'
//       }
//     ],
//     faqs: [
//       {
//         question: 'Does Netflix offer refunds?',
//         answer: 'Generally no. Netflix does not refund for partial billing periods, but you keep access until the period ends.'
//       },
//       {
//         question: 'How long before Netflix deletes my account?',
//         answer: 'Netflix keeps your account information for 10 months after cancellation, making it easy to restart.'
//       }
//     ],
//     alternativeExperts: [
//       { name: 'Alex R.', specialty: 'Netflix Support', available: true },
//       { name: 'Maria S.', specialty: 'Streaming Services', available: true }
//     ]
//   }
//  ,
//   'spotify': {
//     name: 'Spotify Premium',
//     category: 'Music Streaming',
//     avgTime: '4-7 minutes',
//     difficulty: 'Easy',
//     price: '$10.99/month',
//     rating: 4.3,
//     totalQuestions: 2156,
//     answeredQuestions: 2134,
//     headline: 'I accidentally subscribed to Spotify Premium, how do I cancel and get my money back?',
//     askerInfo: {
//       name: 'Alex P.',
//       date: 'November 12, 2024',
//       category: 'Music Subscriptions',
//       experience: 'Streaming Services'
//     },
//     answers: [
//       {
//         expert: 'MusicTechGuru',
//         verified: true,
//         rating: 5,
//         experience: '9 years experience',
//         specialty: 'Music Streaming Services',
//         answeredCount: '3,156 satisfied customers',
//         content: `Don't worry! I'll help you cancel Spotify Premium and explain how to request a refund for accidental charges.

// **Cancel Spotify Premium:**

// 1. Go to www.spotify.com/account and log in
// 2. Scroll down to "Your plan" section
// 3. Click "Change plan" or "Cancel Premium"
// 4. Select "Cancel Premium" and confirm

// **Important: Check Where You Subscribed**

// If you subscribed through:
// - **iPhone/iPad**: Cancel through App Store Settings → Your Name → Subscriptions
// - **Android**: Cancel through Google Play Store → Subscriptions
// - **Website**: Follow steps above

// **Requesting a Refund:**

// Spotify's refund policy is strict, but you may get a refund if:
// - You were charged by mistake
// - You canceled immediately after being charged
// - Technical issues prevented you from using the service

// Contact Spotify Support:
// - Go to spotify.com/support
// - Click "Payment" → "I was charged but didn't mean to upgrade"
// - Submit a refund request explaining the accidental subscription

// **What Happens After Canceling:**

// - Premium access continues until the end of your billing period
// - Your playlists and saved music remain intact
// - You'll switch to free tier automatically`,
//         timestamp: '3 hours ago'
//       },
//       {
//         expert: 'SupportSpecialist_Lisa',
//         verified: true,
//         rating: 5,
//         experience: '6 years experience',
//         specialty: 'Subscription Billing',
//         answeredCount: '1,987 satisfied customers',
//         content: `I can help with that! The key is acting quickly for refund eligibility.

// **Quick Cancellation:**

// The fastest way is through your Spotify account page. Make sure you're canceling from the same platform you subscribed on (web, iOS, or Android).

// **Refund Tips:**

// 1. Cancel immediately if you haven't already
// 2. Take a screenshot of the charge and cancellation confirmation
// 3. Contact support within 24-48 hours of the charge
// 4. Be polite and explain it was accidental

// Spotify is generally understanding about genuine mistakes, especially for first-time subscribers or if you cancel right away.

// **Alternative Option:**

// If you decide to keep Premium, you could just use it for the month you paid for, then cancel before the next billing cycle. This way you're not losing the money you already spent!`,
//         timestamp: '5 hours ago'
//       }
//     ],
//     relatedQuestions: [
//       'How to cancel Spotify Premium on iPhone?',
//       'Can I get a refund from Spotify after one day?',
//       'How to cancel Spotify Family plan?',
//       'Does Spotify charge a cancellation fee?',
//       'How to downgrade from Spotify Premium to free?'
//     ],
//     steps: [
//       {
//         title: 'Identify Your Subscription Platform',
//         description: 'Determine if you subscribed through Spotify, Apple, or Google',
//         details: 'Check your recent charges to see if it says "Spotify", "Apple.com/bill", or "Google Play". This determines where you need to cancel.'
//       },
//       {
//         title: 'Access Your Account',
//         description: 'Log into spotify.com/account (if subscribed through Spotify)',
//         details: 'Use your email and password. If you subscribed through a mobile app store, you\'ll need to cancel there instead.'
//       },
//       {
//         title: 'Navigate to Subscription Settings',
//         description: 'Find "Your plan" section and click "Change plan"',
//         details: 'This is usually visible right on your account overview page.'
//       },
//       {
//         title: 'Cancel Premium',
//         description: 'Select "Cancel Premium" and confirm your choice',
//         details: 'Spotify may offer you a discount or pause option. Choose what works best for you.'
//       },
//       {
//         title: 'Request Refund (If Applicable)',
//         description: 'Contact Spotify support immediately for refund consideration',
//         details: 'Visit spotify.com/support and select "Payment" issues to submit your refund request.'
//       }
//     ],
//     faqs: [
//       {
//         question: 'Will I get a refund if I cancel Spotify Premium?',
//         answer: 'Spotify doesn\'t automatically refund, but they may issue refunds for accidental charges if you contact support quickly and explain the situation.'
//       },
//       {
//         question: 'Can I cancel Spotify Premium anytime?',
//         answer: 'Yes! There are no contracts or cancellation fees. You can cancel anytime and still have access until your billing period ends.'
//       },
//       {
//         question: 'What happens to my music when I cancel Premium?',
//         answer: 'All your playlists, saved songs, and followers remain. You\'ll just lose Premium features like offline listening and ad-free playback.'
//       },
//       {
//         question: 'How do I cancel if I subscribed through my phone?',
//         answer: 'iOS: Settings → Your Name → Subscriptions → Spotify. Android: Google Play Store → Menu → Subscriptions → Spotify → Cancel.'
//       }
//     ],
//     alternativeExperts: [
//       { name: 'Chris T.', specialty: 'Music Streaming', available: true },
//       { name: 'Emily R.', specialty: 'Mobile Subscriptions', available: true },
//       { name: 'James K.', specialty: 'Payment Issues', available: false }
//     ]
//   },
//   'disney-plus': {
//     name: 'Disney+',
//     category: 'Streaming Services',
//     avgTime: '5-8 minutes',
//     difficulty: 'Easy',
//     price: '$13.99/month',
//     rating: 4.4,
//     totalQuestions: 1923,
//     answeredQuestions: 1891,
//     headline: 'Need help canceling Disney Plus subscription before next billing cycle',
//     askerInfo: {
//       name: 'Jessica W.',
//       date: 'December 1, 2024',
//       category: 'Entertainment',
//       experience: 'Streaming Services'
//     },
//     answers: [
//       {
//         expert: 'DisneyExpert_Marcus',
//         verified: true,
//         rating: 5,
//         experience: '8 years experience',
//         specialty: 'Disney+ & Streaming',
//         answeredCount: '2,643 satisfied customers',
//         content: `I'll walk you through canceling Disney+ and make sure you don't get charged for the next month!

// **How to Cancel Disney+:**

// 1. Visit www.disneyplus.com and sign in
// 2. Click your profile icon → "Account"
// 3. Under "Subscription", click "Cancel Subscription"
// 4. Select a reason and confirm cancellation

// **IMPORTANT - Check Your Billing Platform:**

// Many people subscribe through third parties:
// - **Roku**: Cancel through your Roku account
// - **Apple**: iPhone Settings → Apple ID → Subscriptions
// - **Google Play**: Play Store → Subscriptions
// - **Hulu Bundle**: Cancel through Hulu.com
// - **Amazon**: Amazon account → Memberships & Subscriptions

// **Timing Matters:**

// - Cancel at least 24 hours before your renewal date
// - You'll keep access until the end of your current billing period
// - Check your account page for the exact renewal date

// **After Cancellation:**

// - Your profiles and watchlist are saved for up to 6 months
// - You can resubscribe anytime without losing your data
// - Downloaded content will remain available until your subscription expires

// **Pro Tip:** Set a calendar reminder for 2-3 days before your renewal date so you have plenty of time to cancel if needed!`,
//         timestamp: '2 hours ago'
//       },
//       {
//         expert: 'StreamingPro_Amanda',
//         verified: true,
//         rating: 5,
//         experience: '7 years experience',
//         specialty: 'Subscription Management',
//         answeredCount: '1,876 satisfied customers',
//         content: `Happy to help you avoid that next charge! Here's what you need to know:

// **Quick Cancellation Checklist:**

// ✓ First, check where you subscribed (Disney site, app store, or bundle)
// ✓ Cancel from the same place you subscribed
// ✓ Verify your next billing date in your account
// ✓ Make sure you receive a cancellation confirmation email

// **For Disney+ Bundles:**

// If you have the Disney Bundle (Disney+, Hulu, ESPN+), canceling Disney+ will cancel the entire bundle. You'll need to:
// 1. Cancel the bundle through the primary account (usually Hulu)
// 2. Resubscribe to individual services you want to keep

// **Mobile App Cancellation:**

// You CANNOT cancel directly through the Disney+ mobile app. You must:
// - Use a web browser on your phone/computer, OR
// - Cancel through the app store you subscribed with

// **Good News:**

// Disney+ makes it pretty straightforward compared to some services. No retention calls required, and your cancellation is immediate with access maintained through your paid period.`,
//         timestamp: '4 hours ago'
//       }
//     ],
//     relatedQuestions: [
//       'How to cancel Disney Plus on Roku?',
//       'Can I cancel Disney Plus and get a refund?',
//       'How to cancel Disney Bundle subscription?',
//       'What happens to my downloads when I cancel Disney+?',
//       'Can I pause my Disney Plus subscription?'
//     ],
//     steps: [
//       {
//         title: 'Verify Your Subscription Source',
//         description: 'Check how you originally subscribed to Disney+',
//         details: 'Look at your bank statement or email receipts. The charge will say "Disney Plus" (direct), "Apple.com", "Google Play", "Roku", etc.'
//       },
//       {
//         title: 'Log Into Your Account',
//         description: 'Sign in at disneyplus.com (if subscribed directly)',
//         details: 'If you subscribed through a third party, log into that platform instead (Apple ID, Google Play, Roku account, etc.)'
//       },
//       {
//         title: 'Access Subscription Settings',
//         description: 'Click your profile → Account → Subscription section',
//         details: 'You\'ll see your current plan, billing date, and cancellation option here.'
//       },
//       {
//         title: 'Initiate Cancellation',
//         description: 'Click "Cancel Subscription" and select a reason',
//         details: 'Disney may offer you a discount or promotional offer to stay. You can accept or continue with cancellation.'
//       },
//       {
//         title: 'Confirm and Verify',
//         description: 'Complete the cancellation and check for confirmation email',
//         details: 'Save this email for your records. It will show when your access ends and confirm no future charges.'
//       }
//     ],
//     faqs: [
//       {
//         question: 'Does Disney+ charge a cancellation fee?',
//         answer: 'No! Disney+ has no cancellation fees. You can cancel anytime and your subscription continues until the end of your billing period.'
//       },
//       {
//         question: 'Will I get a refund if I cancel Disney Plus?',
//         answer: 'Disney+ generally does not provide refunds for partial months. However, you can contact support if you were charged in error or experienced technical issues.'
//       },
//       {
//         question: 'Can I cancel Disney+ through the mobile app?',
//         answer: 'No, you cannot cancel directly in the mobile app. You must cancel through the Disney+ website or through the platform where you subscribed (App Store, Google Play, etc.).'
//       },
//       {
//         question: 'What happens if I have a Disney Bundle?',
//         answer: 'Canceling Disney+ will cancel your entire bundle. You\'ll need to cancel through Hulu (the primary account for bundles) and can then resubscribe to individual services if desired.'
//       },
//       {
//         question: 'How long does Disney+ keep my account after canceling?',
//         answer: 'Disney+ retains your account data (profiles, watchlist) for up to 6 months after cancellation, making it easy to resubscribe later.'
//       }
//     ],
//     alternativeExperts: [
//       { name: 'Ryan M.', specialty: 'Disney+ Support', available: true },
//       { name: 'Nicole P.', specialty: 'Streaming Bundles', available: true },
//       { name: 'Kevin L.', specialty: 'App Store Billing', available: true }
//     ]
//   }
// };

// const CancellationGuidePage = () => {
//   const [selectedService, setSelectedService] = useState('paramount-plus');
//   const [expandedFaq, setExpandedFaq] = useState(null);
//   const [showContactBox, setShowContactBox] = useState(true);

//   const service = servicesData[selectedService];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-8">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
//                   <span className="text-white font-bold text-sm">C</span>
//                 </div>
//                 <span className="text-xl font-bold text-gray-900">Chargeback</span>
//               </div>
//               <nav className="hidden md:flex items-center space-x-6 text-sm">
//                 <a href="#" className="text-gray-600 hover:text-gray-900">How it works</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
//                 <a href="#" className="text-gray-600 hover:text-gray-900">For Business</a>
//               </nav>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">Log in</button>
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
//                 Get started
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             {/* Breadcrumb */}
//             <div className="flex items-center text-sm text-gray-600 mb-4">
//               <a href="#" className="hover:text-blue-600">Home</a>
//               <ChevronRight className="w-4 h-4 mx-2" />
//               <a href="#" className="hover:text-blue-600">{service.category}</a>
//               <ChevronRight className="w-4 h-4 mx-2" />
//               <span className="text-gray-900">{service.name}</span>
//             </div>

//             {/* Question Card */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//               <h1 className="text-2xl font-bold text-gray-900 mb-4">
//                 {service.headline}
//               </h1>
              
//               <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
//                 <div className="flex items-center space-x-1">
//                   <span className="font-medium text-gray-900">{service.askerInfo.name}</span>
//                 </div>
//                 <span>•</span>
//                 <span>{service.askerInfo.date}</span>
//                 <span>•</span>
//                 <span className="text-blue-600">{service.askerInfo.category}</span>
//               </div>

//               <div className="flex items-center space-x-2 text-sm">
//                 <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
//                   Answered
//                 </span>
//                 <span className="text-gray-600">in {service.avgTime}</span>
//               </div>
//             </div>

//             {/* Expert Answers */}
//             <div className="space-y-6 mb-6">
//               {service.answers.map((answer, idx) => (
//                 <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//                   <div className="flex items-start space-x-4 mb-4">
//                     <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
//                       {answer.expert[0]}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center space-x-2 mb-1">
//                         <h3 className="font-bold text-gray-900">{answer.expert}</h3>
//                         {answer.verified && (
//                           <CheckCircle className="w-4 h-4 text-blue-600" />
//                         )}
//                       </div>
//                       <p className="text-sm text-gray-600">{answer.specialty}</p>
//                       <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
//                         <span>{answer.experience}</span>
//                         <span>•</span>
//                         <span>{answer.answeredCount}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       {[...Array(5)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                       ))}
//                     </div>
//                   </div>

//                   <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
//                     {answer.content}
//                   </div>

//                   <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
//                     <span className="text-sm text-gray-500">{answer.timestamp}</span>
//                     <div className="flex items-center space-x-4">
//                       <button className="text-sm text-gray-600 hover:text-blue-600">
//                         Helpful
//                       </button>
//                       <button className="text-sm text-gray-600 hover:text-blue-600">
//                         Share
//                       </button>
//                       <button className="text-sm text-gray-600 hover:text-blue-600">
//                         Report
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Step by Step Guide */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">
//                 Step-by-Step Cancellation Guide
//               </h2>
//               <div className="space-y-4">
//                 {service.steps.map((step, idx) => (
//                   <div key={idx} className="flex space-x-4">
//                     <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
//                       {idx + 1}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
//                       <p className="text-gray-700 text-sm mb-1">{step.description}</p>
//                       <p className="text-gray-600 text-xs">{step.details}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* FAQs */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//               <h2 className="text-xl font-bold text-gray-900 mb-4">
//                 Related Questions
//               </h2>
//               <div className="space-y-3">
//                 {service.faqs.map((faq, idx) => (
//                   <div key={idx} className="border-b border-gray-200 last:border-0">
//                     <button
//                       onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
//                       className="w-full py-3 flex items-center justify-between text-left hover:text-blue-600"
//                     >
//                       <span className="font-medium text-gray-900">{faq.question}</span>
//                       <ChevronDown
//                         className={`w-5 h-5 text-gray-400 transition-transform ${
//                           expandedFaq === idx ? 'rotate-180' : ''
//                         }`}
//                       />
//                     </button>
//                     {expandedFaq === idx && (
//                       <div className="pb-4 text-sm text-gray-700">
//                         {faq.answer}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Related Questions List */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               <h3 className="font-semibold text-gray-900 mb-4">People also asked:</h3>
//               <ul className="space-y-2">
//                 {service.relatedQuestions.map((q, idx) => (
//                   <li key={idx}>
//                     <a href="#" className="text-blue-600 hover:underline text-sm">
//                       {q}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             {showContactBox && (
//               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6 sticky top-6">
//                 <button
//                   onClick={() => setShowContactBox(false)}
//                   className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//                 >
//                   ×
//                 </button>
                
//                 <div className="text-center mb-6">
//                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Phone className="w-8 h-8 text-blue-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">
//                     Let our AI cancel for you
//                   </h3>
//                   <p className="text-sm text-gray-600 mb-4">
//                     Skip the hassle. Our AI agents handle cancellations automatically in under 2 minutes.
//                   </p>
//                 </div>

//                 <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mb-3">
//                   Start Free Cancellation
//                 </button>
                
//                 <div className="text-center">
//                   <p className="text-xs text-gray-500">No credit card required</p>
//                 </div>

//                 <div className="border-t border-gray-200 mt-6 pt-6">
//                   <div className="flex items-center justify-between text-sm mb-3">
//                     <span className="text-gray-600">Avg. cancellation time</span>
//                     <span className="font-semibold text-gray-900">{service.avgTime}</span>
//                   </div>
//                   <div className="flex items-center justify-between text-sm mb-3">
//                     <span className="text-gray-600">Success rate</span>
//                     <span className="font-semibold text-green-600">99.8%</span>
//                   </div>
//                   <div className="flex items-center justify-between text-sm">
//                     <span className="text-gray-600">Satisfied customers</span>
//                     <span className="font-semibold text-gray-900">50,000+</span>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Stats Box */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
//               <h3 className="font-semibold text-gray-900 mb-4">Service Information</h3>
//               <div className="space-y-3 text-sm">
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Monthly Price</span>
//                   <span className="font-semibold text-gray-900">{service.price}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Difficulty</span>
//                   <span className="font-semibold text-gray-900">{service.difficulty}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Questions Answered</span>
//                   <span className="font-semibold text-gray-900">{service.answeredQuestions.toLocaleString()}</span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-gray-600">Average Rating</span>
//                   <div className="flex items-center space-x-1">
//                     <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                     <span className="font-semibold text-gray-900">{service.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Alternative Services */}
//             <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
//               <h3 className="font-semibold text-gray-900 mb-3">More Cancellation Guides</h3>
//               <div className="space-y-2">
//                 {Object.keys(servicesData).filter(k => k !== selectedService).map((key) => (
//                   <button
//                     key={key}
//                     onClick={() => setSelectedService(key)}
//                     className="w-full text-left px-3 py-2 rounded hover:bg-white transition text-sm text-gray-700 hover:text-blue-600"
//                   >
//                     {servicesData[key].name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <h4 className="font-semibold text-white mb-4 text-sm">Product</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">How it Works</a></li>
//                 <li><a href="#" className="hover:text-white">Pricing</a></li>
//                 <li><a href="#" className="hover:text-white">AI Agents</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold text-white mb-4 text-sm">Resources</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">Cancellation Guides</a></li>
//                 <li><a href="#" className="hover:text-white">Blog</a></li>
//                 <li><a href="#" className="hover:text-white">Support</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">About</a></li>
//                 <li><a href="#" className="hover:text-white">Careers</a></li>
//                 <li><a href="#" className="hover:text-white">Contact</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
//               <ul className="space-y-2 text-sm">
//                 <li><a href="#" className="hover:text-white">Privacy</a></li>
//                 <li><a href="#" className="hover:text-white">Terms</a></li>
//                 <li><a href="#" className="hover:text-white">Security</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 pt-8 text-center">
//             <p className="text-sm">© 2025 Chargeback. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default CancellationGuidePage;
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the default service (Paramount+)
  redirect('/paramount-plus');
}