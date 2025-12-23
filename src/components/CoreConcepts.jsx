
import './CoreConcepts.css';

export default function CoreConcept({title, image, description}){
  return (
    <ul>
      <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
    </ul>
    
  );
}