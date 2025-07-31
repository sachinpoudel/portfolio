import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
      {/* Sticky Navbar */}
      <nav className="sticky top-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#top" className="text-sm font-normal hover:underline">
            &lt;Sachin/&gt;
            </a>
            <div className="flex items-center space-x-6">
              <a href="#projects" className="text-sm underline hover:no-underline">
                Projects
              </a>
              <a href="#connect" className="text-sm underline hover:no-underline">
                Connect
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-sm underline hover:no-underline"
              >
                {darkMode ? 'light' : 'dark'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div id="top" className="flex justify-between items-center mb-16">
          <h1 className="text-lg font-normal">Sachin Paudel</h1>
        </div>

        {/* About */}
        <div className="mb-16">
          <p className="text-base leading-relaxed mb-6">
          Aspiring developer currently learning Full-Stack development. I love experimenting with projects, improving my
           skills, and exploring how technology solves real-world problems.
          </p>
          <p className="text-base leading-relaxed">
          BSc.CSIT student — staying curious, building consistently, and learning every day.
          </p>
        </div>

        {/* Projects */}
        <div id="projects" className="mb-16">
          <h2 className="text-base font-semibold mb-8">Projects</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-normal mb-2">
                <a href="https://a-full-stack-blog-app.onrender.com" className="underline hover:no-underline font-bold">
                 A Blog App
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Full-stack application with React, Node.js, Express js and MongoDB
              </p>
              <p className="text-sm">
                A full-stack blogging platform with user authentication, 
                blog CRUD operations. You can find code on GitHub. Currently, this might not work as expected due to deployment issues. But works fine in local environment.
              </p>
            </div>

            <div>
              <h3 className="text-base font-normal mb-2">
                <a href="https://mycsitpath.42web.io" className="underline hover:no-underline font-bold">
                A CSIT Notes App
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Powered by Wordpress
              </p>
              <p className="text-sm">
               A Complete Notes Website for BSc.CSIT students,
                providing resources, notes, and study materials for all semesters. Currently looking for team members to improve it.
              </p>
            </div>

            <div>
              <h3 className="text-base font-normal mb-2">
                <a href="https://github.com/sachinpoudel/Intermediate_Ecommerce_Backend" className="underline hover:no-underline font-bold">
                Intermediate Ecommmerce Backend
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
               TypeScript NodeJs ExpressJs Postgres and Prisma ORM
              </p>
              <p className="text-sm">
               A Intermediate level ecommerce backend with crud , Advanced Error handling and best Practices.
              </p>
            </div>

            {/* <div>
              <h3 className="text-base font-normal mb-2">
                <a href="#" className="underline hover:no-underline font-bold">
                  Blog Platform
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Next.js, Prisma, PostgreSQL
              </p>
              <p className="text-sm">
                Modern blog platform with markdown support and SEO optimization 
                for content creators.
              </p>
            </div> */}
          </div>
        </div>

        {/* Contact */}
        <div id="connect">
          <h2 className="text-base font-bold mb-8">Connect</h2>
          <div className="space-y-2">
            <div>
              <a href="mailto:poudelsachin009@gmail.com" className="underline hover:no-underline">
                Email
              </a>
            </div>
            <div>
              <a href="https://github.com/sachinpoudel" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/sachin-poudel-16029a315" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © Sachin
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;