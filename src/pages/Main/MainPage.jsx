import './MainPage.css';
import './MainPage_Resolution.css';
import HeaderLogoIMG from '../../assets/logos/culltive.png';
import BuildLogoIMG from '../../assets/logos/home-business-logo.png';
import HouseLogoIMG from '../../assets/logos/home-house-logo.png';

import CulltiveBox from '../../assets/logos/culltive box gray.png';
import CulltiveOne from '../../assets/logos/culltive one gray.png';
import CulltiveWall from '../../assets/logos/culltive wall gray.png';
import CulltiveFarm from '../../assets/logos/culltive farm gray.png';

import Lettuce1IMG from '../../assets/logos/alface2.png';
import Lettuce2IMG from '../../assets/logos/alface3.png';
import Lettuce3IMG from '../../assets/logos/alface1.png';
import CulltiveQuestionIMG from '../../assets/logos/texto redondo.png';

import CulltiveOneWhite from '../../assets/logos/culltive one white.png';
import CulltiveBoxWhite from '../../assets/logos/culltive box white.png';
import CulltiveWallWhite from '../../assets/logos/culltive wall white.png';
import CulltiveFarmWhite from '../../assets/logos/culltive farm white.png';
import CulltiveOneCover from '../../assets/backgrounds/culltive-one-cover-1.png';
import CulltiveOneCover2 from '../../assets/backgrounds/culltive-one-cover-2.png';
import CulltiveWallCover from '../../assets/backgrounds/culltive-wall-cover.png';
import CulltiveFarmCover from '../../assets/backgrounds/culltive-farm-cover.png';
import CulltiveBoxCover from '../../assets/backgrounds/culltive-box-cover.png';

import ArrowLeft from '../../assets/logos/arrow-left.png';
import ArrowRight from '../../assets/logos/arrow-right.png';

import TechPcIcon from '../../assets/logos/pink-computer.png';
import TechHouseIcon from '../../assets/logos/pink-house.png';
import TechCartIcon from '../../assets/logos/pink-cart.png';

import RatingGuilherme from '../../assets/backgrounds/rating-guilherme-cover.png';
import RatingMariana from '../../assets/backgrounds/rating-mariana-cover.png';
import RatingRodrigo from '../../assets/backgrounds/rating-rodrigo-cover.png';

import CulltiveNoCover from '../../assets/logos/culltive-without-background.png';
import BussinessCurvedText from '../../assets/logos/frescor-curved-text.png';
import FamilyCurvedText from '../../assets/logos/family-curved-text.png';

import FooterWhatsappLogo from '../../assets/logos/footer-whatsapp-logo.png';
import FooterInstagramLogo from '../../assets/logos/footer-instagram-logo.png';
import FooterYoutubeLogo from '../../assets/logos/footer-youtube-logo.png';
import FooterLinkedinLogo from '../../assets/logos/footer-linkedin-logo.png';
import FooterFacebookLogo from '../../assets/logos/footer-facebook-logo.png';
import FooterBackIcon from '../../assets/logos/seta-cima-icon.png';

import React, { useEffect, useRef, useState } from 'react';

