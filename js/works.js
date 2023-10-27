const projects = [
  {
    id: '0',
    image: 'images/Interjum.png',
    imageProject: 'images/Interjum1.png',
    title: 'Interjum Group',
    autor: 'Antonio Richaud',
    position: 'Software Developer',
    year: 2023,
    description: 'Explore the future of collaboration with Interjum Group. Together, we shape tomorrow´s business landscape.',
    descriptionDetail: 'Become a part of our dynamic consortium and unlock endless possibilities for your business. Whether you are a startup, a seasoned entrepreneur, or an industry leader,  Interjum Group Hub is your platform for growth, innovation, and prosperity.',
    language: ['html', 'css', 'javaScript'],
    live: 'https://interjumgroup.com',
    source: 'https://interjumgroup.com',
  },

  {
    id: '1',
    image: 'images/Jumbo.png',
    imageProject: 'images/Jumbo1.png',
    title: 'Jumbo',
    autor: 'Antonio Richaud',
    position: 'Software Developer',
    year: 2023,
    description: 'A company specializing in the manufacture and sale of children´s playground equipment, as well as the design, manufacturing, and marketing of high-quality outdoor gyms and urban equipment.',
    descriptionDetail: 'This company is a prominent player in the industry, focusing on crafting and distributing an extensive range of children´s playground games and equipment. Additionally, they excel in the design, production, and promotion of top-tier outdoor fitness centers and urban amenities.',
    language: ['html', 'css', 'javaScript'],
    live: 'https://productosjumbo.com',
    source: 'https://productosjumbo.com',   
  },

  {
    id: '2',
    image: 'images/MetalworksMx.png',
    imageProject: 'images/MetalworksMx1.png',
    title: 'MetalWorks Mx',
    autor: 'Antonio Richaud',
    position: 'Software Developer',
    year: 2023,
    description: 'An industrial metal fabrication company with a specialized design department for custom projects.',
    descriptionDetail: 'This is an industrial company that specializes in the fabrication of metal products. What sets them apart is their dedicated design department, which focuses on tailoring projects to meet the unique needs and specifications of their clients. ',
    language: ['html', 'css', 'WordPress'],
    live: 'https://metalworksmx.com',
    source: 'https://metalworksmx.com',    
  },

  {
    id: '3',
    image: 'images/InWow.png',
    imageProject: 'images/InWow1.png',
    title: 'InWow',
    autor: 'Antonio Richaud',
    position: 'Software Developer',
    year: 2023,
    description: 'A design studio that crafts unforgettable entertainment projects and spaces, inspiring emotions. They go beyond boundaries, merging creativity, design, innovation, and technology with the sole aim of creating astonishing environments.',
    descriptionDetail: 'This design studio is a visionary force in the industry, specializing in the creation of entertainment projects and spaces that leave a lasting impression, evoking powerful emotions. Their philosophy revolves around pushing the boundaries of conventional design by seamlessly blending creativity, innovative thinking, cutting-edge technology, and artistic flair.',
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
              <img src="./images/counter.svg" alt="information separator" />
            </li>
            <li class="card__information-position">${card.position}</li>
            <li>
              <img src="./images/counter.svg" alt="information separator" />
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
            <button id="cardId${card.id}" class="open-modal btn btn-primary" type="button">See Project</button>
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
            <img src="./images/counter.svg" alt="information separator" />
          </li>
          <li class="modal__information-position">${modalCard.position}</li>
          <li>
            <img src="./images/counter.svg" alt="information separator" />
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
          <li><a class="btn btn-primary1" href="${modalCard.live}">See live <img src="./images/iconLive.svg" alt=""></a></li>
          <li><a class="btn btn-primary1" href="${modalCard.source}">See Source <img src="./images/iconModalGitHub.svg" alt=""></a></li>
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
