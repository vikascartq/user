import Image from "next/image";
import ButtonAction from "../buttons/ButtonAction";
import "./candidate-card.css";
export default function CandidateCard({ title, description, tags, onContact, imageName }: CandidateCardProps) {
    return (
        <div className="candidate-card">
            <Image src={`/candidates/${imageName}.png`} alt="candidate" className="candidate-img" width={200} height={200} />
            <div>
                <h4 className="candidate-card-title">{title}</h4>
                <p className="candidate-card-description">{description}</p>
            </div>
            <div className="candidate-card-tag-group">
                {tags.map((tag, index) => (
                    <div className="candidate-card-tag" key={index}>
                        {tag}
                    </div>
                ))}
            </div>
            <ButtonAction
                type="primary"
                text="Contact Us"
                onClick={onContact}
            />
        </div>
    )
}

interface CandidateCardProps {
    title: string;
    description: string;
    tags: string[];
    onContact: () => void;
    imageName: string;
}