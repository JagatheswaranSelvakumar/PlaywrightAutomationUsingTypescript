# PlaywrightAutomationUsingTypescript


1. npx playwright test  ———> Run all tests
2. npx playwright test tests/google.spec.ts  ——> Run a specific test file
3. npx playwright test -g "Home page should load successfully”.  ——> Run a specific test using test name pattern
4. npx playwright test tests/google.spec.ts:8  ——> Run a specific test using line number
5. npx playwright test tests/google/  ——> Runs tests in a specific directory
6. npx playwright test --grep “@smoke” —> Run tests with a specific tag
7. npx playwright test --grep-invert “@wip”  —> Run tests except those with a specific tag
8. npx playwright test —> Run tests in parallel(Default)
9. npx playwright test --workers=1 —> Run tests in sequentially
10. npx playwright test -g "Search box should be visible"  —> Run a specific test by name
11. npx playwright test --config=playwright.config.ts —> Run a  test using a specific config file
12. npx playwright test --project=chromium   —> Run a  test using a specific project from config
13. npx playwright test --reporter=html   —> Run a  test using a specific reporter
14. npx playwright test --headed —> Run a  test in headed mode
15. npx playwright test --debug —> Run a  test in debug mode
16. BASE_URL=https://ww.amazon.com npx playwright test —> Specify base url in command while running a test

npx playwright test --headed --project=chromium --workers=1  --reporter=html
