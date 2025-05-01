import { useContext, useState } from "react";
import { projects } from "../../../mocks/projects";
import { ButtonContainer, ButtonNavigation, CardSkill, CarouselTrack, CarouselViewport, CarouselWrapper, ProjectCard, SkillsList } from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Context } from "../../../contexts/Context";
import { BsGlobe2 } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io5";

interface LanguageProps{
    language: string;
}

export function ProjectCarousel({language}: LanguageProps){
    const [currentIndex, setCurrentIndex] = useState(0);
    const {themeColor} = useContext(Context);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    function next(){
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    function prev(){
        setCurrentIndex((prev) => prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    function handleTouchStart(e: React.TouchEvent){
        setTouchStart(e.targetTouches[0].clientX);
    };

    function handleTouchMove(e: React.TouchEvent){
        setTouchEnd(e.targetTouches[0].clientX);
    };

    function handleTouchEnd(){
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            next();
        } else if (distance < -minSwipeDistance) {
            prev();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };


return (
    <CarouselWrapper color={themeColor}>
        <FaArrowLeft onClick={prev}/>
  
        <CarouselViewport
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
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
                        <ButtonContainer>
                            <ButtonNavigation>
                                <a href={project.linkGit} target="_blank">
                                    <IoLogoGithub/>
                                </a>
                            </ButtonNavigation>
                            <ButtonNavigation>
                                <a href={project.linkWeb} target="_blank">
                                    <BsGlobe2/>
                                </a>
                            </ButtonNavigation>
                        </ButtonContainer>
                    </ProjectCard>
                ))}
            </CarouselTrack>
        </CarouselViewport>
  
        <FaArrowRight onClick={next}/>
    </CarouselWrapper>
  );
  
};
