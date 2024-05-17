import type { TestRunnerConfig } from "@storybook/test-runner";
import { injectAxe, checkA11y } from "axe-playwright";

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async prepare({ page, browserContext, testRunnerConfig }) {
    page.setDefaultTimeout(120 * 1000);

    const targetURL = process.env.TARGET_URL;
    const iframeURL = new URL("iframe.html", targetURL).toString();

    if (testRunnerConfig.getHttpHeaders) {
      const headers = await testRunnerConfig.getHttpHeaders(iframeURL);
      await browserContext.setExtraHTTPHeaders(headers);
    }

    await page.goto(iframeURL, { waitUntil: "load" }).catch((err) => {
      if (
        err instanceof Error &&
        err.message.includes("ERR_CONNECTION_REFUSED")
      ) {
        const errorMessage = `Could not access the Storybook instance at ${targetURL}. Are you sure it's running?\n\n${err.message}`;
        throw new Error(errorMessage);
      }

      throw err;
    });
  },
};

export default config;
