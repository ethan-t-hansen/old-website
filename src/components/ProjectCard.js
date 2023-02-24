import '../styles/ProjectCard.css';

function ProjectCard({image, title, text, buttontext, link}) {

    return (
    <div class="card">
            <div class="card-img-wrap">
                <img src={image} class="card-img" />
            </div>
            <div class="card-details">
                <p class="card-text-title">{title}</p>
                <div class="card-text-wrap">
                    <p class="card-text-body">
                        {text}
                    </p>
                </div>
            </div>
            <a href={link} target="_blank">
                <button class="card-button">{buttontext}</button>
            </a>
        </div>
    );
}

export default ProjectCard;