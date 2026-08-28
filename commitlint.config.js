module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [0],
    'subject-empty': [0],
    'header-max-length': [0],
    'header-trim': [0],
    'subject-case': [0],
    'subject-max-length': [0],
    'body-max-line-length': [0],
    'body-leading-blank': [0],
    'footer-max-line-length': [0],
    'footer-leading-blank': [0],
  },
  ignores: [
    // Skip specific historical commits with non-compliant messages
    (msg) => msg.startsWith('IssuerRegistry: on-chain issuer metadata'),
    // Skip bot-generated commits (e.g. greptile-apps[bot], dependabot)
    (msg) => /^\s*(?:Update\s+\.github\/|Bump\s+)/i.test(msg),
  ],
};
