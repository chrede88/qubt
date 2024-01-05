module.exports = {
  plugins: ['prettier-plugin-go-template','prettier-plugin-tailwindcss'],
  bracketSameLine: true,
  goTemplateBracketSpacing: true,
  singleAttributePerLine: false,
  printWidth: 200,
  overrides: [
    {
      "files": ["*.html"],
      "options": {
        "parser": "go-template"
      }
    }
  ]
}