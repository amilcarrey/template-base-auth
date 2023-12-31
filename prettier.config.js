/** @type {import('prettier').Config} */
module.exports = {
   endOfLine: "lf",
   trailingComma: 'es5',
   tabWidth: 2,
   semi: false,
   singleQuote: true,
   importOrder: [
      '^(react/(.*)$)|^(react$)',
      '^(next/(.*)$)|^(next$)',
      '<THIRD_PARTY_MODULES>',
      '',
      '^types$',
      '^@/types/(.*)$',
      '^@/config/(.*)$',
      '^@/lib/(.*)$',
      '^@/hooks/(.*)$',
      '^@/components/ui/(.*)$',
      '^@/components/(.*)$',
      '^@/app/(.*)$',
      '',
      '^[./]',
   ],
   plugins: [require('prettier-plugin-tailwindcss'), "@ianvs/prettier-plugin-sort-imports"],
}