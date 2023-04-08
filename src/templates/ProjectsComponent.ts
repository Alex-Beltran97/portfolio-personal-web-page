export const ProjectsComponent = (icon: string, label: string) : string =>{

  return `<li class="project" id="${ icon }">
    <img src="./src/assets/covers/${ icon }.PNG" alt="${ label }" title="${ label }"  id="${ icon }" />
  </li>`
};