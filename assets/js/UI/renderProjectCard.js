const projectContainer = document.querySelector("#projects-container");

export function renderProjectCard(project){
    const projectCard = `
        <div class="proyects-item col-md-6 col-lg-4">
            <article class="card text-center primary-shadow bg-white" >
                <div class="card-body" style="background-image: url(${project.image});">
                    <h3 class="card-title" id="title">${project.title}</h3>
                    <div class="card-text">
                        <p id="description">${project.description}</p>
                    </div>
                
                </div>
                <div class="slider-panel">
                    
                    <div class="proyects-links">
                        
                        ${project.links.front !== null ? (
                                `
                                <p class=" w-100">FRONT END</p>
                                <div>
                                    <a href="${project.links.front.project}" class="proyects_link" target="_blank">See project</a>
                                    <a href="${project.links.front.code}" class="proyects_link" target="_blank">See code</a>
                                </div>
                                `
                            ) :""
                        }
                        ${  project.links.back!==null ? (
                                `
                                <p>BACK END</p>
                                <div>
                                    <a href="${project.links.back.project}" class="proyects_link" target="_blank">See project</a>
                                    <a href="${project.links.back.code}" class="proyects_link" target="_blank">See code</a>
                                </div>
                                `
                            ) :""
                        }
                    </div>
                    <div class="tecnologies-section" id="technologies">
                        <h3>Technologies</h3>
                        <ul class="tec">${project.technologies.map(tech=>(`<li>${tech}</li>`)).join("")}</ul>
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