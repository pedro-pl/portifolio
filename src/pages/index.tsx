import { useContext } from 'react';

import { Card, Container, LineDivisor, CardKnowledge, ContainerAboutMe } from './styles';

import { IoMailOutline, IoLogoWhatsapp } from 'react-icons/io5';
import { aboutPtBr } from '../mocks/texts';
import { skills } from '../mocks/skills';

import { ProjectCarousel } from './components/Carrousel';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Context } from '../contexts/Context';
import { Toogle } from '../components/Toogle';

import Me from '../assets/perfil.png';

export function Home(){
    const { about } = useContext(Context)

    return (
        <Container>
            <Header />

            <Card id='sobre' $first>
                <h2>{about === aboutPtBr ? 'SOBRE MIM' : 'ABOUT ME'}</h2>

                <ContainerAboutMe>
                    <p>{about}</p>

                    <img src={Me} />
                </ContainerAboutMe>
            </Card>

            <LineDivisor />

            <Card id='projetos'>
                <h2>{about === aboutPtBr ? 'PROJETOS' : 'PROJECTS'}</h2>
                <ProjectCarousel language={about === aboutPtBr ? 'pt' : 'en'}/>
            </Card>

            <LineDivisor />
            
            <Card id='conhecimentos'>
                <h2>{about === aboutPtBr ? 'CONHECIMENTOS' : 'KNOWLEDGE'}</h2>

                <CardKnowledge>
                    {
                        skills.map((skill) => {
                            return(
                                <div key={skill.id}>
                                    <skill.icon size={65}/>
                                    <h4>{skill.name}</h4>
                                </div>
                            )
                        })
                    }
                </CardKnowledge>
            </Card>

            <LineDivisor />

            
            <Card id='contatos'>
                <h2>{about === aboutPtBr ? 'CONTATOS' : 'CONTACTS'}</h2>

                <a href='mailto:lucaspires2322@gmail.com'><IoMailOutline size={22}/> lucaspires2322@gmail.com</a>
                <a href='https://api.whatsapp.com/send/?phone=5511947254880' target='_blank'><IoLogoWhatsapp size={22} /> (11) 94725-4880</a>
            </Card>

            <LineDivisor />

            <Footer language={about === aboutPtBr ? 'pt' : 'en'}/>

            <Toogle/>
        </Container>
    )
}