type DescriptionViewProps = {
  description: string[]
  index: number
}

export const DescriptionView: React.FC<DescriptionViewProps> = (props) => {
  const { description, index } = props;  
  return (
    <ul className="list-disc ">
      {description.map((desc, j) =>
        <li key={"exp-desc"+index+j} className="ml-5 mt-3">
            {desc}
        </li>)}
    </ul>
  )
}
