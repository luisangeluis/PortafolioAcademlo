const projectContainer = document.querySelector("#projects-container");

export function renderProjectCard(project){
    const projectCard = `
        <div class="proyects-item col-md-6 col-lg-3">
            <article class="card text-center primary-shadow bg-white">
                <img src="${project.image}" alt="" id="template-img" class="card-image">
                <div class="card-body">
                    <h3 class="card-title" id="title">${project.title}</h3>
                    <div class="card-text">
                        <p id="description">${project.description}</p>
                    </div>
                    <div class="tecnologies-section" id="technologies">
                        <h3>Technologies</h3>
                        <ul class="tec">${project.technologies.map(tech=>(`<li>${tech}</li>`)).join("")}</ul>
                    </div>
                    <div class="proyects-links">
                        ${project.links.map(l=>{
                            return(
                                `<a href="${l.project}" class="proyects_link" target="_blank">See project</a>
                                <a href="${l.github}" class="proyects_link" target="_blank">See code</a>`
                            )
                        })}
                    </div>
                </div>
            </article>
        </div>
    `
    return projectCard;
}

export function renderProjects(projects){
    projects.forEach(project=>{
        projectContainer.innerHTML +=renderProjectCard(project);
    })

}