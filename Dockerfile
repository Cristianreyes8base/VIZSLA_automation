FROM cypress/browsers:lastest

RUN mkdir /cypress-project

WORKDIR /cypress-project

# dependencies will be installed only if the package files change
COPY package.json .
COPY package-lock.json .
COPY ./cypress.json .
COPY ./cypress ./cypress
COPY ./dev.config.js .

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243

RUN npm install

ENTRYPOINT ["npx", "cypress", "run"]

# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
CMD [""]
