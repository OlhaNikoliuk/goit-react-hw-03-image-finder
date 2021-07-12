import Loader from "react-loader-spinner";
import {LoaderWrapper} from './Loader.styled'

function Spinner() {
  return (
    <LoaderWrapper>
      <Loader
      type="Grid"
      color="#3f51b5"
      height={80}
      width={80}
      timeout={3000} //3 secs
    />
    </LoaderWrapper>
  );
}
export default Spinner;