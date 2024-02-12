
import RestData from "../Data/RestData";
import RestaurantCard from "../components/Card";
import '../styles/Home.css'
function Home() {
  return (
    <>
      <div className="txt" style={{alignContent:'center', justifyContent:'center'}} >
        {RestData.map((restaurant, index) => (
          <RestaurantCard
            key={index}
            imageUrl={restaurant.imageUrl}
            restname={restaurant.restname}
            Rating={restaurant.Rating}
            price={restaurant.price}
            Area={restaurant.Area}
          />

        ))}
      </div>
    </>
  );
}
export default Home;