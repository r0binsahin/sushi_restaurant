import { Footer } from '../Footer';
import { NavbarMenu } from '../NavbarMenu';
import { DIV } from '../styled/Div';
import { MENU } from '../styled/Menu';

export const MenuPage = () => {
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <h1>Meny</h1>

      <DIV style={{ backgroundColor: 'black' }}>
        <MENU>
          <h3>California Roll</h3>
          <img src='https://images.unsplash.com/photo-1633478062482-790e3b5dd810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'></img>
          <p>10 bitar uramaki.</p>
          <span>139 kr</span>
        </MENU>
        <MENU>
          <h3>Lax nigiri</h3>
          <img src='https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'></img>
          <p>12 bitar nigiri med lax</p>
          <span>145kr</span>
        </MENU>
        <MENU>
          <h3>Sashimi mix</h3>
          <img src='https://images.unsplash.com/photo-1635527643921-ce2b9bbd5728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=801494_86390285.jpg'></img>
          <p> Sashimi av lax, tonfisk och hälleflundra </p>
          <span>155 kr</span>
        </MENU>
        <MENU>
          <h3>Maki</h3>
          <img src='https://images.unsplash.com/photo-1617196034738-26c5f7c977ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'></img>
          <p>8 bitar maki med lax.</p>
          <span>145 kr</span>
        </MENU>
        <MENU>
          <h3>Kockens val</h3>
          <img src='https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'></img>
          <p>8 bitar nigiri blandar</p>
          <span>150 kr</span>
        </MENU>
      </DIV>

      <Footer></Footer>
    </>
  );
};
