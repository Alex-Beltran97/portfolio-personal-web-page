import { data } from "./data/data";
import { SkillsComponent } from "./templates/SkillsComponent";
import { ProjectsComponent } from "./templates/ProjectsComponent";
import { projects } from './data/projects';
import { Data, Project } from "./types";
import { ModalInfo } from "./components/ModalInfo";

const skillsContainer = document.getElementById("skills-container");
const projectsContainer = document.getElementById("projects-container");
const modalInfoContainer = document.getElementById("modal-info");
const cover = document.getElementById("cover");
const page = document.getElementById("page");
const repo = document.getElementById("repo");

const form = document.getElementById("form") as HTMLFormElement;

const renderComponent = (container: HTMLElement | null, data: Data[], renderFn: (icon: string, label: string) => string) =>{

  if( container !== null ) {
  
    container.innerHTML = data.reduce( (acc, skill, ) =>{
      return acc + renderFn(skill.icon, skill.label);
    }, "");
  };
};

renderComponent(skillsContainer, data, SkillsComponent);
renderComponent(projectsContainer, projects, ProjectsComponent);

const modalInfo = new ModalInfo();

document.addEventListener("click", e =>{
  const element = e.target as HTMLDivElement;

  if(element.id.includes("cover")){

    if(!modalInfo.isOpened) {
      modalInfo.openCloseModal();

      modalInfoContainer?.setAttribute("style","display: flex");

      
      cover?.setAttribute("src",`./src/assets/covers/${ element.id }.PNG`)

      const project : Project | null | undefined =  projects.find( project => project.icon === element.id );

      page?.setAttribute("href",project?.link as string);

      repo?.setAttribute("href",project?.repo ? project?.repo : "#"  as string);

    };

  };

  if(element.id === 'close'){

    if(modalInfo.isOpened) {
      modalInfo.openCloseModal();

      modalInfoContainer?.setAttribute("style","display: none");
    };

  };

});

form?.addEventListener("submit", function ( e ) {
  e.preventDefault();

  const formData = new FormData(this);

  const name = formData.get("name"); 
  const subject = `${ name } - ${ formData.get("subject") }`; 
  const body = formData.get("message"); 

  const to = "pebeltranhe@gmail.com";

  const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;

  this.reset();

});


