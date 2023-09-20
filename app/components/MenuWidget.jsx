import { AiOutlineHome } from 'react-icons/ai';
import { FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';

const MenuWidget = () => {
  return (
    <section className='w-full flex lg:hidden fixed bottom-0'>
      <span className='flex justify-center items-center w-[25%] h-[50px] bg-[#ffffff] border-r-2'>
        <AiOutlineHome className='text-black text-2xl' />
      </span>
      <span className='flex justify-center items-center w-[25%] h-[50px] bg-[#ffffff] border-r-2'>
        <FiShoppingBag className='text-black text-2xl' />
      </span>
      <span className='flex justify-center items-center w-[25%] h-[50px] bg-[#ffffff] border-r-2'>
        <FiUser className='text-black text-2xl' />
      </span>
      <span className='flex justify-center items-center w-[25%] h-[50px] bg-[#ffffff]'>
        <FiSearch className='text-black text-3xl' />
      </span>
    </section>
  );
};

export default MenuWidget;
