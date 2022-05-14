const HomePage = () => {
  return (
    <main>
      <div className="px-4 py-5 my-2 text-center">
        <h1 className="display-5 fw-bold">React Template for Django</h1>
        <div className="col-lg-6 mx-auto">
          <div className="lead mb-4">
            This is a React template for Django projects. This project uses{" "}
            <span className="text-primary">
              <a
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
                href="https://reactrouter.com/"
              >
                react-router-dom@6
              </a>
            </span>{" "}
            for routing. And comes with some installed packages like:
            <pre className="bg-light p-3 mt-3 rounded">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-success">
                    <a
                      className="text-reset text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.npmjs.com/package/axios"
                    >
                      axios
                    </a>
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-success">
                    <a
                      className="text-reset text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.npmjs.com/package/jwt-decode"
                    >
                      jwt-decode
                    </a>
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-success">
                    <a
                      className="text-reset text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.npmjs.com/package/bootstrap"
                    >
                      Bootstrap 5
                    </a>
                  </span>
                </li>
              </ul>
            </pre>
            Edit
            <pre className="bg-light p-3 rounded">
              <code>
                <span className="text-primary">pages/HomePage.js</span>
              </code>
            </pre>
            to start customizing your project!
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
