const projects = [
  {
    name: 'Tonic',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './image/desktopad1.png',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    name: 'Multi-Post Stores',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './image/desktopad2.png',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    name: 'Facebook 360',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './image/desktopad3.png',
    technologies: ['html', 'Ruby and rails', 'css', 'javascript'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
  {
    name: 'Uber Navigator',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis deserunt nesciunt nulla tenetur ipsam dolorum placeat natus aperiam recusandae maiores.',
    featuredImage: './image/desktopad4.png',
    technologies: ['html', 'css', 'javascript', 'Ruby and rails'],
    stacks: ['canopy', 'Backend Dev', '2015'],
  },
];

// Tonic Modal Details
const openTonicCardModal = document.querySelector('#tonic-modal-open');
const tonicCardModalContainer = document.querySelector('.tonic-card-modal-container');
const closeTonicCardModal = document.querySelector('#tonic-card-modal-close');

openTonicCardModal.addEventListener('click', () => {
  tonicCardModalContainer.classList.add('show');
});

closeTonicCardModal.addEventListener('click', () => {
  tonicCardModalContainer.classList.remove('show');
});

document.querySelector('.tonic-title').textContent = projects[0].name;

document.querySelector('.tonic-stack1').textContent = projects[0].stacks[0].toUpperCase();
document.querySelector('.tonic-stack2').textContent = projects[0].stacks[1];
document.querySelector('.tonic-stack3').textContent = projects[0].stacks[2];
document.querySelector('.tonic-description').textContent = projects[0].description;
document.querySelector('.tonic-image').src = projects[0].featuredImage;
document.querySelector('.tonic-html').textContent = projects[0].technologies[0];
document.querySelector('.tonic-css').textContent = projects[0].technologies[1];
document.querySelector('.tonic-javascript').textContent = projects[0].technologies[2];
document.querySelector('.tonic-ruby').textContent = projects[0].technologies[3];

// Multipost Modal Details
const openMultipostCardModal = document.querySelector('#multipost-modal-open');
const multipostCardModalContainer = document.querySelector('.multipost-card-modal-container');
const closeMultipostCardModal = document.querySelector('#multipost-card-modal-close');

openMultipostCardModal.addEventListener('click', () => {
  multipostCardModalContainer.classList.add('show');
});

closeMultipostCardModal.addEventListener('click', () => {
  multipostCardModalContainer.classList.remove('show');
});
document.querySelector('.multipost-title').textContent = projects[1].name;

document.querySelector('.multipost-stack1').textContent = projects[1].stacks[0].toUpperCase();
document.querySelector('.multipost-stack2').textContent = projects[1].stacks[1];
document.querySelector('.multipost-stack3').textContent = projects[1].stacks[2];
document.querySelector('.multipost-description').textContent = projects[1].description;
document.querySelector('.multipost-image').src = projects[1].featuredImage;
document.querySelector('.multipost-html').textContent = projects[1].technologies[0];
document.querySelector('.multipost-css').textContent = projects[1].technologies[1];
document.querySelector('.multipost-javascript').textContent = projects[1].technologies[2];
document.querySelector('.multipost-ruby').textContent = projects[1].technologies[3];

// Facebook360 Modal Details
const openFacebook360CardModal = document.querySelector('#facebook360-modal-open');
const facebook360CardModalContainer = document.querySelector('.facebook360-card-modal-container');
const closeFacebook360CardModal = document.querySelector('#facebook360-card-modal-close');

openFacebook360CardModal.addEventListener('click', () => {
  facebook360CardModalContainer.classList.add('show');
});

closeFacebook360CardModal.addEventListener('click', () => {
  facebook360CardModalContainer.classList.remove('show');
});

document.querySelector('.facebook360-title').textContent = projects[2].name;

document.querySelector('.facebook360-stack1').textContent =
  projects[2].stacks[0].toUpperCase();
document.querySelector('.facebook360-stack2').textContent = projects[2].stacks[1];
document.querySelector('.facebook360-stack3').textContent = projects[2].stacks[2];
document.querySelector('.facebook360-description').textContent =
  projects[2].description;
document.querySelector('.facebook360-image').src = projects[2].featuredImage;
document.querySelector('.facebook360-html').textContent = projects[2].technologies[0];
document.querySelector('.facebook360-css').textContent = projects[2].technologies[1];
document.querySelector('.facebook360-javascript').textContent =
  projects[2].technologies[2];
document.querySelector('.facebook360-ruby').textContent = projects[2].technologies[3];

// Ubernavigation Modal Details
const openUbernavigationCardModal = document.querySelector('#ubernavigation-modal-open');
const ubernavigationCardModalContainer = document.querySelector('.ubernavigation-card-modal-container');
const closeUbernavigationCardModal = document.querySelector('#ubernavigation-card-modal-close');

openUbernavigationCardModal.addEventListener('click', () => {
  ubernavigationCardModalContainer.classList.add('show');
});

closeUbernavigationCardModal.addEventListener('click', () => {
  ubernavigationCardModalContainer.classList.remove('show');
});

document.querySelector('.ubernavigation-title').textContent = projects[3].name;

document.querySelector('.ubernavigation-stack1').textContent =
  projects[3].stacks[0].toUpperCase();
document.querySelector('.ubernavigation-stack2').textContent = projects[3].stacks[1];
document.querySelector('.ubernavigation-stack3').textContent = projects[3].stacks[2];
document.querySelector('.ubernavigation-description').textContent =
  projects[3].description;
document.querySelector('.ubernavigation-image').src = projects[3].featuredImage;
document.querySelector('.ubernavigation-html').textContent = projects[3].technologies[0];
document.querySelector('.ubernavigation-css').textContent = projects[3].technologies[1];
document.querySelector('.ubernavigation-javascript').textContent =
  projects[3].technologies[2];
document.querySelector('.ubernavigation-ruby').textContent = projects[3].technologies[3];