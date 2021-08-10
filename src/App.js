
import './App.css';
import IdCard from './Components/IdCard';
import LikeButton from "./Components/LikeButton";
import Greetings from "./Components/Greetings";
import Random from "./Components/Random";
import BoxColor from './Components/BoxColor';
import CreditCard from './Components/CreditCard';
import Rating from './Components/Rating';
import DriverCard from './Components/DriverCard';



function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <header className="App-header"></header>
    <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Greetings lang="de">Biggy</Greetings>
<Greetings lang="en">Tupac</Greetings> 
<LikeButton />
<Random min={1} max={6}/>
<Random min={1} max={100}/>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
<CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" />
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>
<DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }} />
</div>

  );
}

export default App;
