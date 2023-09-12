import { FaShippingFast } from 'react-icons/fa';
import { MdPayments, MdSupportAgent } from 'react-icons/md';
import { RiRefund2Fill } from 'react-icons/ri';

const deliverablesData = [
  {
    iconName: FaShippingFast,
    heading: 'Free Shipping',
    note: 'We deliver at great low prices',
  },
  {
    iconName: MdPayments,
    heading: 'Flexible Payment',
    note: 'Shop and Pay in Multiple Installments',
  },
  {
    iconName: RiRefund2Fill,
    heading: '30 Day Refund Policy',
    note: 'Within 30 days for an exchange',
  },
  {
    iconName: MdSupportAgent,
    heading: 'Online Support',
    note: '24 hours a day, 7 days a week',
  },
];

const DeliverablesList = () => {
  return (
    <section className='flex flex-col bg-white p-[2rem_0]'>
      <hr />
      {deliverablesData.map((e, i) => {
        return (
          <div className='flex flex-col justify-between items-center w-full h-[165px] mb-[2rem]' key={i}>
            <span>
              <e.iconName className='text-[48px]' />
            </span>
            <h2 className='text-xl'>{e.heading}</h2>
            <h2 className=''>{e.note}</h2>
          </div>
        );
      })}
      <hr />
    </section>
  );
};

export default DeliverablesList;
