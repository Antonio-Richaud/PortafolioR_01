const projects = [
    {
      id: '0',
      image: '../../images/Interjum.PNG',
      imageProject: '../../images/Interjum1.PNG',
      title: 'Interjum Group',
      autor: 'Antonio Richaud',
      position: 'Desarrollador',
      year: 2023,
      description: 'Explora el futuro de la colaboración con el Grupo Interjum. Juntos, damos forma al panorama empresarial del mañana.',
      descriptionDetail: 'Conviértete en parte de nuestro consorcio dinámico y desbloquea infinitas posibilidades para tu negocio. Ya seas una startup, un empresario experimentado o un líder en la industria, Interjum Group Hub es tu plataforma para el crecimiento, la innovación y la prosperidad.',
      language: ['html', 'css', 'javaScript'],
      live: 'https://interjumgroup.com',
      source: 'https://interjumgroup.com',
    },
  
    {
      id: '1',
      image: '../../images/Jumbo.PNG',
      imageProject: '../../images/Jumbo1.PNG',
      title: 'Jumbo',
      autor: 'Antonio Richaud',
      position: 'Desarrollador',
      year: 2023,
      description: 'Una empresa especializada en la fabricación y venta de equipos de parques infantiles, así como en el diseño, fabricación y comercialización de gimnasios al aire libre y equipamiento urbano de alta calidad.',
      descriptionDetail: 'Esta empresa es un destacado actor en la industria, centrándose en la creación y distribución de una amplia gama de juegos y equipos para parques infantiles. Además, se destacan en el diseño, producción y promoción de centros de fitness al aire libre de primer nivel y comodidades urbanas.',
      language: ['html', 'css', 'javaScript'],
      live: 'https://productosjumbo.com',
      source: 'https://productosjumbo.com',   
    },
  
    {
      id: '2',
      image: '../../images/MetalworksMx.PNG',
      imageProject: '../../images/MetalworksMx1.PNG',
      title: 'MetalWorks Mx',
      autor: 'Antonio Richaud',
      position: 'Desarrollador',
      year: 2023,
      description: 'Una empresa lider de fabricación de metal industrial con un departamento de diseño especializado para proyectos personalizados.',
      descriptionDetail: 'Esta es una empresa industrial especializada en la fabricación de productos de metal. Lo que los distingue es su departamento de diseño dedicado, que se enfoca en adaptar proyectos para satisfacer las necesidades y especificaciones únicas de sus clientes. ',
      language: ['html', 'css', 'WordPress'],
      live: 'https://metalworksmx.com',
      source: 'https://metalworksmx.com',    
    },
  
    {
      id: '3',
      image: '../../images/InWow.PNG',
      imageProject: '../../images/InWow1.PNG',
      title: 'InWow',
      autor: 'Antonio Richaud',
      position: 'Desarrollador',
      year: 2023,
      description: 'Un estudio de diseño que crea proyectos y espacios de entretenimiento inolvidables que inspiran emociones. Van más allá de los límites, fusionando creatividad, diseño, innovación y tecnología con el único propósito de crear entornos sorprendentes.',
      descriptionDetail: 'Este estudio de diseño es una fuerza visionaria en la industria, especializado en la creación de proyectos y espacios de entretenimiento que dejan una impresión duradera, evocando emociones poderosas. Su filosofía gira en torno a superar los límites del diseño convencional al fusionar de manera fluida la creatividad, el pensamiento innovador, la tecnología de vanguardia y el talento artístico.',
      language: ['html', 'css', 'javaScript'],
      live: 'https://inwow.com',
      source: 'https://inwow.com',   
    },
  ];
  
  const work = document.querySelector('.works');
  
  const renderCards = () => {
    projects.forEach((card) => {
      const cardProject = document.createElement('div');
      cardProject.classList.add('card-project');
      cardProject.innerHTML = `
          <div class="card__image">
            <img
              class="card__img"
              src="${card.image}"
              alt="avocode page"
            />
          </div>
          <div class="card__body">
            <h2 class="card__title">${card.title}</h2>
            <ul class="card__information">
              <li class="card__information-name">${card.autor}</li>
              <li>
                <img src="../../images/counter.svg" alt="information separator" />
              </li>
              <li class="card__information-position">${card.position}</li>
              <li>
                <img src="../../images/counter.svg" alt="information separator" />
              </li>
              <li class="card__information-year">${card.year}</li>
            </ul>
            <p class="card__description">
            ${card.description}
            </p>
            <ul class="card__languages">
              <li>${card.language[0]}</li>
              <li>${card.language[1]}</li>
              <li>${card.language[2]}</li>
            </ul>
            <div class="btn-card">
              <button id="cardId${card.id}" class="open-modal btn btn-primary" type="button">Ver Proyecto</button>
              </div>
          </div>
           `;
      work.appendChild(cardProject);
    });
  };
  
  renderCards();
  
  const openModal = document.querySelectorAll('.open-modal');
  
  openModal.forEach((elementModal) => {
    elementModal.addEventListener('click', (e) => {
      e.preventDefault();
  
      projects.forEach((modalCard) => {
        if (elementModal.id === `cardId${modalCard.id}`) {
          const modalProject = document.createElement('div');
          modalProject.classList.add('modal');
          modalProject.innerHTML = `
               <div class="modal-container">
               <div class="modal-header">
               <h2 class="modal__title">${modalCard.title}</h2>
              <p class="modal-close">X</p>
               </div>
          <ul class="modal__information">
            <li class="modal__information-name">${modalCard.autor}</li>
            <li>
              <img src="../../images/counter.svg" alt="information separator" />
            </li>
            <li class="modal__information-position">${modalCard.position}</li>
            <li>
              <img src="../../images/counter.svg" alt="information separator" />
            </li>
            <li class="modal__information-year">${modalCard.year}</li>
            <li>
          </ul>
          
          <img class="modal__image" src="${modalCard.imageProject}" alt="">
          <div class="modal-body">
          <p class="modal__description">${modalCard.descriptionDetail}</p>
          <div class="modal-aside">
          <ul class="modal__languages">
          <li>${modalCard.language[0]}</li>
          <li>${modalCard.language[1]}</li>
          <li>${modalCard.language[2]}</li>
          </ul>
          <ul class="modal__btns">
            <li><a class="btn btn-primary1" href="${modalCard.live}">Ver En Vivo <img src="../../images/iconLive.svg" alt=""></a></li>
            <li><a class="btn btn-primary1" href="${modalCard.source}">Ver Fuente <img src="../../images/iconModalGitHub.svg" alt=""></a></li>
          </ul>
          </div>
          </div>
          </div>`;
          work.appendChild(modalProject);
          const closeModal = document.querySelectorAll('.modal-close');
  
          closeModal.forEach((closeM) => {
            closeM.addEventListener('click', () => {
              modalProject.classList.remove('modal');
              work.removeChild(modalProject);
            });
          });
        }
      });
    });
  });