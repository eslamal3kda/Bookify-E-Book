import React from "react";
import PricingCard from "../../components/PricingCard";
import AccordionItem from "../../components/AccordionItem";
import Banner from "../../components/Banner";
const membersipPlans = [
    {
        id: 1,
        planName: "basic",
        description: "Perfect for casual readers starting their collection.",
        price: 9.99,
        btnTitle: "get Started",
        benefits: ["5 borrows per month", "Early access releases", "Standard catalog access", "Ads included"],
    },
    {
        id: 2,
        planName: "Premium",
        description: "Our most loved plan for serious bibliophiles.",
        price: 19.99,
        btnTitle: "choose premium",
        benefits: ["Unlimited borrows", "Early access to new releases", "Ad-free reading", "Offline reading mode", "High-quality audiobooks"],
    },
    {
        id: 3,
        planName: "Ultimate",
        description: "The ultimate experience for professional curators.",
        price: 29.99,
        btnTitle: "go ultimate",
        benefits: ["All Premium features", "Physical book delivery (1/mo)", "Exclusive author Q&A events", "Family sharing (Up to 4)", "Concierge librarian service"],
    },
];
const FQA = [
    {
        id: 1,
        fqa: "Can I cancel my subscription anytime?",
        answer: "Yes, absolutely! You can cancel your subscription at any time from your account settings. You'll continue to have access to your plan's benefits until the end of your current billing cycle.",
    },
    {
        id: 2,
        fqa: "How does early access to new releases work?",
        answer: "Subscribers get exclusive early access to selected new book releases before they are available to the public. You’ll receive a notification via email and inside your account dashboard whenever early access titles are available. Simply log in and enjoy reading before everyone else!",
    },
    {
        id: 3,
        fqa: "Is there a student or educator discount?",
        answer: "Yes! We offer special discounted plans for students and educators. To apply, simply verify your student or educator status using a valid school or university email address during registration. Once verified, the discount will be automatically applied to your subscription.",
    },
    {
        id: 4,
        fqa: "What is physical book delivery?",
        answer: "Physical book delivery allows subscribers to receive printed copies of selected books directly to their doorstep. Depending on your subscription plan, you can choose your preferred titles, and we’ll handle the packaging and shipping. Delivery times may vary based on your location.",
    },
];
export default function Membership() {
    return (
        <main className="bg-gray-100">
            {/* Heading Section */}
            <section className="py-20 px-40 flex flex-col justify-center items-center gap-4 ">
                <h1 className="text-6xl">
                    Choose the Perfect Plan for Your <span className="text-blue-500">Reading Journey</span>
                </h1>
                <p className="text-black/70 text-lg w-xl text-center">
                    Unlock unlimited access to thousands of bestsellers, classics, and exclusive new releases with our flexible membership options.
                </p>
            </section>
            {/* Plans Section */}
            <section className="flex flex-col justify-center items-center  ">
                <div className="flex gap-8 items-center mb-15">
                    <span className="text-black/60">Monthly</span>
                    <div className="flex gap-4 bg-gray-200 py-1 px-4 rounded-full">
                        <button className="py-1 px-2 rounded-full bg-blue-500 text-white cursor-pointer">Monthly</button>
                        <button className="p-1 rounded-full cursor-pointer ">Annual </button>
                    </div>
                    <span className="relative after:content-['save_20%'] after:absolute after:bottom-0 after:-right-21 after:w-20 after:text-green-600 after:text-sm after:bg-green-200 after:text-center after:rounded-2xl text-black/60">
                        Annual
                    </span>
                </div>
                <div className="flex gap-4 mb-10 justify-center">
                    {membersipPlans.map((m) => (
                        <PricingCard key={m.id} planName={m.planName} price={m.price} description={m.description} buttonCaption={m.btnTitle} benefits={m.benefits} />
                    ))}
                </div>
            </section>
            {/* FAQ Section */}
            <section className="mx-40 my-20 flex flex-col items-center gap-8 ">
                <h2 className="text-4xl">Frequently Asked Questions</h2>
                <div className="bg-white mb-20 rounded-2xl">
                  {FQA.map((f)=><AccordionItem key={f.id} FQA={f.fqa} Answer={f.answer} />)}
                </div>
            </section>
            {/* Banner Section */}
            <section className="px-40 pb-20">
              <Banner membership />
            </section>
        </main>
    );
}
