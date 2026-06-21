    import './App.css'
    import Navbar    from './components/Navbar'
    import Hero      from './components/Hero'
    import About     from './components/About'
    import Skills    from './components/Skills'
    import Projects  from './components/Projects'
    import Education from './components/Education'
    import CVUpload  from './components/CVUpload'
    import Contact   from './components/Contact'
    import Footer    from './components/Footer'
    
    // UPDATE THIS WITH YOUR OWN INFORMATION
    const portfolioData = {
      name:     'Sadiq Adewale',                    // Your name
      title:    'Frontend Developer & UI Designer', // Your job title
      bio:      'I build beautiful, responsive web experiences.',
      email:    'davidsadiq042@gmail.com',
      phone:    '+234 91 2310 1059',
      location: 'Lagos, Nigeria',
      github:   'github.com/',
      linkedin: 'linkedin.com/in/sadiqdewale',
    }
    
    function App() {
      return (
        <div className="app">
          <Navbar ownerName={portfolioData.name} />
          <Hero
            name={portfolioData.name}
            title={portfolioData.title}
            bio={portfolioData.bio}
          />
          <About
            name={portfolioData.name}
            bio={portfolioData.bio}
            email={portfolioData.email}
            phone={portfolioData.phone}
            location={portfolioData.location}
            github={portfolioData.github}
            linkedin={portfolioData.linkedin}
          />
          <Skills />
          <Projects />
          <Education />
          <CVUpload />
          <Contact />
          <Footer ownerName={portfolioData.name} />
        </div>
      )
    }
    export default App
 
