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
    note: 'Shop and pay in multiple installments',
  },
  {
    iconName: RiRefund2Fill,
    heading: '30 Day Refund Policy',
    note: 'Within 30 days for an exchange',
  },
  {
    iconName: MdSupportAgent,
    heading: 'Online Support',
    note: '24 hours a day; 7 days a week',
  },
];

const DeliverablesList = () => {
  return (
    <section className='flex flex-col md:flex-row flex-wrap bg-white p-[2rem_0]'>
      <hr />
      {deliverablesData.map((deliverable, i) => {
        return (
          <div
            className='flex flex-col gap-4 items-center w-full md:w-[50%] lg:w-[25%] h-[165px] m-[2rem_0]'
            key={i}
          >
            <span>
              <deliverable.iconName className='text-[48px]' />
            </span>
            <h2 className='text-xl font-light'>{deliverable.heading}</h2>
            <p className='text-center text-[14px] text-[rgba(0,0,0,0.5)]'>
              {deliverable.note}
            </p>
          </div>
        );
      })}
      <hr />
    </section>
  );
};

export default DeliverablesList;