function MainPage() {
    return (
        <>
            <section className='home' id='topo'>
                <header>
                    <img src={HeaderLogoIMG} alt='Logo escrito "Culltive"' />

                    <nav>
                        <ul>
                            <li><a href="#home"><span>01/</span>Home</a></li>
                            <li><a href="#produtos"><span>02/</span>Produtos</a></li>
                            <li><a href="#tecnologia"><span>03/</span>Tecnologia</a></li>
                            <li><a href="#sobre-nos"><span>04/</span>Sobre nós</a></li>
                            <li><a href="#para-quem"><span>05/</span>Para quem</a></li>
                            <li><a href="#blog"><span>06/</span>Blog</a></li>
                            <li><a href="#contato"><span>07/</span>Contato</a></li>
                        </ul>
                    </nav>
                </header>

                <div className='container'>
                    <div className='home__center-area'>
                        <div className=''>
                            <p className='text-1'>TECNOLOGIA <span className='text-1-1'>QUE</span></p>
                            <p className='text-2'>Cultiva <br />a vida</p>
                            <p className='text-3'>Em qualquer lugar</p>
                        </div>

                        <div className='home__icon-area'>
                            <div><img src={HouseLogoIMG} alt="Imagem de uma casa" /></div>
                            <div><img src={BuildLogoIMG} alt="Imagem de um prédio" /></div>
                        </div>
                    </div>
                </div>

                <div className='home__bottom-area'><RepeatLogos /></div>
            </section>

            <section className='question' id='home'>
                <div className='lettuces'>
                    <img className='question__lettuce' src={Lettuce1IMG} alt='Muda de alface' />
                    <img className='question__lettuce' src={Lettuce2IMG} alt='Muda de alface' />
                    <img className='question__lettuce' src={Lettuce3IMG} alt='Muda de alface' />
                </div>

                <div className='container'>
                    <div className='question__invisible'></div>
                    <img className='question__rounded' src={CulltiveQuestionIMG} alt="O que te impede de cultivar?" />

                    <div className='question__texts'>
                        <div>
                            <div>
                                <h2>Espaço?</h2>
                                <h2>Cuidados?</h2>
                                <p>Produzir alimentos <span className='accent-color'>não precisa</span></p>
                                <p>ser uma <span className='accent-color'>tarefa cansativa.</span></p>
                            </div>
                        </div>

                        <div>
                            <h2>A Culltive</h2>
                            <h2>Pode ajudar.</h2>
                        </div>
                    </div>
                </div>
            </section>

            <div className='divisor' />

            <section className='line' id='produtos'>
                <div className='container line__titles'>
                    <h2>Conheça a nossa</h2>
                    <div><h1>Linha de produtos</h1></div>
                </div>

                <CarouselCards className='cards'>
                    <CulltiveCards imgLogo={CulltiveBoxWhite} imgAlt={'Culltive Box'} imgCover={CulltiveBoxCover} title={'Shelf-life infinito'} subtitle={'Faça o seu mercado'} buttonText={'Esse é o meu modelo'} />
                    <CulltiveCards imgLogo={CulltiveOneWhite} imgAlt={'Culltive One'} imgCover={CulltiveOneCover2} title={'Hidroponicas'} subtitle={'Don\'t panic'} buttonText={'Colocar na lista'} />
                    <CulltiveCards imgLogo={CulltiveOneWhite} imgAlt={'Culltive One'} imgCover={CulltiveOneCover} title={'Design que cresce'} subtitle={'Literalmente'} buttonText={'Quero este modelo'} />
                    <CulltiveCards imgLogo={CulltiveWallWhite} imgAlt={'Culltive Wall'} imgCover={CulltiveWallCover} title={'Design que alimenta'} subtitle={'Parede que nutre'} buttonText={'Escolho este aqui'} />
                    <CulltiveCards imgLogo={CulltiveFarmWhite} imgAlt={'Culltive Farm'} imgCover={CulltiveFarmCover} title={'Escala sem terra'} subtitle={'Agricultira 5.0'} buttonText={'Falar com comercial'} />
                </CarouselCards>
            </section>

            <div className='divisor' />

            <section className='tech' id='tecnologia'>
                <div className='container'>
                    <div className='titles'>
                        <h1>Tecnologia simplificada</h1>
                        <hr className='tech__hr' />

                        <div>
                            <p className='tech__subtitle'>Como funciona?</p>
                            <p className='tech__description'>Processos são facilitados para o desenvolvimento do seu cultivo sem precisar esquentar a cabeça.</p>
                        </div>
                    </div>

                    <div className='items'>
                        <TechElement imgIcon={TechPcIcon} preTitle={'Parte técnica'} title={'Sensoriamento IOT'} description={'Entenda o que sua terra diz. Transformamos sinais em decisões estratégicas para o seu negócio.'} />
                        <TechElement imgIcon={TechHouseIcon} preTitle={'Parte prática'} title={'Automação'} description={'Liberdade para crescer. Automatize tarefas repetitivas e foque no que realmente importa: a estratégia.'} />
                        <TechElement imgIcon={TechCartIcon} preTitle={'Parte boa'} title={'Colheita'} description={'O ápice do ciclo com perfeição. Tecnologia que garante uma colheita mais rápida, limpa e lucrativa.'} />
                    </div>
                </div>
            </section>

            <div className='divisor' />

            <section className='rating' id='sobre-nos'>
                <div className='container line__titles'>
                    <h2>Depoimento de nosssos</h2>
                    <div><h1>Clientes satisfeitos</h1></div>
                </div>

                <CarouselCards customClass={'rating__cards'}>
                    <FeedbackCard imgCover={RatingRodrigo} name={'Rodrigo Farias Melo'} role={'Fundador da Numuu'} testimonial={'Eu não tinha o \'dedo verde\', mas o passo a passo é tão simples que não teve erro. Além de economizar no mercado, sinto que minha alimentação deu um salto de qualidade. Cultivar virou minha terapia diária.'} />
                    <FeedbackCard imgCover={RatingGuilherme} name={'Guilherme Medeiros'} role={'Fundador da Numuu'} testimonial={'Sempre achei que precisava de um quintal enorme para ter comida de verdade. O método me mostrou que em qualquer canto do meu apartamento eu conseguia produzir. O sabor das minhas saladas ficaram incríveis!'} />
                    <FeedbackCard imgCover={RatingMariana} name={'Mariana Castro Lima'} role={'Fundadora da Numuu'} testimonial={'O que mais me surpreendeu foi aprender sobre as plantas ricas em proteína. Como sou vegetariana, o cultivo próprio virou minha principal fonte de nutrientes. É incrível saber exatamente o que estou colocando no prato.'} />
                </CarouselCards>
                {/* <RatingCards /> */}

            </section>
            <div className='divisor' />


            <section className='business' id='para-quem'>
                <div className='container'>
                    <img className='logo' src={CulltiveNoCover} alt='logo da Culltive' />

                    <div className='texts'>
                        <h2>Proporcione experiências únicas para quem busca exclusividade.</h2>

                        <div className='benefits__card adjust'>
                            <div className='adjust-height'>
                                <h1>Debug</h1>
                                <p>Lorem ipsum.</p>
                            </div>
                            <BenefitsRoll setItems={[
                                { title: '90%', strongText: 'Menos água', leftText: 'utilizada na produção', key: '1' },
                                { title: '12+', strongText: 'Meses de produção', leftText: 'contínua', key: '2' },
                                { title: '99%', strongText: 'Menos agrotóxicos', leftText: 'em sua safra', key: '3' },
                                { title: '35%', strongText: 'Mais econômico', leftText: 'a médio prazo', key: '4' },
                                { title: '75%', strongText: 'Menos perdas', leftText: 'da safra', key: '5' }
                            ]} />
                        </div>

                        <button>Quero para o meu negócio</button>
                    </div>
                </div>
            </section>
            <div className='divisor' />


            <section className='family business' id='blog'>
                <div className='container'>
                    <img className='logo' src={CulltiveNoCover} alt='logo da Culltive' />

                    <div className='texts'>
                        <h2>Uma alimentação saudável surge <br />a partir da escolha certa.</h2>

                        <div className='benefits__card adjust'>
                            <div className='adjust-height'>
                                <h1>Debug</h1>
                                <p>Lorem ipsum.</p>
                            </div>
                            <BenefitsRoll setItems={[
                                { title: '90%', strongText: 'Maior aderência', leftText: 'pelas crianças', key: '1' },
                                { title: '85%', strongText: 'Envolvimento', leftText: 'contínuo no cultivo', key: '2' },
                                { title: '99%', strongText: 'Menos agrotóxicos', leftText: 'em sua safra', key: '3' },
                                { title: '50%', strongText: 'Mais nutritivo', leftText: 'para sua família', key: '4' },
                                { title: '45%', strongText: 'Mais saudável', leftText: 'de se alimentar', key: 5 }
                            ]} />
                        </div>

                        <button>Quero para o meu lar</button>
                    </div>
                </div>
            </section>

            <footer id='contato'>
                <div className='container'>
                    <div className='area_1'>
                        <img src={HeaderLogoIMG} alt="Logo da Culltive" />
                        <h1>TECNOLOGIA QUE CULTIVA VIDA EM QUALQUER LUGAR</h1>
                    </div>

                    <div className='area_2'>
                        <div className='politicas'>
                            <nav>
                                <ul>
                                    <li><a>Política Geral do Site</a></li>
                                    <li><a>Política de Troca e Devolução</a></li>
                                    <li><a>Política de Pagamentos</a></li>
                                    <li><a>Política de Entrega de Produtos</a></li>
                                </ul>
                            </nav>

                            <nav className='nav__redes-sociais'>
                                <ul>
                                    <li><a><img src={FooterWhatsappLogo} className='whatsapp' alt='Whatsapp' /></a></li>
                                    <li><a><img src={FooterInstagramLogo} className='instagram' alt='Instagram' /></a></li>
                                    <li><a><img src={FooterYoutubeLogo} className='youtube' alt='Youtube' /></a></li>
                                    <li><a><img src={FooterLinkedinLogo} className='linkedin' alt='Linkedin' /></a></li>
                                    <li><a><img src={FooterFacebookLogo} className='facebook' alt='Facebook' /></a></li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <nav>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#produtos">Produtos</a></li>
                                    <li><a href="#tecnologia">Tecnologia</a></li>
                                    <li><a href="#sobre-nos">Sobre nós</a></li>
                                    <li><a href="#para-quem">Para quem</a></li>
                                    <li><a href="#blog">Blog</a></li>
                                    <li><a href="#contato">Contato</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className='newsletter'>
                            <h3>Receba o nosso <br />newsletter mensal</h3>
                            <NewsLetterForm />
                        </div>
                    </div>

                    <div className='area_3'>
                        <p>© Culltive | Cultivando o futuro da alimentação, hoje.</p>

                        <a href='#topo'>
                            <img src={FooterBackIcon} alt='Seta verde'></img>
                            Voltar para o começo
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default MainPage;

function RepeatLogos() {
    const logos = [CulltiveWall, CulltiveFarm, CulltiveBox, CulltiveOne];
    const culltiveLogosShow = [...logos, ...logos, ...logos];

    return (<>
        <ul className='home__logos'>
            {culltiveLogosShow.map((item, index) => <li key={index}><img src={item} alt='Logo da Culltive' /></li>)}
        </ul>
    </>
    );
};

function CarouselCards({ customClass = '', children, centerPosition }) {
    /** @type {React.RefObject<HTMLDivElement>} */
    const lineCardsRef = useRef();
    const buttonsCardRef = useRef();
    const circlesCardRef = useRef();

    const centerCardIndex = () => parseInt(Array.from(lineCardsRef.current.children).findIndex(f => f.classList.contains('position-3')));
    if (!centerPosition) centerPosition = Math.ceil(children.length / 2);
    const [centerPosit, setCenterPosit] = useState(centerPosition);

    useEffect(() => {
        Array.from(lineCardsRef.current.children).forEach((child, index) => {
            const divClass = child.className.split(' ').filter(f => !f.startsWith('position-')).join(' ');
            child.setAttribute('class', `${divClass} position-${(index + 1) + (3 - centerPosit)}`);
        })
        cardsAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [centerPosit]);

    return (
        <div className={`line__cards-area ${customClass}`}>
            <div ref={lineCardsRef} onTouchStart={(e) => startTouch(e.touches[0].clientX)} onTouchEnd={e => endTouch(e.changedTouches[0].clientX)} className='line__cards'>
                {children}
            </div>

            <div className='line__height-card'> {children[0]}</div>

            <div className='line__arrows' ref={buttonsCardRef}>
                <button onClick={() => setCenterPosit(centerCardIndex())}><img src={ArrowLeft} alt='Seta para a esquerda' /></button>
                <button onClick={() => setCenterPosit(centerCardIndex() + 2)}><img src={ArrowRight} alt='Seta para a direita' /></button>
            </div>

            <div className='line__circles' ref={circlesCardRef}>
                {children.map((_, index) => <button onClick={() => setCenterPosit(index + 1)} key={index} className='circle' />)}
            </div>
        </div>
    );

    async function cardsAction() {
        const children = lineCardsRef.current.children;
        const findChildByClass = (className) => Array.from(children).find(f => f.classList.contains(className))

        hideElements();
        verifyButtons();
        adjustCirclePosition();

        // Ajustando bolinha
        function adjustCirclePosition() {
            const positionIndex = parseInt(Array.from(children).findIndex(f => f.classList.contains('position-3')));
            Array.from(circlesCardRef.current.children).forEach((circle, index) => circle.classList[positionIndex === index ? 'add' : 'remove']('active'));
        }

        // Ajustando posição dos cards ativos
        async function hideElements() {
            const centerCard = centerCardIndex();
            Array.from(lineCardsRef.current.children).forEach((child, index) => {
                if (index >= centerCard + 3) child.classList.add('hide', 'more');
                else if (index <= centerCard - 3) child.classList.add('hide', 'less');
                else child.classList.remove('hide', 'more', 'less');
            });
        }

        // Ativando/desativando botões
        function verifyButtons() {
            if (!findChildByClass('position-4')) disableButton(true, 1);
            else disableButton(false, 1);
            if (!findChildByClass('position-2')) disableButton(true, 0);
            else disableButton(false, 0);

            function disableButton(disable, index) {
                const buttonElement = buttonsCardRef.current.children[index];
                return buttonElement.classList[disable ? 'add' : 'remove']('hide');
            }
        }
    }

    async function startTouch(value) {
        buttonsCardRef.startTouch = Math.floor(value);
    }

    async function endTouch(value) {
        const hasElement = (index) => !buttonsCardRef.current.children[index].classList.contains('hide');
        buttonsCardRef.endTouch = Math.floor(value);

        const diference = buttonsCardRef.startTouch - buttonsCardRef.endTouch;
        // console.log(lineCardsRef.current.children)
        // console.log(centerCardIndex(), findChildByClass(`position-${centerCardIndex()-1}`));
        if (diference < -120 && hasElement(0)) setCenterPosit(centerCardIndex());
        if (diference > 120 && hasElement(1)) setCenterPosit(centerCardIndex() + 2);
    }
}

function TechElement({ imgIcon, preTitle, title, description }) {
    return (
        <div className='tech__element'>
            <img src={imgIcon} />

            <div>
                <h3>{preTitle}</h3>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

function AdjustTitle({ title }) {
    const splitText = title.split(' ');

    if (splitText.length < 3) return <h2>{title}</h2>
    if (splitText.length >= 3) return <h2>{splitText[0]}<span> {splitText[1]} </span>{splitText.slice(2)}</h2>
}

function FeedbackCard({ imgCover, name, role, testimonial }) {
    return (
        <div className={`line__card rating__card `}>
            <img src={imgCover} alt={`Simulação de ${name} observando uma estufa.`} />
            <h2>{name}</h2>
            <h3>{role}</h3>
            <p>“{testimonial}”</p>
        </div>
    )
}

function CulltiveCards({ imgLogo, imgCover, imgAlt, title, subtitle, buttonText }) {
    // return (<div className={`card line__card position-${position}`}>
    return (<div className={`card line__card`}>
        <img className='logo' src={imgLogo} alt={imgAlt} />
        <img className='cover' src={imgCover} alt={`Capa da ${imgAlt}`} />

        <div className='texts'>
            <AdjustTitle title={title} />
            <p>{subtitle}</p>
        </div>

        <button>{buttonText}</button>
    </div>);
}

function BenefitsRoll({ setItems }) {
    const firstItems = setItems;
    const [cards, setCards] = useState([]);
    const [preCards, setPreCards] = useState([]);

    useEffect(() => { 
        const add = (item) => setCards(array => [...array, item]);
        const removeFirst = () => setCards(array => array.slice(1));
        let index = -1;
        const interval = setInterval(start, 10000);
        showPreValues();

        function start() {
            if (firstItems[index + 1]) index++;
            else index = 0;
            add(firstItems[index]);
            setTimeout(() => removeFirst(), 32000);
        }

        async function showPreValues() {
            const wait = async (time) => new Promise(res => setTimeout(res, time));
            const items = Array.from(firstItems);
            items.length = 4;
            setPreCards(items)

            await wait(2000);
            for (let count = 0; count < 4; count++) {
                setPreCards(cardsArray => cardsArray.slice(1));
                await wait(10000);
            }
        }

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='benefits__roll'>
            {preCards.map((card) => <div key={card.key} className={`benefits__card benefits__pre-card-${card.key}`}>{BenefitsTexts(card)}</div>)}
            {cards.map(card => <div key={card.key} className='benefits__card'>{BenefitsTexts(card)}</div>)}
            {/* <div className='default'>{children}</div> */}
        </div>
    )
}

function BenefitsTexts({ title, strongText, leftText }) {
    const text = (strongText) ? <p><strong>{strongText}</strong> {leftText}</p> : <p>{leftText}</p>
    return (
        <>
            <h1><span>/</span>{title}</h1>
            {text}
        </>
    )
}

function NewsLetterForm() {
    const [number, setNumber] = useState('');

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input placeholder='NOME COMPLETO' type='text' id='name' name='name' required />
            <input placeholder='ENDEREÇO DE E-MAIL' type='email' id='email' name='email' required />
            <input placeholder='TELEFONE COM DDD' type='tel' value={number} onChange={(e) => setNumber(adjustNumber(e.target.value))} id='telephone' name='telephone' required />
            <input type='submit' value={'Registrar-se'} className='submit' />
        </form>
    )

    function adjustNumber(value) {
        if (!value) return value;
        const phoneNumber = value.replace(/\D/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength === 0) return `${phoneNumber}`;
        if (phoneNumberLength < 3) return `(${phoneNumber}`;
        if (phoneNumberLength < 7) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
        if (phoneNumberLength < 11) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    }
}