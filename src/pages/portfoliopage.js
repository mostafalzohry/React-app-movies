import React from "react";
import '../App.css';
import HeaderComponent from '../component/header';
import AboutComponent from '../component/about';
import SkillsComponent from '../component/Skills';
import PortfolioComponent from '../component/portfolio';
import FooterComponent from '../component/footer';


export default function PortfoliopageComponent () {
 
    return (
      <>
         
      <HeaderComponent />
      <AboutComponent />
      <SkillsComponent/>
      <PortfolioComponent/>
      <FooterComponent/>
    
  );
      </>
      
    );
  
}
