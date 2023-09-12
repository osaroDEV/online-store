import { FaShippingFast } from 'react-icons/fa';
import { MdPayments, MdSupportAgent } from 'react-icons/md';
import { RiRefund2Fill } from 'react-icons/ri';

// import { FaShippingFast, MdPayments, RiRefund2Fill, MdSupportAgent } from 'react-icons/all';

// const iconComponents = {
//   FaShippingFast,
//   MdPayments,
//   RiRefund2Fill,
//   MdSupportAgent,
// };

const Card = ({ iconName, heading, note }) => {
  const IconComponent = eval(iconName); // Dynamically resolve the icon component

  // const IconComponent = iconComponents[iconName];

  return (
    <div className=''>
      <div className=''>
        <IconComponent />
      </div>
      <div className=''>
        <h2>{heading}</h2>
        <p>{note}</p>
      </div>
    </div>
  );
};

const MissionTemplate = ({ data }) => {
  return (
    <div className=''>
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default MissionTemplate;
