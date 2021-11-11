const projects = [
  {
    id: '1',
    name: 'Tonic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './image/desktopad1.png',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    id: '2',
    name: 'Multi-Post Stores',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './image/desktopad2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    id: '3',
    name: 'Facebook 360',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './image/desktopad3.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    id: '4',
    name: 'Uber Navigator',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './image/desktopad4.png',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
];

// Tonic Modal Details
const openTonicCardModal = document.querySelector('#tonic-modal-open');
const tonicCardModalContainer = document.querySelector('.tonic-card-modal-container');
const closeTonicCardModal = document.querySelector('#tonic-card-modal-close');

openTonicCardModal.addEventListener('click', (e) => {
  const tonicData = projects.find((project) => project.id === e.currentTarget.dataset.id);

  const {
    name: projectTitle,
    description: projectDescription,
    featuredImage: projectImage,
    technologies: projectTechnologies,
    stacks: projectStacks,
  } = tonicData;

  const [html, css, javascript, ruby] = projectTechnologies;
  const [canopy, backend, year] = projectStacks;

  document.querySelector('.tonic-title').textContent = projectTitle;
  document.querySelector('.tonic-stack1').textContent = canopy.toUpperCase();
  document.querySelector('.tonic-stack2').textContent = backend;
  document.querySelector('.tonic-stack3').textContent = year;
  document.querySelector('.tonic-description').textContent = projectDescription;
  document.querySelector('.tonic-image').src = projectImage;
  document.querySelector('.tonic-html').textContent = html;
  document.querySelector('.tonic-css').textContent = css;
  document.querySelector('.tonic-javascript').textContent = javascript;
  document.querySelector('.tonic-ruby').textContent = ruby;

  tonicCardModalContainer.classList.add('show');
});

closeTonicCardModal.addEventListener('click', () => {
  tonicCardModalContainer.classList.remove('show');
});

// Multipost Modal Details
const openMultipostCardModal = document.querySelector('#multipost-modal-open');
const multipostCardModalContainer = document.querySelector('.multipost-card-modal-container');
const closeMultipostCardModal = document.querySelector('#multipost-card-modal-close');

openMultipostCardModal.addEventListener('click', (e) => {
  const multipostData = projects.find((project) => project.id === e.currentTarget.dataset.id);
  const {
    name: projectTitle,
    description: projectDescription,
    featuredImage: projectImage,
    technologies: projectTechnologies,
    stacks: projectStacks,
  } = multipostData;

  const [html, css, javascript, ruby] = projectTechnologies;
  const [canopy, backend, year] = projectStacks;

  document.querySelector('.multipost-title').textContent = projectTitle;
  document.querySelector('.multipost-stack1').textContent = canopy.toUpperCase();
  document.querySelector('.multipost-stack2').textContent = backend;
  document.querySelector('.multipost-stack3').textContent = year;
  document.querySelector('.multipost-description').textContent = projectDescription;
  document.querySelector('.multipost-image').src = projectImage;
  document.querySelector('.multipost-html').textContent = html;
  document.querySelector('.multipost-css').textContent = css;
  document.querySelector('.multipost-javascript').textContent = javascript;
  document.querySelector('.multipost-ruby').textContent = ruby;

  multipostCardModalContainer.classList.add('show');
});

closeMultipostCardModal.addEventListener('click', () => {
  multipostCardModalContainer.classList.remove('show');
});

// Facebook360 Modal Details
const openFacebook360CardModal = document.querySelector('#facebook360-modal-open');
const facebook360CardModalContainer = document.querySelector('.facebook360-card-modal-container');
const closeFacebook360CardModal = document.querySelector('#facebook360-card-modal-close');

openFacebook360CardModal.addEventListener('click', (e) => {
  const facebook360Data = projects.find((project) => project.id === e.currentTarget.dataset.id);
  const {
    name: projectTitle,
    description: projectDescription,
    featuredImage: projectImage,
    technologies: projectTechnologies,
    stacks: projectStacks,
  } = facebook360Data;

  const [html, css, javascript, ruby] = projectTechnologies;
  const [canopy, backend, year] = projectStacks;

  document.querySelector('.facebook360-title').textContent = projectTitle;
  document.querySelector('.facebook360-stack1').textContent = canopy.toUpperCase();
  document.querySelector('.facebook360-stack2').textContent = backend;
  document.querySelector('.facebook360-stack3').textContent = year;
  document.querySelector('.facebook360-description').textContent = projectDescription;
  document.querySelector('.facebook360-image').src = projectImage;
  document.querySelector('.facebook360-html').textContent = html;
  document.querySelector('.facebook360-css').textContent = css;
  document.querySelector('.facebook360-javascript').textContent = javascript;
  document.querySelector('.facebook360-ruby').textContent = ruby;

  facebook360CardModalContainer.classList.add('show');
});

closeFacebook360CardModal.addEventListener('click', () => {
  facebook360CardModalContainer.classList.remove('show');
});

// Ubernavigation Modal Details
const openUbernavigationCardModal = document.querySelector('#ubernavigation-modal-open');
const ubernavigationCardModalContainer = document.querySelector('.ubernavigation-card-modal-container');
const closeUbernavigationCardModal = document.querySelector('#ubernavigation-card-modal-close');

openUbernavigationCardModal.addEventListener('click', (e) => {
  const ubernavigationData = projects.find((project) => project.id === e.currentTarget.dataset.id);

  const {
    name: projectTitle,
    description: projectDescription,
    featuredImage: projectImage,
    technologies: projectTechnologies,
    stacks: projectStacks,
  } = ubernavigationData;

  const [html, css, javascript, ruby] = projectTechnologies;
  const [canopy, backend, year] = projectStacks;

  document.querySelector('.ubernavigation-title').textContent = projectTitle;
  document.querySelector('.ubernavigation-stack1').textContent = canopy.toUpperCase();
  document.querySelector('.ubernavigation-stack2').textContent = backend;
  document.querySelector('.ubernavigation-stack3').textContent = year;
  document.querySelector('.ubernavigation-description').textContent = projectDescription;
  document.querySelector('.ubernavigation-image').src = projectImage;
  document.querySelector('.ubernavigation-html').textContent = html;
  document.querySelector('.ubernavigation-css').textContent = css;
  document.querySelector('.ubernavigation-javascript').textContent = javascript;
  document.querySelector('.ubernavigation-ruby').textContent = ruby;

  ubernavigationCardModalContainer.classList.add('show');
});

closeUbernavigationCardModal.addEventListener('click', () => {
  ubernavigationCardModalContainer.classList.remove('show');
});
