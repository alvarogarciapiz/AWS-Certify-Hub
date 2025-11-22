# Contributing to AWS P2 — AWS Practice Portal

Thank you for your interest in contributing! We welcome all improvements, bug fixes, and new features.

## How to Contribute

1. **Fork the repository**  
   Click "Fork" at the top right of the GitHub page.

2. **Clone your fork locally**
   ```bash
   git clone https://github.com/your-username/AWS-Certify-Hub.git
   cd AWS-Certify-Hub
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Follow the code style: use 2 spaces for indentation, prefer functional components, and keep code modular.
   - Use English for comments and documentation.
   - Add or update tests if relevant.

5. **Run tests**
   ```bash
   npm test
   ```
   (If no tests exist, please add them in `src/__tests__` using your preferred React testing library.)

6. **Commit your changes**
   ```bash
   git commit -m "Describe your change"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Open a Pull Request**
   - Go to the original repository and click "Compare & pull request".
   - Fill in the PR template, describe your changes, and reference any related issues.

## Code Style

- Use [Prettier](https://prettier.io/) for formatting.
- Use ES6+ syntax.
- Keep components small and focused.
- Use descriptive variable and function names.
- Add JSDoc comments for exported functions/components.

## Pull Request Guidelines

- One feature/fix per PR.
- Link related issues in your PR description.
- Ensure your branch is up to date with `main`.
- All CI checks must pass before merging.

## Running the Project Locally

```bash
npm install
npm run dev
```

## Running Tests

```bash
npm test
```

## Reporting Bugs

- Open an issue with a clear description and steps to reproduce.
- Attach screenshots or logs if possible.

## Patch Submission

- For small fixes, you can submit a PR directly.
- For larger changes, open an issue first to discuss.

Thank you for helping improve AWS P2!
