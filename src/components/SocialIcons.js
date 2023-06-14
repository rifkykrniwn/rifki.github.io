const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/rifkykrniwn">
        <i className="fa-brands fa-github" aria-hidden="true" title="Muhammad Rifki Kurniawan' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/rifkikrniwn/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Muhammad Rifki Kurniawan' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/rifkykrniwn/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Muhammad Rifki Kurniawan' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/mmrifkii">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Muhammad Rifki Kurniawan' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
