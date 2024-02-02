import { Link } from 'react-router-dom';
import { Button } from '../styled/Button';
import '../../index.css';
import { DIV } from '../styled/Div';
import { Footer } from '../Footer';
import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import { Title } from '../styled/Title';
import { NavbarMenu } from '../NavbarMenu';

export const StartPage = () => {
  const booking = useContext(BookingContext);
  return (
    <>
      <NavbarMenu></NavbarMenu>
      <DIV style={{ backgroundColor: 'black' }}>
        <div
          style={{
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            margin: '10px',
          }}
        >
          <h1 style={{ fontFamily: "'Pacifico', cursive", color: 'white' }}>
            Välkommen till
          </h1>
          <Title style={{ margin: 0 }}>SUSHIHAKET</Title>
          <div style={{ width: '90%', height: '90%' }}>
            <img
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: '15px',
              }}
              src='https://images.unsplash.com/photo-1608738773876-175504237f44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
            ></img>
          </div>
        </div>

        <p style={{ color: 'white', fontFamily: "'Noto Sans JP', sans-serif" }}>
          Vi är glada att du har hittat hit och välkomnar dig till en
          smakupplevelse utöver det vanliga. Hos oss kan du förvänta dig färska
          råvaror av högsta kvalitet och en autentisk sushiupplevelse som tar
          dig direkt till Japan. Vår passion för sushi återspeglas i varje bit
          vi skapar.
          <br />
          <br />
          Utforska vårt omfattande menyutbud som inkluderar klassiska
          sushirullar, nigiri, sashimi och specialkomponerade kreationer som
          kommer att överraska och glädja din smakpalett. Kom och upptäck en ny
          dimension av sushi.
          <br />
          <br />
          Vi ser fram emot att få möta dig och få äran att ge dig en oförglömlig
          matupplevelse. Välkommen till vår sushirestaurang - smaklig måltid!
        </p>

        <Button>
          <Link to='/meny' style={{ textDecoration: 'none', color: 'white' }}>
            Kika på menyn
          </Link>
        </Button>
        <Button>
          <Link
            to='/bokabord'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Boka bord
          </Link>
        </Button>
      </DIV>
      <Footer></Footer>
    </>
  );
};
