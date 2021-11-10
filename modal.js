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

document.querySelector('.tonic-stack1').textContent =
  projects[0].stacks[0].toUpperCase();
document.querySelector('.tonic-stack2').textContent = projects[0].stacks[1];
document.querySelector('.tonic-stack3').textContent = projects[0].stacks[2];
document.querySelector('.tonic-description').textContent =
  projects[0].description;
document.querySelector('.tonic-image').src = projects[0].featuredImage;
document.querySelector('.tonic-html').textContent = projects[0].technologies[0];
document.querySelector('.tonic-css').textContent = projects[0].technologies[1];
document.querySelector('.tonic-javascript').textContent =
  projects[0].technologies[2];
document.querySelector('.tonic-ruby').textContent = projects[0].technologies[3];