function Footer(props) {
  return (
    <footer className="absolute left-0 sm:left-12 bottom-6">
      <p className={`text-center text-base text-gray-${props.timeToHack ? 900 : 400}`}>
        Created by{' '}
        <a
          href="https://github.com/evgeniyPP"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline"
        >
          Eugene Petryankin
        </a>
        . The calculations are based on{' '}
        <a
          href="https://hivesystems.io/password"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline"
        >
          Hive Systems methodology
        </a>
        . We do not save any data, do not worry.
      </p>
    </footer>
  );
}

export default Footer;
