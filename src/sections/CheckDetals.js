import Navbar from "../components/Navbar";
import CheckDetailsMain from "../components/CheckDetailsMain";
import { useFetchCoffeIdQuery } from "../apis/coffesApi";
import ImgLine from "../img/line.png";
import Footer from "./Footer";
import { useParams } from "react-router";
import RandomDetailsCards from "../components/RandomDetailsCards";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CheckDetals = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchCoffeIdQuery(id);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center text-7xl">
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
          <AiOutlineLoading3Quarters />
        </svg>
      </div>
    );
  }

  if (isError) {
    return <div>error fetching coffe</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto mt-[7rem] mb-[3rem]">
        <CheckDetailsMain key={data.id} coffe={data} />;
        <div className="mt-[9rem] mb-[4rem] flex flex-col justify-center items-center">
          <h3 className="text-4xl font-semibold">Other products</h3>
          <img src={ImgLine} alt="linephoto" />
        </div>
        <RandomDetailsCards coffe={data} />
      </div>
      <Footer />
    </div>
  );
};

export default CheckDetals;
/* 
 const { data, isLoading, isError } = useFetchCoffesQuery();
  const [items, setItmes] = useState([]);
  const { checkDetailsItem } = useContext(CoffeContext);

  const randomItems = data
    .slice()
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const checkRandomItems = randomItems.some(
    (item) => item.id === checkDetailsItem.id
  );

  useEffect(() => {
    if (checkRandomItems) {
      setItmes(randomItems);
    }
  }, [checkRandomItems, randomItems]);

  let content;
  if (isLoading) {
    return (content = <div>Loading...</div>);
  } else if (isError) {
    return (content = <div>Error fetching data</div>);
  } else {
    content = <ShopSectionCard visibleItems={randomItems || items} />;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-[1200px] mx-auto mt-[7rem] mb-[3rem]">
        <CheckDetailsMain />

        <div className="mt-[9rem] mb-[4rem] flex flex-col justify-center items-center">
          <h3 className="text-4xl font-semibold">Other products</h3>
          <img src={ImgLine} alt="linephoto" />
        </div>
        {content}
      </div>
      <Footer />
    </div>
  );
  */
