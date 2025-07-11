// lint-staged.config.js
export default {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '*.{json,md}': ['prettier --write'],
};
