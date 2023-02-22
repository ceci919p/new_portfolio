import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>Portfolio 2022</li>
        <li>© Cecilie Jasmin 2023</li>
      </ul>
      <ul className="socials">
        <li>
          <Link href={"https://github.com/ceci919p"}>
            <FaGithub size={40} />
          </Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/in/cecilie-jasmin/"}>
            <FaLinkedin size={40} />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
