export const SkillsComponent = (icon: string, label: string) : string =>{

  return `<li>
    <figure>
      <img class="icon-skill ${ icon === "express" && "express" }" src="./src/assets/icons/${ icon }.svg" alt="${ label }" />
      <figcaption>${ label }</figcaption>
    </figure>
  </li>`
};