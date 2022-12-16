import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  const images = [
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189683566-57627799-99b9-4865-8518-014067ac22d7.jpg' },
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189683660-f6ee5660-2ddc-4bff-8655-8a6888f962bd.jpg' },
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189683772-7162e70d-fd23-4167-8ea5-64244a61406b.png' },
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189683873-9be2d062-5738-4bf4-bd1a-18e5f6083162.jpg' },
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189684162-bc45d0e1-5bde-4fdf-a089-ab7f10eb5732.jpg' },
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189684252-c95a16c0-9b73-41e9-8b58-f0e488818c86.jpg' },
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189684357-9dfcba4c-42fd-440b-b36a-6a9a2bdffe32.jpg' },
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189684445-d7fa6cb7-f8b5-476f-9a89-101ba022fe4e.jpg' },
    { imgUrl: 'https://user-images.githubusercontent.com/81305824/189684542-7d0c80f9-0cf4-4c52-8826-1cd50ea18119.jpg' }
    ];

  return (
    <>
      <HeroSection />
      <Cards images={images}/>
      <Footer />
    </>
  );
}

export default Home;
