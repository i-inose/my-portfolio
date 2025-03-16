import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialLinks: React.FC = () => {
	return (
		<div>
			<a href="https://github.com/i-inose" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faGithub} size = '2x' />
			</a>
			<a href="https://x.com/i_inose0304" target="_blank" rel="noopener noreferref">
				<FontAwesomeIcon icon={faTwitter} size="2x" />
			</a>
		</div>
	);
};

export default SocialLinks;