import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Links = () => {
  const links = [
    {
      href: "https://twitter.com/peter_uadiale?s=09",
      icon: <FiTwitter />,
      id: 1,
    },
    {
      href: "https://www.instagram.com/peter_xavier__/",
      icon: <FiInstagram />,
      id: 2,
    },
    {
      href: "https://www.linkedin.com/in/peter-uadiale-69541a19a/",
      icon: <FiLinkedin />,
      id: 3,
    },
  ];

  return (
    <div className="link mb-5">
      <h1>Links</h1>
      <hr />
      <div className="links">
        {links.map((link) => (
          <a key={link.id} href={link.href}>
            <i>{link.icon}</i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Links;
