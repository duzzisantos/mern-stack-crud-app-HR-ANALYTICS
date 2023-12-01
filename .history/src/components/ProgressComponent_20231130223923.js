import { ProgressBar, Card } from "react-bootstrap";

const ProgressComponent = ({progressTitle, currentvalue}) => {
  return (
    <ProgressBar variant="info" now={currentvalue}/>
  )
}

export ProgressComponent