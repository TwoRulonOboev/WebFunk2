import FirstBlok from '../components/FirstBlock/FirstBlock.tsx';
import SekondBlok from '../components/SecondBlock/SecondBlock.tsx';
import SerdBlok from '../components/ThirdBlock/ThirdBlock.tsx';
import FerdBlok from '../components/ReviewSection/ReviewSection.tsx';
import RegistrationBlock from '../components/RegistrationBlock/RegistrationBlock.tsx';

const Home = () => {
  return (
    <div>
      <FirstBlok />
      <SekondBlok />
      <SerdBlok />
      <FerdBlok />
      <RegistrationBlock />
    </div>
  );
};

export default Home;
