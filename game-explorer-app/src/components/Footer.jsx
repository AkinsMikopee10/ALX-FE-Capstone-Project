const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-4 mt-6">
      <p className="text-gray-600 dark:text-gray-300">
        Powered by{" "}
        <a
          href="https://rawg.io/apidocs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          RAWG API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
