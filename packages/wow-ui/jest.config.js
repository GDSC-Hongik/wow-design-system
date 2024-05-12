export default {
  preset: "rollup-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",

  verbose: true, // 각각의 테스트 결과를 보기 위한 옵션
  collectCoverage: true, // 테스트 적용 범위 정보 (명령문 / 분기문 / 함수 /코드 라인 / 테스트되지 못한 줄)
  restoreMocks: true, // 각 테스트 실행 전 mock 정리
  testMatch: ["<rootDir>/src/**/*.test.(js|jsx|ts|tsx)"],
  testPathIgnorePatterns: [
    "<rootDir>/styled-system/",
    "<rootDir>/node-modules/",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/styled-system/",
    "<rootDir>/node-modules/",
  ],
  moduleNameMapper: {
    "^@styled-system(.*)$": "<rootDir>/styled-system$1",
  },
};
