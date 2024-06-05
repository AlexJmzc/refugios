import { Header } from '../header/header';
import { Container } from '../container/container';
import { Information } from '../information/information';
import { Footer } from '../footer/footer';
import { useState } from 'react';

export const Main = () => {
  const [language, setLanguage] = useState('Spanish');

  return (
    <>
        <Header language={language} setLanguage={setLanguage}/>
        <Information language={language}/>
        <Container language={language}/>
        <Footer language={language}/>
    </>
  )
}
