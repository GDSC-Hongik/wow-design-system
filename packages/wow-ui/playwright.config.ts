import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e", // 테스트 파일들이 위치한 디렉토리
  timeout: 30 * 1000, // 테스트 타임아웃
  expect: {
    timeout: 5000, // expect 호출의 기본 타임아웃
  },
  retries: 0, // 실패 시 재시도 횟수
  reporter: "list", // 혹은 'html'로 설정하면 HTML 리포트 생성됨
  use: {
    baseURL: "http://localhost:6006", // Storybook이 실행 중인 주소
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: "only-on-failure", // 실패 시 스크린샷 저장
    video: "retain-on-failure",
  },
});
