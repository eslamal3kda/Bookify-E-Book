import React from "react";
import AboutUsPanel from "../../components/AboutUsPanel";
import CuratorsCard from "../../components/CuratorsCard";
import Banner from "../../components/Banner";

const curators = [
    {
        id: 1,
        name: "Dr. Elena Vance",
        jobTitle: "Founder & Chief Librarian",
        info: "PhD in Information Science with 15 years of experience in archival preservation.",
        pofilePic: "/images/curator-1.png",
    },
    { id: 2, name: "Marcus Thorne", jobTitle: "Head of Technology", info: "Expert in digital infrastructure and seamless user experiences.", pofilePic: "/images/curator-2.jpg" },
    { id: 3, name: "Sarah Chen", jobTitle: "Collections Director", info: "Specializes in curating rare digital collections and literary partnerships.", pofilePic: "/images/curator-3.jpg" },
    { id: 4, name: "James Wilson", jobTitle: "Community Lead", info: "Passionate about reader engagement and global accessibility initiatives.", pofilePic: "/images/curator-4.jpg" },
];

export default function AboutUs() {
    return (
        <main className="bg-gray-100">
            {/* Hero Section */}
            <section className="py-20 px-40">
                <div className="bg-[url('/images/library-1.png')] min-h-screen bg-cover bg-center bg-black/50 bg-blend-darken text-white flex flex-col gap-6 justify-center items-center rounded-2xl">
                    <span className="text-blue-500 uppercase">Our Legacy</span>
                    <h1 className="text-7xl w-200 text-center">Preserving Knowledge, Inspiring Futures.</h1>
                    <p className="w-220 text-center text-xl font-sans">
                        From physical archives to a global community of readers, we are building the bridge between the wisdom of the past and the technology of the future.
                    </p>
                    <button className="bg-blue-500 py-4 px-8 rounded-2xl cursor-pointer">Join Our Mission</button>
                </div>
            </section>
            {/* Panel Section */}
            <section className="px-40 pb-40 flex gap-8">
                <AboutUsPanel title={"total books"} about={"10k+"} statistic={"+15%"} details={"Growth from last quarter"} />
                <AboutUsPanel title={"active readers"} about={"5k+"} statistic={"+22%"} details={"New members this month"} />
                <AboutUsPanel title={"global access"} about={"24/7"} details={"Available across 140 countries"} />
            </section>
            {/* Our Mission Section */}
            <section className="pb-20 px-40 flex flex-col gap-8 items-center justify-center">
                <h2 className="text-5xl ">Our Mission</h2>
                <p className="w-200 text-center text-xl text-black/80">
                    We believe that access to high-quality literature and educational resources is a fundamental right. Our mission is to democratize knowledge by providing a seamless, borderless
                    digital platform that connects authors and readers worldwide.
                </p>
            </section>
            {/* Our Story Section */}
            <section className="py-20 px-40 flex gap-8 justify-center">
                <div className="overflow-hidden rounded-3xl group w-100">
                    <img src="/images/pic1.png" alt="" className="group-hover:scale-110 transition duration-300 w-full h-full" />
                </div>
                <div className=" flex flex-col gap-8 w-100 ">
                    <h3 className="text-3xl">Our Story</h3>
                    <p className=" text-black/70">
                        Founded in 2018, Digital Library began as a small project to digitize out-of-print historical manuscripts. What started as a labor of love by three librarians and two software
                        engineers has grown into a global repository.
                    </p>
                    <p className=" text-black/70">
                        We recognized that physical archives were becoming inaccessible to the modern student and the remote researcher. By leveraging cloud technology and AI-driven categorization,
                        we've transformed the reading experience into something truly interactive and accessible for everyone, everywhere.
                    </p>
                    <div className="flex  gap-6">
                        <div className="p-2">
                            <p className="text-blue-500  text-xl">2018</p>
                            <p className="font-sans uppercase text-black/70">Established</p>
                        </div>
                        <div className="p-2 border-l">
                            <p className="text-blue-500  text-xl">1.2M+</p>
                            <p className="font-sans uppercase text-black/70">Pages Digitized</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Curators Section */}
            <section className="py-20 px-40 flex flex-col justify-center bg-neutral-950 text-white gap-4 items-center">
                <h2 className="text-5xl capitalize">Meet the Curators</h2>
                <p>The passionate experts dedicated to bringing literature to your screens.</p>
                <div className=" flex gap-4">
                    {curators.map((c) => (
                        <CuratorsCard key={c.id} name={c.name} jobTitle={c.jobTitle} image={c.pofilePic} info={c.info} />
                    ))}
                </div>
            </section>
            {/* Banner Section */}
            <section className="px-40 py-20">
                <Banner about />
            </section>
        </main>
    );
}
