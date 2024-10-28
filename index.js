import React, { useState } from 'react';

const Website = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-900 rounded-full flex items-center justify-center">
            {/* Sound wave icon simplified */}
            <div className="flex space-x-0.5">
              {[1,2,3].map(i => (
                <div key={i} className="w-0.5 h-4 bg-white" />
              ))}
            </div>
          </div>
          <span className="text-sm">Centre Against Racial Profiling</span>
        </div>
        <div className="flex space-x-4 text-red-500 text-sm">
          <a href="#what-we-do">What we do</a>
          <a href="#who-we-are">Who we are</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-8">CENTRE AGAINST RACIAL PROFILING</h1>
            <div className="flex space-x-4">
              <button className="bg-orange-500 px-6 py-2 rounded-full text-sm">What we do</button>
              <button className="bg-red-900 px-6 py-2 rounded-full text-sm">Our Work</button>
            </div>
            <button className="bg-orange-500 px-6 py-2 rounded-full text-sm mt-4">
              Racial Profiling Data Monitoring Project
            </button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-orange-500 mb-6">What We Do</h2>
          <p className="text-orange-300 max-w-3xl">
            We are dedicated to eradicating racial profiling in all its forms. Our mission is to empower 
            communities, advocate for justice, and dismantle systemic racism. Through research, trainings, and 
            the mobilization of voices across diverse communities, we push back against racial profiling 
            in Australia
          </p>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-orange-500 mb-12">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-800">
                {/* Research image placeholder */}
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Research</h3>
                <p className="text-sm text-gray-400">
                  Our research initiatives provide the evidence necessary to challenge 
                  existing systems and push for meaningful change.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-800">
                {/* Training image placeholder */}
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Training</h3>
                <p className="text-sm text-gray-400">
                  Through our workshops and training sessions, we equip communities and organizations with 
                  the knowledge and tools to combat racial profiling effectively.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-800">
                {/* Movement building image placeholder */}
              </div>
              <div className="p-6">
                <h3 className="font-bold mb-2">Movement building</h3>
                <p className="text-sm text-gray-400">
                  We serve as a hub for community organizing and activism, 
                  connecting diverse voices and fostering solidarity in the fight 
                  against racial injustice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section id="who-we-are" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-orange-500 mb-12">Who Are We</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full">
                  {/* Profile image placeholder */}
                </div>
                <h3 className="text-orange-500">TAMAR HOPKINS</h3>
              </div>
              <p className="text-sm text-gray-400">
                Tamar Hopkins has been working in the area of police accountability and racism since 2005. She was the 
                founding lawyer of the Police Accountability Project at the Flemington Kensington Community Legal Centre 
                in Melbourne Australia in 2009. She has a PhD from UNSW on racial profiling. Tamar was briefed as an 
                expert witness by NAACP in the Kumanjayi Walker inquest focusing on police accountability. She 
                appeared before the Yoorrook Justice Commission in May 2023 on police accountability and racial profiling.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full">
                  {/* Profile image placeholder */}
                </div>
                <h3 className="text-orange-500">ILI DIAZ</h3>
              </div>
              <p className="text-sm text-gray-400">
                Ili Diaz has worked directly with communities experiencing human rights abuses in Melbourne, 
                South America and Palestine. His grounding is in Human Rights Law. Ili has worked with and also 
                volunteers with Melbourne Activist Legal Support, providing his expertise to Legal Observer teams that 
                observe police actions in protests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl text-orange-500 mb-12">Contact</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-zinc-900 p-3 rounded"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-zinc-900 p-3 rounded"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full bg-zinc-900 p-3 rounded mb-4 h-32"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button className="bg-orange-500 px-8 py-2 rounded">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs text-gray-500 text-center">
            © 2024 Centre against racial profiling<br />
            The Centre Against Racial Profiling acknowledges the lands of the Wurundjeri people of the Kulin 
            Nations. We acknowledge the dispossession and colonial violence endured by First Nations Peoples, and 
            the work left to dismantle the violence. The Centre Against Racial Profiling works towards the complete 
            and full dismantling of the colonial project.
          </p>
          <div className="flex justify-center mt-4">
            <a href="#" className="text-orange-500">
              {/* Instagram icon placeholder */}
              <div className="w-6 h-6 border border-orange-500 rounded-full" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;