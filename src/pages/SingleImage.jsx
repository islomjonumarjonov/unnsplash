import { useParams } from "react-router-dom";

function SingleImage() {
  const { id } = useParams();
  console.log(params);
  return <div>SingleImage</div>;
}

export default SingleImage;
