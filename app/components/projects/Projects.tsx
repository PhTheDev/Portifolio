const Projects = () => {
    return (
      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Substituir pelos seus projetos */}
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold">Projeto 1</h3>
              <p className="mt-2">Descrição breve do projeto.</p>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold">Projeto 2</h3>
              <p className="mt-2">Descrição breve do projeto.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;