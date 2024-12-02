import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { StoreContext } from '../context/Context';

const ProductCard = ({ id, img, name, offer }) => {

  const { addToWishlist, change_heart } = useContext(StoreContext);

  const handleHeartClick = (e) => {
    e.preventDefault();
    addToWishlist(id);
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white w-[20rem] h-[28rem] overflow-hidden border-[1px] border-slate-300">
        <div className="w-[20rem] h-[24rem] overflow-hidden flex justify-center items-center bg-white">
          <img src={img} alt="products" />
        </div>
        <div
          className="absolute mt-[-23rem] bg-white ml-[16rem] w-[3rem] h-[3rem] flex justify-center items-center rounded-full overflow-hidden"
          onClick={handleHeartClick}  // Attach the custom heart click handler here
        >
          <FaHeart
            className={`text-[1.5rem] cursor-pointer bg-white ${
              change_heart[id] ? 'text-red-500' : 'text-slate-300'
            }`}
          />
        </div>
        <div className="bg-white">
          <p className="text-[0.9rem] text-[#555555] font-bold ml-1 bg-white h-6 overflow-hidden">
            {name}
          </p>
          <div className="flex justify-center bg-white">
            <p className="text-[1.5rem] font-bold text-[#108934] bg-white">
              Up to {offer} off
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
