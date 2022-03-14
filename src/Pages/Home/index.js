import React from 'react';
import { ScrollContainer, 
    ScrollPage, 
    Animator,
    batch,
    Fade,
    FadeIn,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn,
 } from 'react-scroll-motion';
 import '../Home/style.css';
import headerImage from '../../img/eu1.png';
import sobreImage from '../../img/eu.jpg';
import projectOne from '../../img/frutas.jpg';
import projectTwo from '../../img/café.jpg';
import projectThree from '../../img/starbuks.jpg';
import projectFour from '../../img/garden.jpg';
import projectFive from '../../img/pizza.jpg';
import {FiMail} from 'react-icons/fi';
import {SiInstagram} from 'react-icons/si';
import {FiGithub} from 'react-icons/fi';
import {TiSocialLinkedin} from 'react-icons/ti';


const Home = () => {
    const ZoomInScrollOut= batch(StickyIn(), FadeIn(), ZoomIn())

    const work = [
        {
            name: "Website feira online",
            link: 'https://joaoaugustoparaty.github.io/SecretariaAgricultura/',
            imageSrc: projectOne
        },
        {
            name: "Website Café",
            link: 'https://joaoaugustoparaty.github.io/cafeteria/',
            imageSrc: projectTwo
        },
        {
            name: "Website Starbucks",
            link: 'https://joaoaugustoparaty.github.io/Starbucks/',
            imageSrc: projectThree
        },
        {
            name: "Website Paraty Garden",
            link: 'https://joaoaugustoparaty.github.io/plantawebsite/',
            imageSrc: projectFour
        },
        {
            name: "Website Pizzaria",
            link: 'https://restaurant-lac-zeta.vercel.app/',
            imageSrc: projectFive
        },
    ]
     const handleContactClick = (url) => {
         const win = window.open(url, '_blank')
         win.focus()
     }
    return(
 <ScrollContainer>
   <ScrollPage page={0}>
       <Animator animation={batch(Fade(), Sticky(),MoveOut(0, -200))}>
       <div className='image-container'>
         <img src={headerImage} alt="header"/>
         <div className='black-ground'></div>
       </div>
       </Animator>
       <Animator animation={batch(Fade(), Sticky(),MoveOut(1000, 0))}>
           <div className='name'>
               <h2 className='first'>
                   João
               </h2>
           </div>
       </Animator>
       <Animator animation={batch(Fade(), Sticky(),MoveOut(-1650, 0))}>
           <div className='name'>
               <h2 className='last'>
                   Augusto
               </h2>
           </div>
       </Animator>
       <Animator animation={batch(Fade(), Sticky(),MoveOut(-100, 100))}>
           <div className='position'>
               <div></div>
               <h2 className='last'>
                 Fullstack Developer
               </h2>
           </div>
       </Animator>
   </ScrollPage>

   {/* section 2 */}
   <ScrollPage page={1}>
    <Animator animation={ZoomInScrollOut}>
        <div className='section-title'>
            Portfolio
        </div>
    </Animator>
   </ScrollPage>

   <ScrollPage page={2}>
<Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
    <div className='portfolio-content'>
        {
            work?.map((work, index) =>{
                return(
                    <a href={work?.link} target="_black" key={work?.name}>
                        <div className='portfolio-card'>
                            <div className='project-image'>
                                <img src={work?.imageSrc} alt={work?.name}/>
                            </div>
                            <div className='portfolio-title'>
                                <h3>
                                    {work?.name}
                                </h3>

                            </div>
                            
                        </div>
                    </a>
                )
            })
        }
    </div>
</Animator>
   </ScrollPage>

   {/* section 3 */}
   <ScrollPage page={3}>
    <Animator animation={ZoomInScrollOut}>
        <div className='section-title about-me'>
            Sobre mim
        </div>
    </Animator>
   </ScrollPage>

   <ScrollPage page={4}>
       <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
           <div className='background-image-container'>
               <img src={sobreImage} alt='my foto2'/>
               <div className='black-background'>

               </div>
           </div>
       </Animator>
       <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
           <div className='details'>
               <h2 className='gretting'>Olá,</h2>
               <p className='bio'>
               Me chamo João Augusto, sou estudante de programação, atualmente estou me aperfeiçoando Front-end e no Back-end, quero me tornar um Fullstack.
               Sou formado em Administração de Empresas e tenho pós-graduação em Tecnologia para Aplicações Web.
               </p>
               <p className='bio'>
               Busco cada vez mais conhecimentos em HTML, CSS, Bootstrap, Javascript, ReactJS, NextJS, MongoDB, MySQL, NodeJS.
               </p>

               <a href='Curriculo-Joao.pdf' download='João Curriculo-atualizado'>
                       <button className='button type3'>Download Currículo</button>
                   </a>
           </div>
       </Animator>

   </ScrollPage>

   {/* section 4 */}
   <ScrollPage page={5}>
    <Animator animation={ZoomInScrollOut}>
        <div className='section-title contact'>
            Contato
        </div>
    </Animator>
   </ScrollPage>
   
   <ScrollPage page={6}>
       <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         height: '100%'
       }}>
           <span style={{ fontSize: '40px'}}>
               {/* instagram link*/}
               <Animator animation={MoveIn(-1000, 0)}>
                   <div
                   style={{
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center'
                   }}
                   onClick={() => handleContactClick('https://www.instagram.com/joao_aulgusto/?hl=en')}>
                   
                   <SiInstagram color='white' className='contact-list-icon'/>
                     <p>joao_aulgusto</p>
                   </div>
               </Animator>

                {/* gmail link*/}
                <Animator animation={MoveIn(1000, 0)}>
                   <div
                   style={{
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center'
                   }}
                   onClick={() => handleContactClick('https://mail.google.com/mail/u/0/#inbox?compose=new')}>
                   
                   <FiMail color='white' className='contact-list-icon'/>
                     <p>joaodrow@gmail.com</p>
                   </div>
               </Animator>

                {/* github link*/}
                <Animator animation={MoveOut(1000, 0)}>
                   <div
                   style={{
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center'
                   }}
                   onClick={() => handleContactClick('https://github.com/joaoAugustoParaty')}>
                   
                   <FiGithub color='white' className='contact-list-icon'/>
                     <p>joaoAugustoParaty</p>
                   </div>
               </Animator>

               {/* linkedin link*/}
               <Animator animation={MoveOut(-1000, 0)}>
                   <div
                   style={{
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center'
                   }}
                   onClick={() => handleContactClick('https://www.linkedin.com/in/jo%C3%A3o-augusto-oliveira-714a57150/')}>
                   
                   <TiSocialLinkedin color='white' className='contact-list-icon'/>
                     <p>joão-augusto-oliveira</p>
                   </div>
               </Animator>
           </span>
           </div>
   </ScrollPage>

   {/* section 5 */}
   <ScrollPage page={7}>
    <Animator animation={batch(Fade(), Sticky())}>
        <span className='footer'>
            Em breve mais projetos...
        </span>
        <br/>
        <span className='footer'>
            Obrigado pelo seu tempo.
        </span>
    </Animator>
   </ScrollPage>
 </ScrollContainer>
    )
}

export default Home;
