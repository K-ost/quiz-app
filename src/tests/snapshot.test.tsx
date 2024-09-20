import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import App from "../App";

it("App snapshot", () => {
  const result = render(<App />);
  expect(result).toMatchInlineSnapshot(`
    {
      "asFragment": [Function],
      "baseElement": <body>
        <div>
          <div
            class="sc-blHHSb jyORmC"
          >
            <header
              class="sc-ivxoEo gSbFhj"
            >
              <div />
              <div
                class="sc-gtLWhw bYJCxj"
              >
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z"
                    fill="#626C7F"
                  />
                </svg>
                <input
                  aria-label="Theme switcher"
                  class="sc-egkSDF fnGnLq"
                  type="checkbox"
                />
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z"
                    fill="#626C7F"
                  />
                </svg>
              </div>
            </header>
            <main>
              <div
                class="sc-ghWlax dPRzKn"
              >
                <div>
                  <h1>
                    Welcome to the 
                    <b>
                      Frontend Quiz!
                    </b>
                  </h1>
                  <div
                    class="color-grey"
                  >
                    <em>
                      Pick a subject to get started.
                    </em>
                  </div>
                </div>
                <div>
                  <button
                    class="sc-kLhKbu dvlqpE"
                    data-testid="subject-HTML"
                  >
                    <span
                      class="sc-fAUdSK hVECkn"
                    >
                      <span
                        class="sc-dntaoT cxMXjn html"
                      >
                        <img
                          alt=""
                          src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-html.svg"
                        />
                      </span>
                      HTML
                    </span>
                  </button>
                  <button
                    class="sc-kLhKbu dvlqpE"
                    data-testid="subject-CSS"
                  >
                    <span
                      class="sc-fAUdSK hVECkn"
                    >
                      <span
                        class="sc-dntaoT cxMXjn css"
                      >
                        <img
                          alt=""
                          src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-css.svg"
                        />
                      </span>
                      CSS
                    </span>
                  </button>
                  <button
                    class="sc-kLhKbu dvlqpE"
                    data-testid="subject-JavaScript"
                  >
                    <span
                      class="sc-fAUdSK hVECkn"
                    >
                      <span
                        class="sc-dntaoT cxMXjn javascript"
                      >
                        <img
                          alt=""
                          src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-js.svg"
                        />
                      </span>
                      JavaScript
                    </span>
                  </button>
                  <button
                    class="sc-kLhKbu dvlqpE"
                    data-testid="subject-Accessibility"
                  >
                    <span
                      class="sc-fAUdSK hVECkn"
                    >
                      <span
                        class="sc-dntaoT cxMXjn accessibility"
                      >
                        <img
                          alt=""
                          src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-accessibility.svg"
                        />
                      </span>
                      Accessibility
                    </span>
                  </button>
                  <button
                    class="sc-kLhKbu dvlqpE"
                    data-testid="subject-React"
                  >
                    <span
                      class="sc-fAUdSK hVECkn"
                    >
                      <span
                        class="sc-dntaoT cxMXjn react"
                      >
                        <img
                          alt=""
                          src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-react.svg"
                        />
                      </span>
                      React
                    </span>
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>,
      "container": <div>
        <div
          class="sc-blHHSb jyORmC"
        >
          <header
            class="sc-ivxoEo gSbFhj"
          >
            <div />
            <div
              class="sc-gtLWhw bYJCxj"
            >
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z"
                  fill="#626C7F"
                />
              </svg>
              <input
                aria-label="Theme switcher"
                class="sc-egkSDF fnGnLq"
                type="checkbox"
              />
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z"
                  fill="#626C7F"
                />
              </svg>
            </div>
          </header>
          <main>
            <div
              class="sc-ghWlax dPRzKn"
            >
              <div>
                <h1>
                  Welcome to the 
                  <b>
                    Frontend Quiz!
                  </b>
                </h1>
                <div
                  class="color-grey"
                >
                  <em>
                    Pick a subject to get started.
                  </em>
                </div>
              </div>
              <div>
                <button
                  class="sc-kLhKbu dvlqpE"
                  data-testid="subject-HTML"
                >
                  <span
                    class="sc-fAUdSK hVECkn"
                  >
                    <span
                      class="sc-dntaoT cxMXjn html"
                    >
                      <img
                        alt=""
                        src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-html.svg"
                      />
                    </span>
                    HTML
                  </span>
                </button>
                <button
                  class="sc-kLhKbu dvlqpE"
                  data-testid="subject-CSS"
                >
                  <span
                    class="sc-fAUdSK hVECkn"
                  >
                    <span
                      class="sc-dntaoT cxMXjn css"
                    >
                      <img
                        alt=""
                        src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-css.svg"
                      />
                    </span>
                    CSS
                  </span>
                </button>
                <button
                  class="sc-kLhKbu dvlqpE"
                  data-testid="subject-JavaScript"
                >
                  <span
                    class="sc-fAUdSK hVECkn"
                  >
                    <span
                      class="sc-dntaoT cxMXjn javascript"
                    >
                      <img
                        alt=""
                        src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-js.svg"
                      />
                    </span>
                    JavaScript
                  </span>
                </button>
                <button
                  class="sc-kLhKbu dvlqpE"
                  data-testid="subject-Accessibility"
                >
                  <span
                    class="sc-fAUdSK hVECkn"
                  >
                    <span
                      class="sc-dntaoT cxMXjn accessibility"
                    >
                      <img
                        alt=""
                        src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-accessibility.svg"
                      />
                    </span>
                    Accessibility
                  </span>
                </button>
                <button
                  class="sc-kLhKbu dvlqpE"
                  data-testid="subject-React"
                >
                  <span
                    class="sc-fAUdSK hVECkn"
                  >
                    <span
                      class="sc-dntaoT cxMXjn react"
                    >
                      <img
                        alt=""
                        src="file:///Users/konstantingolubkov/Desktop/quiz-app/src/assets/icon-react.svg"
                      />
                    </span>
                    React
                  </span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>,
      "debug": [Function],
      "findAllByAltText": [Function],
      "findAllByDisplayValue": [Function],
      "findAllByLabelText": [Function],
      "findAllByPlaceholderText": [Function],
      "findAllByRole": [Function],
      "findAllByTestId": [Function],
      "findAllByText": [Function],
      "findAllByTitle": [Function],
      "findByAltText": [Function],
      "findByDisplayValue": [Function],
      "findByLabelText": [Function],
      "findByPlaceholderText": [Function],
      "findByRole": [Function],
      "findByTestId": [Function],
      "findByText": [Function],
      "findByTitle": [Function],
      "getAllByAltText": [Function],
      "getAllByDisplayValue": [Function],
      "getAllByLabelText": [Function],
      "getAllByPlaceholderText": [Function],
      "getAllByRole": [Function],
      "getAllByTestId": [Function],
      "getAllByText": [Function],
      "getAllByTitle": [Function],
      "getByAltText": [Function],
      "getByDisplayValue": [Function],
      "getByLabelText": [Function],
      "getByPlaceholderText": [Function],
      "getByRole": [Function],
      "getByTestId": [Function],
      "getByText": [Function],
      "getByTitle": [Function],
      "queryAllByAltText": [Function],
      "queryAllByDisplayValue": [Function],
      "queryAllByLabelText": [Function],
      "queryAllByPlaceholderText": [Function],
      "queryAllByRole": [Function],
      "queryAllByTestId": [Function],
      "queryAllByText": [Function],
      "queryAllByTitle": [Function],
      "queryByAltText": [Function],
      "queryByDisplayValue": [Function],
      "queryByLabelText": [Function],
      "queryByPlaceholderText": [Function],
      "queryByRole": [Function],
      "queryByTestId": [Function],
      "queryByText": [Function],
      "queryByTitle": [Function],
      "rerender": [Function],
      "unmount": [Function],
    }
  `);
});
