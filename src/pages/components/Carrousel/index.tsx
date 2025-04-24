import { useContext, useState } from "react";
import { projects } from "../../../mocks/projects";
import { CardSkill, CarouselTrack, CarouselViewport, CarouselWrapper, ProjectCard, SkillsList } from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Context } from "../../../contexts/Context";

interface LanguageProps{
    language: string;
}

export function ProjectCarousel({language}: LanguageProps){
    const [currentIndex, setCurrentIndex] = useState(0);
    const {themeColor} = useContext(Context);

    function next(){
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    function prev(){
        setCurrentIndex((prev) => prev === 0 ? projects.length - 1 : prev - 1
    );
};

return (
    <CarouselWrapper color={themeColor}>
        <FaArrowLeft onClick={prev}/>
  
        <CarouselViewport>
            <CarouselTrack $current={currentIndex}>
                {projects.map((project) => (
                    <ProjectCard key={project.id}>
                        <h3>{project.name}</h3>
                        <img src={project.img} alt={project.name} />
                        <SkillsList>
                            {project.skills.map((skill, idx) => (
                                <CardSkill  key={idx}>
                                    <p>{skill}</p>
                                </CardSkill>
                            ))}
                        </SkillsList>
                        <p>{language === 'pt' ? project.descriptionPt : project.descriptionEn}</p>
                    </ProjectCard>
                ))}
            </CarouselTrack>
        </CarouselViewport>
  
        <FaArrowRight onClick={next}/>
    </CarouselWrapper>
  );
  
};
